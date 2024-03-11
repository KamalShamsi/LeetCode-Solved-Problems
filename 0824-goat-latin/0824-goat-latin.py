class Solution:
    def toGoatLatin(self, sentence: str) -> str:
        words = sentence.split()
        vowels = 'aeiouAEIOU'
        goat_latin_words = []

        # Iterate over each word and transform it according to Goat Latin rules
        for index, word in enumerate(words, start=1):
            if word[0] in vowels:
                # Rule for words starting with a vowel
                new_word = word + 'ma'
            else:
                # Rule for words starting with a consonant
                new_word = word[1:] + word[0] + 'ma'
            # Append 'a's based on the word's index
            new_word += 'a' * index
            goat_latin_words.append(new_word)

        # Join and return the transformed words as the final sentence
        return ' '.join(goat_latin_words)