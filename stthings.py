import streamlit as st
import pandas as pd
import numpy as np
# Title of the application
st.title("This is my first streamlit app")

st.write("This is a simple line of text to test the working of streamlit")

df = pd.DataFrame({
    'first column': [1, 2, 3, 4],
    'second column': [10, 20, 30, 40]
})

st.write("here it the Data Frame")
st.write(df)

##creata a line chart
chart_data = pd.DataFrame(
    np.random.randn(20,3)
    ,columns=['a','b','c']
)
st.line_chart(chart_data)