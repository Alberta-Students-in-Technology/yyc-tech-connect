import eventbrite
import requests
from flask import Flask, url_for
from flask import render_template, redirect, request
from handle_calendar.calendar import HandleCalendar as GCal
from handle_calendar.events import Events
import json

app = Flask(__name__)

  
#main route
@app.route('/')
def main():  # put application's code here
    return render_template('index.html')



@app.route('/home', methods=['POST','GET'])
def get_token():
    #gets the token from url via js and redirects to main screen
    return render_template('index.html')


#main page w/ calendar and w/ acesc token being used as variable in route
@app.route('/main/<token>', methods=['GET','POST'])
def view_cal(token):
    #if method pot, get eventbrite events using token and adds events via GCal
    GCal().add_events(Events(token).get_events())


    return render_template('index.html')

#for viewing the calendar as is   
@app.route('/view')
def view():
    return render_template('index.html')


