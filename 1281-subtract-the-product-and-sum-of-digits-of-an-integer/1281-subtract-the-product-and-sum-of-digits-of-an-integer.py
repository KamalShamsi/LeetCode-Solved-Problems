class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        digits = list(str(n))
        sumOfDigits = 0
        productOfDigits = 1 
        for i in range(len(digits)):
            digit = int(digits[i])  
            sumOfDigits += digit
            productOfDigits *= digit  
        return productOfDigits - sumOfDigits