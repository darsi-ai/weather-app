let weather = {
    paris: {
        name: "Paris",
        temp: 19.7,
        humidity: 80
    },
    tokyo: {
        name: "Tokyo",
        temp: 17.3,
        humidity: 50
    },
    lisbon: {
        name: "Lisbon",
        temp: 30.2,
        humidity: 20
    },
    sanfrancisco: {
        name: "San Francisco",
        temp: 20.9,
        humidity: 100
    },
    oslo: {
        name: "Oslo",
        temp: -5,
        humidity: 20
    }
  };

let city = prompt('Enter the city');
city = city.trim().toLowerCase();
if (weather.hasOwnProperty(city)){
    let temperature = weather[city].temp;
    let cityHumidity = weather[city].humidity;
    let cityName = weather[city].name;
    let farengheitTemp = ((temperature * 9) / 5 + 32);
    alert(`It is currently ${temperature}°C (${farengheitTemp}°F) in ${cityName} with a humidity of ${cityHumidity}%`)
}else{
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`)
};
