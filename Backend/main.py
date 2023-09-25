# Using flask to make an api
# import necessary libraries and functions
import os
import time
from flask import Flask, jsonify, request
import re, base64
from flask_cors import CORS

# creating a Flask app
app = Flask(__name__)
CORS(app)
# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/upload', methods = ['GET', 'POST'])
def home():
		# Get the base64 data from the JSON request
		base64_data = request.json['data']
		# Decode the base64 data
		# Image Base64 String
		decodedData = base64.b64decode(base64_data)

		# Write Image from Base64 File
		imgFile = open('_image.jpeg', 'wb')
		imgFile.write(decodedData)
		imgFile.close()
		return "SUCCESS"


# A simple function to calculate the square of a number
# the number to be squared is sent in the URL when we use GET
# on the terminal type: curl http://127.0.0.1:5000 / home / 10
# this returns 100 (square of 10)
@app.route('/home/<int:num>', methods = ['GET'])
def disp(num):

	return jsonify({'data': num**2})


# driver function
if __name__ == '__main__':

	app.run(debug = True)
# import dis
# import marshal

# with open('app.cpython-311.pyc', 'rb') as f:
#     f.seek(16)
#     dis.dis(marshal.load(f))