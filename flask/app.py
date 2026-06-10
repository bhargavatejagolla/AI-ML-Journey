from flask import Flask

"""
It creates an instance of the Flask class
which will be your WSGI application
"""

# WSGI Application
app = Flask(__name__)


@app.route("/")
def welcome():
    return "<html><h1> Welcome to the Flask course</h1><html>"

@app.route("/index")
def Welcome2():
    return "welcome to the index page"
# Entry point of the Python file
if __name__ == "__main__":
    app.run(debug = True)
    
