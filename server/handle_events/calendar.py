
from google.oauth2 import service_account
from googleapiclient.discovery import build
from datetime import datetime, timedelta

# handles calendar events 

class HandleCalendar:
   def __init__(self, calendar_id="albertastudentsintech@gmail.com"):
       # creating api service

       SCOPES = ['https://www.googleapis.com/auth/calendar']
       SERVICE_ACCOUNT_FILE = 'key.json'  
       SUBJECT = "asit-gcal@asit-gcal.iam.gserviceaccount.com"

       credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
       delegated_credentials = credentials.with_subject(SUBJECT)
       self.service = build('calendar', 'v3', credentials=delegated_credentials)

       self.calendar_id = calendar_id

   def convert_to_RFC_datetime(self, year=1900, month=1, day=1, hour=0, minute=0):
       dt = datetime(year, month, day, hour, minute, 0).isoformat() + 'Z'
       return dt

   # adds events to calendar, edit teh default temp w event data

   def add_events(self, data):
       for i in range(len(data['summary'])):

           #get data
           summary = data['summary'][i]
           description = data['description'][i]
           start = data['start_time'][i]
           timezone = data['time_zone'][i]
           location = data['location'][i]
           end = data['end-time'][i]

           #filter the times
           start = start.split("-")
           end = end.split("-")

           temp = start[2].split("T")
           temp1 = temp[1].split(":")

          #the start date
           start_year = int(start[0])
           start_month = int(start[1])
           start_day = int(temp[0])
           start_hour = int(temp1[0])
           start_minute = int(temp1[1])

           tem = end[2].split("T")
           te = tem[1].split(":")

           #the end date
           end_year = int(end[0])
           end_month = int(end[1])
           end_day = int(tem[0])
           end_hour = int(te[0])
           end_minute = int(te[1])



           default_temp = {
               'summary': f'{summary}',
               'location': f'{location}',
               'description': f'{description}',
               'start': {
                   'dateTime': self.convert_to_RFC_datetime(start_year, start_month, start_day, start_hour, start_minute),
                   'timeZone': f'{timezone}',
               },
               'end': {
                   'dateTime': self.convert_to_RFC_datetime(end_year, end_month, end_day, end_hour, end_minute),
                   'timeZone': f'{timezone}',
               },
               'recurrence': [
                   'RRULE:FREQ=DAILY;COUNT=2'
               ],
               'attendees': [

               ],
               'reminders': {
                   'useDefault': False,
                   'overrides': [
                       {'method': 'email', 'minutes': 24 * 60},
                       {'method': 'popup', 'minutes': 10},
                   ],
               },
           }

           self.service.events().insert(calendarId=self.calendar_id, body=default_temp).execute()










