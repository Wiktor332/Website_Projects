
import requests
import pandas as pd
import json
from pathlib import Path
import os

# Main navabr options 
url_pc = "https://www.gamerpower.com/api/giveaways?platform=pc"
url_playstation = "https://www.gamerpower.com/api/giveaways?platform=ps4"
url_xbox = "https://www.gamerpower.com/api/giveaways?platform=xbox-one.xbox-series-xs"

# Submain navbar options from drop down menu
url_steam = "https://www.gamerpower.com/api/giveaways?platform=steam"
url_epic = "https://www.gamerpower.com/api/giveaways?platform=epic-games-store"
url_gog = "https://www.gamerpower.com/api/giveaways?platform=gog"

url_ps4 = "https://www.gamerpower.com/api/giveaways?platform=ps4"
url_ps5 = "https://www.gamerpower.com/api/giveaways?platform=ps5"

url_xbox_one = "https://www.gamerpower.com/api/giveaways?platform=xbox-one"
url_xbox_xs = "https://www.gamerpower.com/api/giveaways?platform=xbox-series-xs"

payload = {}
headers = {}

# Main 
response_pc = requests.request("GET", url_pc, headers=headers, data=payload)
response_playstation = requests.request("GET", url_playstation, headers=headers, data=payload)
response_xbox = requests.request("GET", url_xbox, headers=headers, data=payload)
#######

# Submain
response_steam = requests.request("GET", url_steam, headers=headers, data=payload)
response_epic = requests.request("GET", url_epic, headers=headers, data=payload)
response_gog = requests.request("GET", url_gog, headers=headers, data=payload)

response_ps4 = requests.request("GET", url_ps4, headers=headers, data=payload)
response_ps5 = requests.request("GET", url_ps5, headers=headers, data=payload)

response_one = requests.request("GET", url_xbox_one, headers=headers, data=payload)
response_xs = requests.request("GET", url_xbox_xs, headers=headers, data=payload)
############

# Main
d_pc = response_pc.text
d_playstation = response_playstation.text
d_xbox = response_xbox.text
#######

# Submain
d_steam = response_steam.text
d_epic = response_epic.text
d_gog = response_gog.text

d_ps4 = response_ps4.text
d_ps5 = response_ps5.text

d_one = response_one.text
d_xs = response_xs.text
##########

# Main
dd_pc = json.loads(d_pc)
dd_playstation = json.loads(d_playstation)
dd_xbox = json.loads(d_xbox)

# Submain
dd_steam = json.loads(d_steam)
dd_epic = json.loads(d_epic)
dd_gog = json.loads(d_gog)
dd_ps4 = json.loads(d_ps4)
dd_ps5 = json.loads(d_ps5)
dd_one = json.loads(d_one)
dd_xs = json.loads(d_xs)

# Define the base directory
base_directory = Path(r'C:\Users\wikto\Desktop\VS_CODE\Website_Projects\website_free_games\python\data_json')

# Main
data_pc = 'data_pc'
jsonpath_pc = base_directory / (data_pc + ".json")
jsonpath_pc.write_text(json.dumps(dd_pc, indent=4))

data_playstation = 'data_playstation'
jsonpath_playstation = base_directory / (data_playstation + ".json")
jsonpath_playstation.write_text(json.dumps(dd_playstation, indent=4))

data_xbox = 'data_xbox'
jsonpath_xbox = base_directory / (data_xbox + ".json")
jsonpath_xbox.write_text(json.dumps(dd_xbox, indent=4))

# Submain
data_steam = 'data_steam'
jsonpath_steam = base_directory / (data_steam + ".json")
jsonpath_steam.write_text(json.dumps(dd_steam, indent=4))

data_gog = 'data_gog'
jsonpath_gog = base_directory / (data_gog + ".json")
jsonpath_gog.write_text(json.dumps(dd_gog, indent=4))

data_epic = 'data_epic'
jsonpath_epic = base_directory / (data_epic + ".json")
jsonpath_epic.write_text(json.dumps(dd_epic, indent=4))

data_ps4 = 'data_ps4'
jsonpath_ps4 = base_directory / (data_ps4 + ".json")
jsonpath_ps4.write_text(json.dumps(dd_ps4, indent=4))

data_ps5 = 'data_ps5'
jsonpath_ps5 = base_directory / (data_ps5 + ".json")
jsonpath_ps5.write_text(json.dumps(dd_ps5, indent=4))

data_one = 'data_one'
jsonpath_one = base_directory / (data_one + ".json")
jsonpath_one.write_text(json.dumps(dd_one, indent=4))

data_xs = 'data_xs'
jsonpath_xs = base_directory / (data_xs + ".json")
jsonpath_xs.write_text(json.dumps(dd_xs, indent=4))














