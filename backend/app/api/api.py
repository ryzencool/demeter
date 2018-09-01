from flask import Blueprint

api = Blueprint('api', __name__)


@api.route("/hello")
def api_hello():
    return "<h1>api hello</h1>"