from flask import Flask, render_template, request, jsonify
import config
import pandas as pd
from io import StringIO

app = Flask(__name__)
app.config['TESTING'] = True


@app.route('/')
def home():
    test_marker = [56.85036, 53247299]
    return render_template("index.html", test_marker=test_marker, map=True)


@app.route('/upload_markers', methods=['POST'])
def upload_markers():
    file = request.files.get('file')
    if file:
        print("Uploading markers")
        file_content = file.read()
        try:
            data = pd.read_csv(StringIO(file_content.decode('utf-8')))
            print(data)
        except Exception as e:
            print(e)
            return jsonify(error=str(e)), 400
        return jsonify(data.to_dict())
    else:
        return jsonify({"error": "No file selected"}), 400

if __name__ == '__main__':
    app.run(host="localhost", port=5500, debug=config.DEBUG)
