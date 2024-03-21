class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        # Base case: if either number is "0", the product is "0".
        if num1 == "0" or num2 == "0":
            return "0"
        
        # Initialize the result as a list of zeros. The maximum possible length of the result
        # is the sum of lengths of num1 and num2.
        result = [0] * (len(num1) + len(num2))
        
        # Reverse both strings to simplify the multiplication and addition process.
        num1, num2 = num1[::-1], num2[::-1]
        
        # Loop through each digit in num1
        for i in range(len(num1)):
            # Convert num1's digit from char to int
            n1 = int(num1[i])
            
            # Loop through each digit in num2
            for j in range(len(num2)):
                # Convert num2's digit from char to int
                n2 = int(num2[j])
                
                # Multiply the digits and add to the current position in the result.
                # Also include the carry from the previous calculation.
                product = n1 * n2 + result[i + j]
                
                # Calculate the carry for the next position
                carry = product // 10
                
                # Update the current position with the remainder of the current product
                result[i + j] = product % 10
                
                # Add the carry to the next position
                result[i + j + 1] += carry
        
        # The result list is in reverse order, and it might have leading zeros. Remove them and convert to string.
        while len(result) > 1 and result[-1] == 0:
            result.pop()
        
        # Convert the result list back to a string
        return ''.join(map(str, result[::-1]))
