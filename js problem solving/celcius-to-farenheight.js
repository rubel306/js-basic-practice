function celsiusToFahrenheight(celsius){
    return (celsius * 9/5) + 32;
}

const todayWeather = celsiusToFahrenheight(1);
console.log(todayWeather)