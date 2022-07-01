import eventbrite
import requests
from flask import Flask, url_for
from flask import render_template, redirect, request
from handle_events.calendar import HandleCalendar as GCal
from handle_events.events import Events
import json

app = Flask(__name__)

  
#main route
@app.route('/')
def main():  # put application's code here
    return render_template('index.html')



@app.route('/home', methods=['POST','GET'])
def get_token():
    #gets the token from url via js and redirects to main screen
    return '''<script type="text/javascript">
    	var token = window.location.href.split("access_token=")[1]; 
        window.location = "/main/" + token;
        </script>'''


#main page w/ calendar and w/ access token being used as variable in route
@app.route('/main/<token>', methods=['GET','POST'])
def view_cal(token):
    #if method pot, get eventbrite events using token and adds events via GCal
    GCal().add_events(Events(token).get_events())
    return render_template('index.html')

#for viewing the calendar as is   
@app.route('/view')
def view():
    return render_template('index.html')

#runs the program
if __name__ == '__main__':
    app.debug=False
    app.run()
