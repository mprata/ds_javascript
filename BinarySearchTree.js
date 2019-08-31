const TreeNode = require('./TreeNode');
const root = Symbol("root");

class BinarySearchTree {
    constructor() {
        this[root] = null;
    }

    insert(data) {
        let treeNode = new TreeNode(data);
        if (this[root] == null) {
            this[root] = treeNode;
            return;
        }
        this.insertNode(this[root], treeNode);
    }

    insertNode(node, oNewNode) {
        if (oNewNode.data < node.data) {
            if (node.left == null) {
                node.left = oNewNode;
            } else {
                this.insertNode(node.left, oNewNode);
            }
        } else {
            if (node.right == null) {
                node.right = oNewNode;
            } else {
                this.insertNode(node.right, oNewNode);
            }
        }
    }

    remove(data) {
        this[root] = this.removeNode(this[root], data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }
        else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            if (node.left == null) {
                node = node.right;
                return node;
            }
            else if (node.right == null) {
                node = node.left;
                return node;
            }

            let minNodeFromRight = this.findMinNode(node.right);
            node.data = minNodeFromRight.data;
            node.right = this.removeNode(node.right, minNodeFromRight.data);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left == null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    search(node, data) {
        if (node == null) {
            return null;
        }
        else if (data < node.data) {
            return this.search(node.left, data);
        }
        else if (data > node.data) {
            return this.search(node.right, data);
        }
        else {
            return node;
        }
    }

    getRoot() {
        return this[root];
    }

    printTree() {
        let q = [], lastLevel = -1;
        let oNode = { node: this[root], level: 0 };
        q.unshift(oNode);
        while (q.length > 0) {
            let qNode = q.pop();
            if (lastLevel !== qNode.level) {
                console.log("");
                lastLevel = qNode.level;
            }
            process.stdout.write(`(${qNode.node.data})`);
            if (qNode.node.left !== null) {
                oNode = { node: qNode.node.left, level: qNode.level + 1 };
                q.unshift(oNode);
            }
            if (qNode.node.right !== null) {
                oNode = { node: qNode.node.right, level: qNode.level + 1 };
                q.unshift(oNode);
            }
        }
    }

    zigZagTraversal() {
        let currentlevel = [], nextLevel = [], leftToRight = true;
        currentlevel.push(this[root]);
        console.log("");
        while (currentlevel.length > 0) {
            let node = currentlevel.pop();
            process.stdout.write(`${node.data},`);
            if(leftToRight){
                if (node.left != null) {
                    nextLevel.push(node.left);
                }
                if (node.right != null) {
                    nextLevel.push(node.right);
                }
            } else {
                if (node.right != null) {
                    nextLevel.push(node.right);
                }
                if (node.left != null) {
                    nextLevel.push(node.left);
                }
            }
            if(currentlevel.length == 0){
                currentlevel = nextLevel;
                nextLevel = [];
                leftToRight = !leftToRight;
            }
        }
    }
}

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
BST.insert(8);
BST.insert(11);

BST.printTree()
BST.zigZagTraversal();