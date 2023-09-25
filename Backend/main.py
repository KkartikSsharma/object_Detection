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
		os.system('python3 detect.py --weights C:\Users\neha\Desktop\Niat\Project\object_Detection\Backend\yolov7\best.pt  --source C:\Users\neha\Desktop\Niat\Project\object_Detection\Backend\150.jpeg --project \ --name C:\Users\neha\Desktop\Niat\Project\object_Detection\Backend\result')
		imgFile.close()
		return "SUCCESS"