/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null) return null;
    
    let length = 1;
    let currentNode = head;
    
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        length++;
    }
    
    let toRemove = length - n;
    currentNode=head;
    while (toRemove > 1) {
        currentNode = currentNode.next;
        toRemove--;
    }
    
    if (toRemove==0) {
        head = head.next;
        return head;
    }
    
    
    
    if (currentNode.next !== null)
        currentNode.next = currentNode.next.next;
        
    return head;
};
