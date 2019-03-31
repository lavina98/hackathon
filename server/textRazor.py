import sys
import textrazor

textrazor.api_key = "3fb781161c753ef9b703cb42810572c358bfcc8cb4a5f4027a69ac28"
client = textrazor.TextRazor(extractors=["entities", "topics"])
client.set_cleanup_mode("cleanHTML")
client.set_classifiers(["textrazor_newscodes"])
response = client.analyze_url(sys.argv[1])
array = {}
for topic in response.topics():
    if topic.score > 0.5:
        array[topic.score] = topic.label
print(array)
