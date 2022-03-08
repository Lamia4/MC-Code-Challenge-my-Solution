const hamburger = document.getElementsByClassName("hamburger");
const navMenu = document.getElementsByClassName("nav-menu");



hamburger[0].addEventListener('click', function(){
   
        navMenu[0].classList.toggle("active");
        hamburger[0].classList.toggle("active");
        console.log("its clicked");
        
}, false);

const xButton = document.getElementById("x-button");
const firstBanner = document.getElementsByClassName("first-banner");

xButton.addEventListener('click', function (){
    firstBanner[0].style.display ="none";
});


const API_Url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";

async function currentWeatherFetch(){
    const response = await fetch(API_Url);
    const weatherData = await response.json();
    const weatherDiscripton = await weatherData;
    const currentWeather  = await weatherDiscripton.main.temp;
    return currentWeather
};

var firstbannerSpan = document.getElementById("first-banner-span")

currentWeatherFetch().then(wetherData => {
    if(wetherData<4) {
        firstbannerSpan.style.color = "#00FFFF"
    } else if (wetherData >=4 && wetherData <14) {
        firstbannerSpan.style.color = "#ADFF2F"
    } else if (wetherData >=14 && wetherData <22) {
        firstbannerSpan.style.color = "#008080"
    } else if (wetherData >=22 && wetherData <28) {
        firstbannerSpan.style.color = "#FFC0CB"
    } else if(wetherData >=28){
        firstbannerSpan.style.color = "#FF00FF"
    }
});



