from flask import Flask, render_template
import config

app=Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html", map=True)

if __name__ == '__main__':
    app.run(host="localhost", port=8080, debug=config.DEBUG)