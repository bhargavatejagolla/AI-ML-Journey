## jinja2 template  engine
## building url dynamically 
## variable rule
"""
Jinja 2  they have multiple ways to specifically to read data source from backend
1. {{}} expressions to print output in html
2. {%...%} conditional,for loops
3. {#...#} this is for comments
"""
from flask import Flask ,request,render_template

app= Flask(__name__)

@app.route("/")
def welcome():
    return "<h1>Welcome to the learning process of Flask</h1>"

@app.route("/submit",methods = ["GET","POST"])
def submit():
    if request.method=="POST":
        name = request.form["name"]
        return f"Hello {name}"
    return render_template("form.html")

@app.route("/success/<int:score>")
#variable rule
def success(score):
    res =""
    if score >=50:
        res = "Passed"
    else:
        res="Failed"
    return render_template("result.html",results = res)


@app.route("/successres/<int:score>")
# variable rule
def successres(score):
    res = ""
    if score >= 50:
        res = "Passed"
    else:
        res = "Failed"
    exp = {'score':score,"res":res}    
    return render_template("result.html", results=exp)


@app.route("/successif/<int:score>")
# variable rule
def successif(score):
    return render_template("result.html", results=score)




if __name__=="__main__":
    app.run(debug=True)
    