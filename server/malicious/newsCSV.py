from sklearn.linear_model import LogisticRegression
import pandas as pd
import numpy as np

df = pd.read_csv('/home/mihir/Desktop/hackathon/server/malicious/news.csv')
df.pop('url_id')
df.pop('user_id')
df.pop('category')
df.pop('is_upVote')
df.pop('is_downVote')
target = df.pop('isReal')
lg = LogisticRegression()
lg.fit(df, target)
a = np.asarray([2, 0, 1, ])
y_pred = lg.predict_proba(np.asarray([17, 0, 0, 3]).reshape(1, -1))

pred = y_pred[0][1]
