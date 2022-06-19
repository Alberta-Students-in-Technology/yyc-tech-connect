import json
import requests

class Events:
    def __init__(self,token):
        self.token = token

    #will return a json copy of all the events
    def get_events(self):
        id = requests.get(url=f"https://www.eventbriteapi.com/v3/users/me/organizations/",
                          headers={"Authorization": f'Bearer {self.token}'}).json()

        id = id["organizations"][0]["id"]

        events = requests.get(url=f"https://www.eventbriteapi.com/v3/organizations/{id}/events/",
                              headers={"Authorization": f'Bearer {self.token}'}).json()

        return self.filter(events['events'])


    #filters data
    def filter(self,ev):
        summary = [ev[names]['name']['text'] for names in range(len(ev))]
        descs = [ev[desc]['description']['text'] for desc in range(len(ev))]
        url = [ev[i]['url'] for i in range(len(ev))]
        start_time = [ev[start]['start']['local'] for start in range(len(ev))]
        end_time = [ev[end]['end']['local'] for end in range(len(ev))]
        timezone = [ev[end]['end']['timezone'] for end in range(len(ev))]


        #formatted data
        arr = {
            'summary': summary,
            'description': descs,
            'start_time': start_time,
            'end-time': end_time,
            'time_zone': timezone,
            'location': url
        }

        return arr







