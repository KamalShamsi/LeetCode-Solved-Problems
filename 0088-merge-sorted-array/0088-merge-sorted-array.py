class Solution:
    def merge(self, nums1, m, nums2, n):
        #Replace the last elements of nums1 with nums2
        for i in range(n):
            nums1[m + i] = nums2[i]
        nums1.sort()
        