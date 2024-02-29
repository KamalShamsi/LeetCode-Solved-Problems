class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        num = 0
        sign = '+'  # Assume the first sign is '+'
        
        for i in range(len(s)):
            if s[i].isdigit():
                num = num * 10 + int(s[i])  # Build the current number
            if s[i] in "+-*/" or i == len(s) - 1:  # If it's the last character, we need to process the last number
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                elif sign == '*':
                    stack.append(stack.pop() * num)
                elif sign == '/':
                    top = stack.pop()
                    if top < 0:
                        stack.append(-(-top // num))
                    else:
                        stack.append(top // num)
                num = 0  # Reset the number
                sign = s[i]  # Update the last seen sign
                
        return sum(stack)  # Sum the stack for the result
