import pandas as pd
from imblearn.over_sampling import SMOTE
from sklearn.datasets import make_classification
x, y = make_classification(n_samples=1000, n_redundant=0, n_features=2,
                           n_clusters_per_class=1, weights=[0.90], random_state=123)
df1 = pd.DataFrame(x, columns=['f1', 'f2'])
df2 = pd.DataFrame(y, columns=['target'])
df = pd.concat([df1, df2], axis=1)

oversample = SMOTE()
X,Y= oversample.fit_resample(df[['f1','f2']],df['target'])
print(x.shape)