from flask import Flask, render_template
import config

app = Flask(__name__)
app.config['TESTING'] = True


@app.route('/')
def home():
    test_var = 'hello'
    return render_template("index.html", test_var=test_var, map=True)


if __name__ == '__main__':
    app.run(host="localhost", port=5500, debug=config.DEBUG)
