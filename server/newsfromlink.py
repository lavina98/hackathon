from newspaper import Article
import networkx as nx
import numpy as np
from nltk.tokenize.punkt import PunktSentenceTokenizer
from sklearn.feature_extraction.text import TfidfTransformer, CountVectorizer
import sys

link = sys.argv[1]
# link = 'https://www.google.com'
#link = 'https://economictimes.indiatimes.com/news/politics-and-nation/manohar-parrikars-sons-talk-about-continuing-his-legacy/articleshow/68646563.cms'

content = Article(link)

# print(content.text)


try:
    content = Article(link)
    content.download()
    content.parse()
except Exception as e:
    # If the download for some reason fails (ex. 404) the script will continue downloading
    # the next article.
    print(e)
    print("continuing...")

# print(content.text)


#f = open("Output.txt", "r")
#document  = f.read()

document = content.text


sentence_tokenizer = PunktSentenceTokenizer()
sentences = sentence_tokenizer.tokenize(document)

bow_matrix = CountVectorizer().fit_transform(sentences)
normalized = TfidfTransformer().fit_transform(bow_matrix)

similarity_graph = normalized * normalized.T

nx_graph = nx.from_scipy_sparse_matrix(similarity_graph)
scores = nx.pagerank(nx_graph)
text_rank_graph = sorted(((scores[i], s)
                          for i, s in enumerate(sentences)), reverse=True)
number_of_nodes = int(0.3*len(text_rank_graph))

if number_of_nodes < 3:
    number_of_nodes = 3

del text_rank_graph[number_of_nodes:]

summary = ' '.join(word for _, word in text_rank_graph)


# print("----------Summary-----------")
print(summary)
# return summary
