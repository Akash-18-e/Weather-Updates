const weatherform=document.querySelector(".weatherform");
const cityweather=document.querySelector(".cityweather");
const card=document.querySelector(".card");
const apikey="YOUR_API_KEY_HERE"; // Replace with your actual OpenWeatherMap API key
weatherform.addEventListener("submit",async event=>
{
    event.preventDefault();
    const city=cityweather.value;
    if(city)
    {
        try
        {
            const citydata=await getweatherdata(city);
            displaydata(citydata);
        }
        catch(error){
            console.error(error);
            displayerror(error.message);
        }
    }
    else{
            displayerror("Please Enter a City");
    }
}
);
async function getweatherdata(city)
{
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    
    const response = await fetch(apiurl);

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();
    return data;
}

function displaydata(data)
{
    const {name:city,
        main:{temp,humidity},
        weather:[{description,id}]
    }=data;
    card.textContent="";
    card.style.display="flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent =city;
    tempDisplay.textContent=`${temp}°C`;
    humidityDisplay.textContent=`Humidity: ${humidity}%`;
    descDisplay.textContent=description;
    weatherEmoji.textContent=emoji(id);

    tempDisplay.classList.add("tempdisplay");
    cityDisplay.classList.add("citydisplay");
    humidityDisplay.classList.add("humiditydisplay");
    descDisplay.classList.add("descdisplay");
    weatherEmoji.classList.add("emojidisplay");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}
function emoji(weatherId)
{
    switch(true){
case (weatherId >= 200 && weatherId < 300):
return "🌧️";
case (weatherId >= 300 && weatherId < 400):
return "🌧️";
case (weatherId >= 500 && weatherId < 600):
return "🌧️";
case (weatherId >= 600 && weatherId < 700):
return "☃️";
case (weatherId >= 700 && weatherId < 800):
return "🌫️";
case (weatherId === 800):
return "☀️";
case (weatherId >= 801 && weatherId < 810):
return "☁️"
default:
return "❓";
    }
}
function displayerror(msg)
{
    const errorcontent=document.createElement("p");
    errorcontent.textContent=msg;
    errorcontent.classList.add("error");
    card.textContent="";
    card.style.display="flex";
    card.appendChild(errorcontent);
}