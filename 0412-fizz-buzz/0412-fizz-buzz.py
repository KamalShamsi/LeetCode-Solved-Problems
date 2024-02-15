class Solution:
    def fizzBuzz(self, n: int) -> list[str]:
        # Initialize an empty list to store the answers
        answers = []
        
        # Loop through numbers from 1 to n (inclusive)
        for i in range(1, n + 1):
            # Check divisibility by 3 and 5
            if i % 3 == 0 and i % 5 == 0:
                answers.append("FizzBuzz")
            # Check divisibility by 3 only
            elif i % 3 == 0:
                answers.append("Fizz")
            # Check divisibility by 5 only
            elif i % 5 == 0:
                answers.append("Buzz")
            # If not divisible by 3 or 5, append the number as a string
            else:
                answers.append(str(i))
                
        return answers
