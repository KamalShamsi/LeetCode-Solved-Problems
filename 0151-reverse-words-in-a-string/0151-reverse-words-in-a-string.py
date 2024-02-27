class Solution:
    def reverseWords(self, s: str) -> str:
        #Split the string into words by spaces, filter out any empty strings resulting from spaces
        words = s.split()
        #Reverse the list of words
        words.reverse()
        return ' '.join(words)