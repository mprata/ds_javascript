class MergeSort{

    sort(arr, low, high){
        if(low < high){
            let mid = Math.floor((low+high)/2);
            this.sort(arr, low, mid);
            this.sort(arr, mid+1, high);

            this.merge(arr, low, mid, high);
        }
    }

    merge(arr, low, mid, high){
        let size1 = mid - low + 1;
        let size2 = high - mid;
        let left = [], right = [], i, j;
        for(i = 0; i < size1; i++){
            left[i] = arr[low+i];
        }
        for(j = 0; j < size2; j++){
            right[j] = arr[mid+1+j];
        }

        i = j = 0;
        let k = low;
        while(i<size1 && j<size2){
            if(left[i] <= right[j]){
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }
        while(i < size1){
            arr[k] = left[i];
            i++;
            k++;
        }
        while(j < size2){
            arr[k] = right[j];
            j++;
            k++;
        }
    }
}

const mergesort = new MergeSort();
var testArr = [93, 48, 348, 345, 12, 49, 45, 294, 2334];
mergesort.sort(testArr, 0, testArr.length - 1);
console.log(testArr);