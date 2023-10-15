var reorderList = function (head) {
	let slow = head
	let fast = head

	//find the middle of the list
	while (fast.next !== null && fast.next.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}

	//separate the lists into two
	let prev = null
	let curr = slow.next
	slow.next = null
	//reverse the second list
	while (curr != null) {
		const next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}

	//merge the two lists together
	let list1 = head
	let list2 = prev

	while (list2 !== null) {
		//set the list 1 next pointer to list2 and go to the next node in list1
		const next1 = list1.next
		list1.next = list2
		list1 = next1

		//set the list 2 next pointer to list1 and go to the next node in list2
		const next2 = list2.next
		list2.next = list1
		list2 = next2
	}
};