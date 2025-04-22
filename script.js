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
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
    
            if (city) { // Check if the API response is successful
                cityName.innerHTML = `Weather in ${city}`;
                temperature.innerHTML = `Temperature: ${data.main.temp} °C`;
                description.innerHTML = `Description: ${data.weather[0].description}`;
                humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
                errorMessage.innerHTML = ""; // Clear any previous error message
                weatherInfo.classList.remove('hidden');
            } else {
                errorMessage.innerHTML = "Error fetching weather. Please try again.";
                weatherInfo.classList.add('hidden');
            }
    
            console.log(`Weather in ${city}:`);
            console.log(`Temperature:, ${data.main.temp}°C`);
            console.log("Description:", data.weather[0].description);
            console.log("Humidity:", data.main.humidity, "%");
    
            return data;
        } catch (error) {
            console.error("Error fetching weather:", error);
            errorMessage.innerHTML = "Error fetching weather. Please try again.";
            
        }
    }
    
    // Usage
    searchBtn.addEventListener('click', function() {
        getWeather(city.value);
        city.value = '';
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
        
    