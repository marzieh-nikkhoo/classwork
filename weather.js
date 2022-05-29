function getWeatherData(){
    const cityName=document.getElementById("city").value;
    const apiKey = '66e8bf1c8a6b42892118a14c2ebf09c3'
    const weatherUrl ='https://api.openweathermap.org/data/2.5/weather?units=metric&q='+cityName+'&appid=66e8bf1c8a6b42892118a14c2ebf09c3'
    fetch(weatherUrl)
    .then(res=>res.json())
    .then (data=>{
        document.getElementById("demo").innerHTML=data.name;
        document.getElementById("demo1").innerHTML="temperature:"+data.main.temp;
        document.getElementById("demo2").innerHTML="feels like:"+data.main.feels_like;
        document.getElementById("demo3").innerHTML="wind's speed:"+data.wind.speed;
        document.getElementById("demo4").innerHTML="humidity:"+data.main.humidity;
        document.getElementById("demo5").innerHTML="country:"+data.sys.country;
    }
    
    )
}