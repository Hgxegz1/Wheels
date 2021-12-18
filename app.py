from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from functions import *

def create_app():
    app = Flask(__name__)
    CORS(app)

    #after the user inputs the category use this function
    @app.route('/getCats')
    def catergories():
        location = request.args.get('l')
        term = request.args.get('t')
        return returnCats(location, term)

    @app.route('/api')
    def api():
        return jsonify({'data' : 'Hello World!'})

    @app.route('/api2')
    def api2():
        return jsonify({'data' : 'Hello World2!'})
    return app