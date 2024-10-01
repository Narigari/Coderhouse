// Función fetch de api de clima
async function getWeather() {
    const apiUrl = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=mK4AxTUjkkxZkYiAiWnA2lx5jKPcHtbY'

    try {
        await fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.timelines.hourly[0].values.temperature;
            const mensajeClima = document.getElementById('weather-message');
            
            if (temperature < 15) {
                mensajeClima.textContent = `Hoy hacen ${temperature}°C. Que frío! Mejor quedate en casa a puzzlear`;
            } else if (temperature <25) {
                mensajeClima.textContent = `Hoy hacen ${temperature}°C. La temperatura ideal para ir a un parque y puzzlear`;
            } else {
                mensajeClima.textContent = `Hoy hacen ${temperature}°C. Está caluroso! Quedate en casa, prendé el aire y armá un puzzle!`;
            }
        })
    } catch (error) {
        
        document.getElementById('weather-message').textContent = 'Error obteniendo datos del clima =('

        setTimeout(()=>{
            document.getElementById('weather-message').textContent = 'Esperá mientras volvemos a intentar averiguar si hoy está para puzzlear...'
        }, 3000)

    }
}

setInterval(()=>{getWeather()}, 10000)