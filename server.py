import bottle 
import weather

@bottle.route("/")
def homeRoute():
	return bottle.static_file("index.html", root=".")

@bottle.route("/weather")
def get_weather_data():
  response = weather.process_weather_data("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22")
  return response

bottle.run(host="0.0.0.0", port=8080, debug=True)