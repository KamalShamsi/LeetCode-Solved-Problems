const mergeTwoLists = (l1, l2) => {
  const dummy = { next: null };
  let cur = dummy;
	while (l1 && l2) {
		l1.val < l2.val ? (cur.next = l1, l1 = l1.next) : (cur.next = l2, l2 = l2.next);
		cur = cur.next;
	}
	cur.next = l1 || l2;
	return dummy.next;
};