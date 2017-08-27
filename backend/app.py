from livereload import Server
from flask import Flask
import sqlite3
import json
conn = sqlite3.connect('database.db')
c = conn.cursor()
app = Flask(__name__)
app.debug = True

@app.route('/')
def hello_world():
  return 'Hello, World!'

@app.route('/users')
def get_users():
	return 'users'

@app.route('/login', methods = ['POST'])
def validate_login(email_id,password):
    global c
    c.execute('select user_type from all_users where email = ''?''',email_id)
    user_type = c.fetchall()
    c.execute('select 0 from senior_info where email = ''?''',email_id)
    does_email_exist = c.fetchall()
    if does_email_exist == 0:
        c.execute('select 0 from senior_info where password = ''?''',password)
        c.execute('select 0 from senior_info where password = ''?''',password)
        does_password_exist = c.fetchall()
        if does_password_exist == 0:
            status_dictionary = {"Status" : 200,
                                 "user" : {"email" : email_id,
                                           "user_type" : user_type},
                                 "token" : "discuss API"}
        else:
            status_dictionary = {"Status" : 400,
                     "user" : {"email" : email_id,
                               "user_type" : user_type},
                     "token" : "discuss API"}
    else:
            status_dictionary = {"Status" : 400,
             "user" : {"email" : email_id,
                       "user_type" : user_type},
             "token" : "discuss API"}
    json_data = json.dumps(status_dictionary, ensure_ascii=False)
    return json_data

@app.route('/v/signup', methods = ['POST'])
def v_signup(first_name,last_name,email,password,phone_number,address,languages,description,skills):
    global c
    c.execute('select 0 from all_users where email = ''?''',email)
    email_exists = c.fetchall()
    if email_exists == 0:
            status_dictionary = {"Status" : 400,
             "user" : {"email" : email_id,
                       "user_type" : user_type},
             "token" : "discuss API"}
    else:
        c.execute('insert into voulnteer_info (first_name,last_name,email,password,phone_number,address,languages,description,skills) values(''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?''',
        first_name,last_name,email,password,phone_number,address,languages,description,skills)
        c.execute('insert into all_users (first_name,last_name,email,password,phone_number,address,languages,description,skills,user_type) values(''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?''',
        first_name,last_name,email,password,phone_number,address,languages,description,skills,'V')
        status_dictionary = {"Status" : 200,
                                 "user" : {"email" : email_id,
                                           "user_type" : user_type},
                                 "token" : "discuss API"}
    json_data = json.dumps(status_dictionary, ensure_ascii=False)
    return json_data

if __name__ == '__main__':
	# app.run(port=8080)
	server = Server(app)
	server.serve(port=8080)
