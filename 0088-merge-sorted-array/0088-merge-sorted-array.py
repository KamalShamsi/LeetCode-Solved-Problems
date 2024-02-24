class Solution:
    def merge(self, nums1, m, nums2, n):
        # Pointers for nums1 and nums2 respectively
        p1 = m - 1
        p2 = n - 1
        
        # Pointer for the end of the merged array
        p = m + n - 1
        
        # While there are elements to be compared in either array
        while p1 >= 0 and p2 >= 0:
            if nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            else:
                nums1[p] = nums2[p2]
                p2 -= 1
            p -= 1
        
        # Fill nums1 with leftover elements from nums2, if any
        # This step is necessary for cases where nums2 has the smallest elements
        while p2 >= 0:
            nums1[p] = nums2[p2]
            p2 -= 1
            p -= 1
