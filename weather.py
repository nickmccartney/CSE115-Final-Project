import urllib.request
import json

def process_weather_data(dataSetAPI):
  dataSet = urllib.request.urlopen(dataSetAPI)
  jsonContent = dataSet.read().decode()
  content = json.loads(jsonContent)
  return content
