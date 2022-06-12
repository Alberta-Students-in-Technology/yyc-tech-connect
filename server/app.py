import eventbrite
import requests
from flask import Flask, url_for
from flask import render_template, redirect, request
from handle_events.calendar import HandleCalendar as GCal
from handle_events.events import Events
import json

app = Flask(__name__)

#---------------ouath2 deatils (eventbrite)------------------------------------------#
key = "SIPL2IVAEKK6BOEFS3"
cl_sec = "S7WZZRPSIBMWSMSGERQ65OSBLUKBOXA5ZM7UYSEQTA2PZ7NJLM"
end_point = "http://127.0.0.1:5000/home"
  


#main route
@app.route('/')
def main():  # put application's code here
    return render_template('index.html')


#intial step in verifying auth and getting personal acess token
@app.route('/home', methods=['POST','GET'])
def oauth2():
    #gets the token from url via js and rediects to main screen
    return render_template('index.html')


#main page w/ calendar and w/ acesc token being used as variable in route
@app.route('/main/<token>', methods=['GET','POST'])
def view_cal(token):
    #if method pot, get eventbrite vents using token and add events via GCal
    #add events to GCal
    GCal().add_events(Events(token).get_events())


    return render_template('index.html')


    
    
    
@app.route('/view')
def view():
    return render_template('index.html')

#runs the program
if __name__ == '__main__':
    app.debug=False
    app.run()
