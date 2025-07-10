🔁 Two-Pointer Technique (In-place Swap)


class Solution {
    public void reverseString(char[] s) {
        int i = 0;
        int j = s.length - 1;
        for( i=0;i<s.length/2;i++,j--){
            char temp = s[i];
            s[i] = s[j];
            s[j] = temp;
        }
    }
}


Recursive Approach

class Solution {
    public void reverseString(char[] s) {
        reverse(s, 0, s.length - 1);
    }
    private void reverse(char[] s, int left, int right) {
        if (left >= right) return;
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        reverse(s, left + 1, right - 1);
    }
}
