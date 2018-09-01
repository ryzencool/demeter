
from flask import Flask
from api.api import api
from flask_script import Manager

app = Flask(__name__)

app.register_blueprint(api)

manager = Manager(app)

if __name__== "__main__":
    manager.run()