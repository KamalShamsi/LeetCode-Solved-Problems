var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    let newListHead = newList;
    while(list1 && list2){
        if(list1.val > list2.val){
            newList.next = list2;
            list2 = list2.next;
        } else {
            newList.next = list1;
            list1 = list1.next;
        }
        newList = newList.next;
    }
    if(!list1 && list2) newList.next = list2;
    if(list1 && !list2) newList.next = list1;
    
    return newListHead.next;
};