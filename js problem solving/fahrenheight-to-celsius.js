function fahrenheightTocelsius(fahrenheight){

    return (fahrenheight - 32) * 5/9;

}

const todayWeather = fahrenheightTocelsius(99);
console.log(todayWeather)