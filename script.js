    const searchBtn = document.querySelector('.add_btn');
    const city = document.getElementById('cityInput');
    const weatherInfo = document.querySelector('.weather-info');
    const errorMessage = document.getElementById('error');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');

    const API_KEY = '2853c730b501cdd8651c59f41c818185';

    async function getWeather(city) {
        try {
            if (!city) {
                errorMessage.innerHTML = "Please enter a city name.";
                weatherInfo.classList.add('hidden');
                return;
            }
    
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
    
            if (!response.ok) {
                if (response.status === 404) {
                    errorMessage.innerHTML = "City not found. Please check the city name.";
                }else {
                    errorMessage.innerHTML = "An error occurred. Please try again later.";
                }
                weatherInfo.classList.add('hidden');
                return;
            }
    
            const data = await response.json();
    
            cityName.innerHTML = `Weather in ${data.name}`;
            temperature.innerHTML = `Temperature: ${data.main.temp} °C`;
            description.innerHTML = `Description: ${data.weather[0].description}`;
            humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
            errorMessage.innerHTML = ""; // Clear any previous error message
            weatherInfo.classList.remove('hidden');
    
            console.log(`Weather in ${data.name}:`);
            console.log(`Temperature: ${data.main.temp}°C`);
            console.log("Description:", data.weather[0].description);
            console.log("Humidity:", data.main.humidity, "%");
    
            return data;
        } catch (error) {
            console.error("Error fetching weather:", error);
            errorMessage.innerHTML = "Network error. Please check your connection and try again.";
            weatherInfo.classList.add('hidden');
        }
    }
    

    searchBtn.addEventListener('click', function() {
        getWeather(city.value);
        city.value = '';
    });
    document.addEventListener('keypress', function(e){
        if (e.key === "Enter") {
            getWeather(city.value);
            city.value = '';
        }
        
    });

// let read = 'true';

//     const comrade = {
//         name: 'comrade',
//         course: 'computer science'
//     };
//     comrade.read = read;
//     console.log(comrade);
//     console.log(comrade.read);

//    let {name , course,} = comrade;
//     console.log(course,name);
    
//     const names = [ 'ridwan', 'saliu'];
//     console.log(names);
//     const [firstName,lastName] = names ;
//     console.log(firstName,lastName);
        
    