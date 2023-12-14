
import requests
import pandas as pd
import json
from pathlib import Path

# Main navabr options 
url_pc = "https://www.gamerpower.com/api/giveaways?platform=pc"
url_playstation = "https://www.gamerpower.com/api/giveaways?platform=ps4.ps5"
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
#######

# Submain
dd_steam = json.loads(d_steam)
dd_epic = json.loads(d_epic)
dd_gog = json.loads(d_gog)

dd_ps4 =json.loads(d_ps4)
dd_ps5 =json.loads(d_ps5)

dd_one = json.loads(d_one)
dd_xs = json.loads(d_xs)

# Main
data_pc = 'data_pc'
base = Path('../python/data_json')
jsonpath = base/(data_pc + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_pc, indent=4))

data_playstation = 'data_playstation'
base = Path('../python/data_json')
jsonpath = base/(data_playstation + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_playstation,indent=4))

data_xbox = 'data_xbox'
base = Path('../python/data_json')
jsonpath = base/(data_xbox + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_xbox, indent=4))
###########

# Submain
data_steam = 'data_steam'
base = Path('../python/data_json')
jsonpath = base/(data_steam + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_steam, indent=4))

data_gog = 'data_gog'
base = Path('../python/data_json')
jsonpath = base/(data_gog + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_gog, indent=4))

data_epic = 'data_epic'
base = Path('../python/data_json')
jsonpath = base/(data_epic + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_epic, indent=4))

data_ps4 = 'data_ps4'
base = Path('../python/data_json')
jsonpath = base/(data_ps4 + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_ps4, indent=4))

data_ps5 = 'data_ps5'
base = Path('../python/data_json')
jsonpath = base/(data_ps5 + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_ps5, indent=4))

data_one = 'data_one'
base = Path('../python/data_json')
jsonpath = base/(data_one + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_one, indent=4))

data_xs = 'data_xs'
base = Path('../python/data_json')
jsonpath = base/(data_xs + ".json")

base.mkdir(exist_ok=True)
jsonpath.write_text(json.dumps(dd_xs, indent=4))

















