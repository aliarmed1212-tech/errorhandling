function getrecipe() {
    try {
        let num1 = 2;
        let num2 = 3;

        const total = num1 + num2;

        alert(total);
    } catch (err) {
        console.log(err);
        alert("Something went wrong");
    }
}
async function getweather() {
    try {
        const weatherRes = await fetch(
            "https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
        );

        console.log("Status:", weatherRes.status);

        const weatherData = await weatherRes.json();

        console.log(weatherData);
    } catch (err) {
        console.error(err);
        alert("Something went wrong");
    }
}

getweather();




