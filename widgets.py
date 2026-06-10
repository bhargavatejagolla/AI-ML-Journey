import streamlit as st 
st.title("Streamlit Text Input")
import pandas as pd

name = st.text_input("Enter your name")
age = st.slider("select your age",0,100,25)
st.write(f"Your age is {age}")
options = ["Python","Java","C++","JavaScript"]
choice = st.selectbox("choose your favourite programming language",options)
st.write(f"Your favourite programming language is {choice}")


if name:
    
    st.write(f"Hello , {name}!!!")


uploaded_file = st.file_uploader("choose a csv file",type = "csv")
if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)
    st.write(df)
    