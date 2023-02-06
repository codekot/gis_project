from flask import Flask, render_template, request, jsonify
import config
import pandas as pd
from io import StringIO
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['TESTING'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gis.db'
db = SQLAlchemy(app)



@app.route('/')
def home():
    return render_template("index.html", map=True)


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
        return jsonify(data.to_dict(orient="records"))
    else:
        return jsonify({"error": "No file selected"}), 400

@app.route('/field_teams', methods=['GET','POST'])
def field_teams():
    if request.method == 'POST':
        latitude = request.form.get('lat')
        longitude = request.form.get('long')
        print(latitude, longitude)
        if not latitude:
            success = False
        else:
            success = True
        if success:
            return render_template("field_teams.html", success=success, message="Data uploaded. You can add another task")
        else:
            return render_template("field_teams.html", success=success, message="Error. Please enter correct values")
    return render_template("field_teams.html")

@app.route('/create_task', methods=['GET', 'POST'])
def create_task():
    if request.method == 'POST':
        latitude = request.form.get('lat')
        longitude = request.form.get('long')
        print(latitude, longitude)
        if not latitude:
            success = False
        else:
            success = True
        if success:
            return render_template("create_task.html", success=success, message="Data uploaded. You can add another task")
        else:
            return render_template("create_task.html", success=success, message="Error. Please enter correct values")

    return render_template('create_task.html')

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    data = [{"name": "Task 1", "status": "not started", "coordinates": "51.55 57.33", "datetime": "12/11/2033"}]
    return render_template('admin.html', map=True, data=data)

if __name__ == '__main__':
    app.run(host="localhost", port=5500, debug=config.DEBUG)
