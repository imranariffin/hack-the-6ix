from livereload import Server
from flask import Flask
import sqlite3
conn = sqlite3.connect('database.db')
app = Flask(__name__)
app.debug = True

@app.route('/')
def hello_world():
  return 'Hello, World!'

@app.route('/users')
def get_users():
	return 'users'

if __name__ == '__main__':
	# app.run(port=8080)
	server = Server(app)
	server.serve(port=8080)