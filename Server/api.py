from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from flask import request

api = Flask(__name__)
CORS(api)

uri = "mongodb+srv://sainath19:eVZy68zqISUXNdLh@cluster0.mez8kyv.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi("1"))
try:
    client.admin.command("ping")
    print("Connected")
except Exception as e:
    print(e)
db = client["myntra"]


@api.route("/")
def hello_world():
    return "Hi"


@api.route("/men", methods=["GET"])
def men():
    data = []
    try:
        for i in db.productsdata.find({"category": "Men"}, {"_id": False}):
            data.append(i)
        return data
    except Exception as e:
        print(e)
        return {"response": "Error"}


@api.route("/women", methods=["GET"])
def women():
    data = []
    try:
        for i in db.productsdata.find({"category": "Women"}, {"_id": False}):
            data.append(i)
        return data
    except Exception as e:
        print(e)
        return {"response": "Error"}


@api.route("/kids", methods=["GET"])
def kids():
    data = []
    try:
        for i in db.productsdata.find({"category": "Kids"}, {"_id": False}):
            data.append(i)
        return data
    except Exception as e:
        print(e)
        return {"response": "Error"}
