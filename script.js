//get temperature from user
//save it to a variable
const temperatureInFahr = prompt("What is the temperature in Farenheit?")
console.log("Temperature in Farenheit is " + temperatureInFahr)
//convert the temperature in celsius (save it to a variable)
const temperatureInCelcius = (temperatureInFahr - 32) * .5556
//print the results
console.log("Temperature in Celcius is " + temperatureInCelcius)
//print temperature in Kelvin
const temperatureInKelvin = (temperatureInFahr + 459.67) * 5 / 9
//print the results
console.log("Temperature in Kelvin is " + temperatureInKelvin)



