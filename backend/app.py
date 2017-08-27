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
def v_signup(first_name,last_name,email,password,phone_number,address,languages,description,cooking,cleaning,conversations,groceries):
    global c
    c.execute('select 0 from all_users where email = ''?''',email)
    email_exists = c.fetchall()
    if email_exists == 0:
            status_dictionary = {"Status" : 400,
             "user" : {"email" : email_id,
                       "user_type" : 'V'},
             "token" : "discuss API"}
    else:
        c.execute('insert into voulnteer_info (first_name,last_name,email,password,phone_number,address,languages,description) values(''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?''',
        first_name,last_name,email,password,phone_number,address,languages,description)
        c.execute('insert into skills (email,cooking,cleaning,conversations,groceries) values (''?'',''?'',''?'',''?'',''?''',cooking,cleaning,conversations,groceries)
        c.execute('insert into all_users (first_name,last_name,email,password,phone_number,address,languages,description,skills,user_type) values(''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?''',
        first_name,last_name,email,password,phone_number,address,languages,description,'V')
        status_dictionary = {"Status" : 200,
                                 "user" : {"email" : email_id,
                                           "user_type" : 'V'},
                                 "token" : "discuss API"}
    json_data = json.dumps(status_dictionary, ensure_ascii=False)
    return json_data

@app.route('/s/signup', methods = ['POST'])
def v_signup(first_name,last_name,email,password,phone_number,address,languages,cooking,cleaning,conversations,groceries):
    global c
    c.execute('select 0 from all_users where email = ''?''',email)
    email_exists = c.fetchall()
    if email_exists == 0:
            status_dictionary = {"Status" : 400,
             "user" : {"email" : email_id,
                       "user_type" : 'S'},
             "token" : "discuss API"}
    else:
        c.execute('insert into senior_info (first_name,last_name,email,password,phone_number,address,languages) values(''?'',''?'',''?'',''?'',''?'',''?'',''?''',
        first_name,last_name,email,password,phone_number,address,languages)
        c.execute('insert into skills (email,cooking,cleaning,conversations,groceries) values (''?'',''?'',''?'',''?'',''?''',cooking,cleaning,conversations,groceries)
        c.execute('insert into all_users (first_name,last_name,email,password,phone_number,address,languages,user_type) values(''?'',''?'',''?'',''?'',''?'',''?'',''?'',''?''',
        first_name,last_name,email,password,phone_number,address,languages,'S')
        status_dictionary = {"Status" : 200,
                                 "user" : {"email" : email_id,
                                           "user_type" : 'S'},
                                 "token" : "discuss API"}
    json_data = json.dumps(status_dictionary, ensure_ascii=False)
    return json_data

@app.route('/s/volunteers', methods = ['GET'])
def seniors_volunteers(email,token):
    global c
    skill_set = null
    c.execute('select cooking from skills where email = ''?''',email)
    cooking = c.fetchall()
    if cooking is not null:
        skill_set = '(''Cooking'''

    c.execute('select cleaning from skills where email = ''?''',email)
    cleaning = c.fetchall()
    if cleaning is not null and skill_set is not null:
        skill_set = skill_set + ',''Cleaning'''
    elif cleaning is not null and skill_set is null:
        skill_set = '(''Cleaning'''

    c.execute('select conversations from skills where email = ''?''',email)
    conversations = c.fetchall()
    if conversations is not null and skill_set is not null:
        skill_set = skill_set + ',''Conversations'''
    elif cleaning is not null and skill_set is null:
        skill_set = '(''Conversations'''

    c.execute('select groceries from skills where email = ''?''',email)
    groceries = c.fetchall()
    if groceries is not null and skill_set is not null:
        skill_set = skill_set + ',''Groceries'''
    elif groceries is not null and skill_set is null:
        skill_set = '(''Groceries'''

    if skill_set is not null:
        skill_set = skill_set + ')'

    for row in c.execute('select email_id from skills where (cooking in ? or conversations in ? or groceries in ? or cleaning in ?) and user_type = ''V''',skill_set,skill_set,skill_set,skill_set):
        c.execute('insert into best_matches(senior_email,volunteers_email) values(''?'',''?'')',email,row[0])
    name = c.fetchall()
    if name is not null:
            status_dictionary = {"Status" : 200,
                                 "volunteers" : [{"email" : email,
                                                  "name" : name,
                                                  "services_provided" : 0}
                                 ]}
    return json_data

if __name__ == '__main__':
	# app.run(port=8080)
	server = Server(app)
	server.serve(port=8080)
