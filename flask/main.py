#hwo to integrate html files with web frame work


from flask import render_template,Flask
app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template('index.html')


if __name__ =="__main__":
    app.run(debug = True)
