const city = 'moscow'; // Замените на нужный вам город
 const url = `http://meteor.serversys.ru/v1?city=${city}`;
 fetch(url)
 .then(response => {
 if (!response.ok) {
 throw new Error('Network response was not ok ' + response.statusText);
 }
 return response.json();
 })
 .then(data => {
 // Извлечение необходимых данных
 const temperature = data.current.temp_c; // Температура в градусах Цельсия
 const humidity = data.current.humidity; // Влажность в процентах
 const windSpeed = data.current.wind_kph; // Скорость ветра в км/ч
 // Вывод данных в консоль
 console.log(`Температура: ${temperature}°C`);
 console.log(`Влажность: ${humidity}%`);
 console.log(`Скорость ветра: ${windSpeed} км/ч`);
 })
 .catch(error => {
 console.error('Ошибка:', error);
 });
