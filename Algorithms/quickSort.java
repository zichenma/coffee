import java.util.Arrays;

public class testing {
	 /*
     * @param A: an integer array
     * @return: 
     */
    public static void sortIntegers(int[] A) {
        // write your code here
        if (A == null || A.length == 0) {
            return;
        }
        quickSort(A, 0, A.length - 1);
    }
    
    private static void quickSort(int[] A, int start, int end) {
        if (start >= end) {
            return;
        }
        int left = start, right = end;
        int pivot = A[start + (end - start) / 2];
        
        while (left <= right) {
            while (left <= right && A[left] < pivot) {
                left++;
            } 
            while (left <= right && A[right] > pivot) {
                right--;
            }
            
            if (left <= right) {
                int temp = A[left];
                A[left] = A[right];
                A[right] = temp;
                left++;
                right--;
            }
        }
        quickSort(A, start, right);
        quickSort(A, left, end);
    }

	public static void main(String[] args) {
		int[] a = {3,2,1,4,5};
		sortIntegers(a);
		System.out.println(Arrays.toString(a));
	}

}
