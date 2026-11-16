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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let map = new Map<number, ListNode>();

    for (const node of lists){
        let current = node;
        let next = null;
        while (current != null && current != undefined){
            next = current.next;

            if (!map.has(current.val)){
                current.next = null;
                map.set(current.val, current);
            }         
            else{
                current.next = map.get(current.val);
                map.set(current.val, current)
            }
            
            //current.next = null;
            current = next;
        }
    }

    let sortedKeys = [...map.keys()].sort((a,b)=>a-b);
    let head: ListNode = null;
    let element: ListNode = null;
    for (const key of sortedKeys){
        if (head == null){
            head = map.get(key);
            element = head;
        }
        else{
            while (element.next != null)
                element = element.next;
            element.next = map.get(key);
        }
    }

    return head;
};
