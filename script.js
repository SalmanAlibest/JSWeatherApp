let cityName = 0;
let description = 0;
let wind = 0;
let temperature = 0;
let humidity = 0;
let clouds = 0;
let city = 0;
let country = 0;
let iconcode = 0;
let iconurl = 0;
let element = 0;
let handleSuccess = function (response) {
  console.log("SUCCESS!");
  data = response;
  console.log(data)
  country = data["data"]["sys"]["country"];
  city = data["data"]["name"];
  description = data["data"]["weather"][0]["description"];
  description = `${description.charAt(0).toUpperCase()}${description.slice(1)}`
  wind = data['data']["wind"]["speed"];
  wind = Math.round(wind * 3.6);
  temperature = Math.round(temperature = data["data"]["main"]["temp"]);
  iconcode = data["data"]["weather"][0]["icon"];
  iconsign = `owf owf-${iconcode}`;
  iconurl = `icons/${iconcode}.png`
  // iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  humidity = data["data"]["main"]["humidity"];
  clouds = data["data"]["clouds"]["all"];
  document.querySelector(".location").innerHTML = `${city}, ${country}`;
  document.querySelector(".status").innerHTML = `${description}`;
  document.querySelector("#clouds").innerHTML = `${clouds} %`;
  document.querySelector("#wind").innerHTML = `${wind} km/h`;
  document.querySelector("#temperature").innerHTML = `${temperature}${'\u00B0'}C `;
  document.querySelector("#icon").src = iconurl;
  document.querySelector("#humidity").innerHTML = `${humidity} %`;

}
let handleError = function (error) {
  console.log("ERROR!!!!!!! :'-[ ");
  console.log(error);
}

let finishUp = function () {
  // always executed
  console.log("THE END!");
}

let handleClick = () => {
  cityName = document.querySelector("input").value;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7b368cf99ae63048f926ddadd7d53a4a`)
    .then(handleSuccess)
    .catch(handleError)
    .finally(finishUp)
}