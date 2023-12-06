#!/usr/bin/python

import requests
import pandas as pd
import json
from pathlib import Path

url = "https://www.gamerpower.com/api/giveaways?platform=steam"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

data_steam = response.text
data_py = json.loads(data_steam)

json.dumps(data_py, indent=4)













