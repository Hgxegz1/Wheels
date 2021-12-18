from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

def create_app():
    app = Flask(__name__)
    CORS(app)

    @app.route('/api')
    def api():
        return jsonify({'data' : 'Hello World!'})

    @app.route('/api2')
    def api2():
        return jsonify({'data' : 'Hello World2!'})
    return app