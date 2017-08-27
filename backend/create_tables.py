import sqlite3
conn = sqlite3.connect('database.db')

c = conn.cursor()

# Table to store senior info.
c.execute('''CREATE TABLE senior_info
             (first_name,last_name,email,password,phone_number,address,languages)''')

# Table to store volunteer_info.
c.execute('''CREATE TABLE voulnteer_info
             (first_name,last_name,email,password,phone_number,address,languages,description,skills)''')

# Table to make sure login was successful irrespective of the user type.
c.execute('''CREATE TABLE active_sessions
             (token,email)''')

# All users info table.
c.execute('''CREATE TABLE all_users
             (first_name,last_name,email,password,phone_number,address,languages,description,skills,user_type)''')

conn.commit()
conn.close()
