import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        int[] nums = {10, 20, 30, 40, 50};
        reverseArray(nums); 
        System.out.println("Reversed Array: " + Arrays.toString(nums));
    }
    public static void reverseArray(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
}
