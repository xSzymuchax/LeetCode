/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        int overflow = 0;
        ListNode head = new ListNode();
        ListNode current = head;

        while (l1 != null || l2 != null){
            int sum = (l1?.val ?? 0) + (l2?.val ?? 0) + overflow;
            if (sum >= 10) {
                overflow=1;
                sum -=10;
            }
            else overflow = 0;

            current.next = new ListNode(sum, null);
            current = current.next;

            l1 = l1?.next;
            l2 = l2?.next;
        }
        if (overflow > 0)
            current.next = new ListNode(overflow, null);
        
        return head.next;
    }
}
