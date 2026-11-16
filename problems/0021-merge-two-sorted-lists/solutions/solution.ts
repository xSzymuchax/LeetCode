/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null && list2 == null)
        return null;
    else if (list1 == null)
        return list2;
    else if (list2 == null)
        return list1;
    
    let head: ListNode = null;
    let current: ListNode = null;
    while (list1 != null && list2 != null){
        if (head == null){
            if (list1.val <= list2.val){
                head = list1;
                list1 = list1.next;
            }    
            else{
                head = list2;
                list2 = list2.next;
            }
            current = head;
            continue;
        }

        if (list1.val <= list2.val){
            current.next = list1;
            list1 = list1.next;
        }
        else{
            current.next = list2;
            list2 = list2.next;
        }
        
        current = current.next;
    }

    if (list1 == null)
        current.next = list2;
    else if (list2 == null)
        current.next = list1;

    return head;
};
