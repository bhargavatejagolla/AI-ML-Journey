import streamlit as st 
import pandas as pd 
from sklearn.datasets  import load_iris
from sklearn.ensemble import RandomForestClassifier

@st.cache
def load_data():
    iris = load_iris()
    df = pd.DataFrame(iris.data,columns=iris.feature_names)
    df['species'] = iris.target
    return df,iris.target_names

df,target_names = load_data()
st.title("Iris Classification App")
st.write("This app uses a Random Forest Classifier to predict the species of iris based on the input features.")
model = RandomForestClassifier()
model.fit(df.iloc[:,:-1], df['species'])
st.sidebar.header("Input Features")
def user_input_features():
    sepal_length = st.sidebar.slider('Sepal Length', float(df['sepal length (cm)'].min()), float(df['sepal length (cm)'].max()), float(df['sepal length (cm)'].mean()))
    sepal_width = st.sidebar.slider('Sepal Width', float(df['sepal width (cm)'].min()), float(df['sepal width (cm)'].max()), float(df['sepal width (cm)'].mean()))
    petal_length = st.sidebar.slider('Petal Length', float(df['petal length (cm)'].min()), float(df['petal length (cm)'].max()), float(df['petal length (cm)'].mean()))
    petal_width = st.sidebar.slider('Petal Width', float(df['petal width (cm)'].min()), float(df['petal width (cm)'].max()), float(df['petal width (cm)'].mean()))
    data = {'sepal length (cm)': sepal_length,
            'sepal width (cm)': sepal_width,
            'petal length (cm)': petal_length,
            'petal width (cm)': petal_width}
    features = pd.DataFrame(data, index=[0])
    return features
input_df = user_input_features()
st.subheader("User Input Features")
st.write(input_df)
prediction = model.predict(input_df)
st.subheader("Prediction")
st.write(target_names[prediction][0])
st.write("The predicted species is: **{}**".format(target_names[prediction][0]))