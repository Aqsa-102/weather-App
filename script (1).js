const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  const form = document.querySelector("form")
  const weather = document.querySelector("#weather")
  const search = document.querySelector("#search")


const getweather = async(city) => {
  weather.innerHTML = `<h2>loading...</h2>`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
     const response =  await fetch(url);
     const data = await response.json();
      return showweather(data)
}
const showweather = (data) => {
  console.log(data)
  if(data.cod == "404")
  {
    weather.innerHTML = `<h2>city not found</h2>`
    return;
  }
  weather.innerHTML = `
    <div>
  <img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt = "">
    </div>
      <div>
         <h2>${data.main.temp} &deg;C</h2>
         <h4>${data.weather[0].main}</h4>
      </div>
      `
}

form.addEventListener(
  "submit",
  function(event) {
    getweather(search.value)
    event.preventDefault(); //in order to prevent from form reload
  }
)
