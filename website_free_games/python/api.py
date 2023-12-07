#!/usr/bin/python

import requests
import pandas as pd
import json
from pathlib import Path

url_steam = "https://www.gamerpower.com/api/giveaways?platform=steam"
url_playstation = "https://www.gamerpower.com/api/giveaways?platform=ps4&platform=ps5"
url_xbox = "https://www.gamerpower.com/api/giveaways?platform=xbox-one&platform=xbox-series-xs"

payload = {}
headers = {}

response_steam = requests.request("GET", url_steam, headers=headers, data=payload)
response_playstation = requests.request("GET", url_playstation, headers=headers, data=payload)
response_xbox = requests.request("GET", url_xbox, headers=headers, data=payload)


d_steam = response_steam.text
d_playstation = response_playstation.text
d_xbox = response_xbox.text

dd_steam = json.loads(d_steam)
dd_playstation = json.loads(d_playstation)
dd_xbox = json.loads(d_xbox)


data_steam = 'data_steam'
base = Path('./python/data_json')
jsonpath = base/(data_steam + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_steam, indent=4))

data_playstation = 'data_playstation'
base = Path('./python/data_json')
jsonpath = base/(data_playstation + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_playstation,indent=4))

data_xbox = 'data_xbox'
base = Path('./python/data_json')
jsonpath = base/(data_xbox + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_xbox, indent=4))












