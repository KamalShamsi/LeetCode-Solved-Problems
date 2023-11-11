var reorderList = function(head) {
    var lists = [], cur = head, prev;
    while(cur) {
        prev = cur;
        cur = cur.next;
        prev.next = null;
        lists.push(prev);
    };

    var left = 0, right = lists.length - 1, dummy = new ListNode();

    while(left < right) {
        lists[left].next = lists[right];
        dummy.next = lists[left];
        dummy = dummy.next.next; 
        left++;
        right--;
    }

    if(left == right) dummy.next = lists[left];
};