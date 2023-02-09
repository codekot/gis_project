from main import db


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_name = db.Column(db.String(200), nullable=False)
    status = db.Column(db.String(50), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    date_time = db.Column(db.DateTime)

    def __init__(self, task_name, status, latitude, longitude, date_time):
        self.tast_name = task_name
        self.status = status
        self.latitude = latitude
        self.longitude = longitude
        self.date_time = date_time
