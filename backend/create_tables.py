import sqlite3
conn = sqlite3.connect('database.db')

c = conn.cursor()

# Table to store senior info.
c.execute('''CREATE TABLE senior_info
             (first_name,last_name,email,password,phone_number,address,languages)''')

# Table to store volunteer_info.
c.execute('''CREATE TABLE voulnteer_info
             (first_name,last_name,email,password,phone_number,address,languages,description)''')

# Table to make sure login was successful irrespective of the user type.
c.execute('''CREATE TABLE active_sessions
             (token,email)''')

# All users info table.
c.execute('''CREATE TABLE all_users
             (first_name,last_name,email,password,phone_number,address,languages,description,skills,user_type)''')

# Skills data table.
c.execute('''CREATE TABLE skills
             (email,user_type,cooking,cleaning,conversations,groceries)''')

# Volunteer that matches with the senior.
c.execute('''CREATE TABLE best_matches
             (senior_email,volunteers_email)''')

# Offers made by senior.
c.execute('''CREATE TABLE offers_made
             (senior_email,volunteers_email)''')

# Offers received by volunteers.
c.execute('''CREATE TABLE offers_received
             (volunteers_email,senior_email)''')

conn.commit()
conn.close()
