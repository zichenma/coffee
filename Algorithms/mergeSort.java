package amazon;

import java.util.Arrays;

public class mergeSort {
	 /*
     * @param A: an integer array
     * @return: 
     */
    public static void sortIntegers(int[] A) {
        // write your code here
        if (A == null || A.length == 0) {
            return;
        }
        int[] temp = new int[A.length];
        mergeSort(A, 0, A.length - 1, temp );
    }
    
    private static void mergeSort(int[] A, int start, int end, int[] temp) {
        if (start >= end) {
            return; 
        }
        int middle = start + (end - start) / 2;
        mergeSort(A, start, middle, temp);
        mergeSort(A, middle + 1, end, temp);
        merge(A, start, end, temp);
    }
    
    private static void merge(int[] A, int start, int end, int[] temp) {
        int mid = start + (end - start) / 2;
        int leftIndex = start; 
        int rightIndex = mid + 1;
        int index = leftIndex;
        
        while (leftIndex <= mid && rightIndex <= end) {
            if (A[leftIndex] < A[rightIndex]) {
                temp[index++] = A[leftIndex++];
            } else {
                temp[index++] = A[rightIndex++];
            }
        }
        
        while (leftIndex <= mid) {
            temp[index++] = A[leftIndex++];
        }
        
        while (rightIndex <= end) {
            temp[index++] = A[rightIndex++];
        }
        
        for (int i = start; i <= end; i++) {
            A[i] = temp[i];
        }
    }

	public static void main(String[] args) {
		int[] a = {3,2,1,4,5};
		sortIntegers(a);
		System.out.println(Arrays.toString(a));
	}

}
