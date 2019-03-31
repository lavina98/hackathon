from nltk.corpus import stopwords
import string
from nltk.tokenize import word_tokenize
import sys

text = [x for x in sys.argv]
# text = ['how', 'many', 'runs', 'did ', 'kohli ', 'score']
text = ' '.join(text[1:])
# print(text)
tokens = word_tokenize(text)
# convert to lower case
tokens = [w.lower() for w in tokens]
# remove punctuation from each word
table = str.maketrans('', '', string.punctuation)
stripped = [w.translate(table) for w in tokens]
# remove remaining tokens that are not alphabetic
words = [word for word in stripped if word.isalpha()]
# filter out stop words
stop_words = set(stopwords.words('english'))
words = [w for w in words if not w in stop_words]
print(words)
print('%20'.join(words))
