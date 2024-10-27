import requests
 city = 'moscow'  # Замените на нужный вам город
 url = f'http://meteor.serversys.ru/v1?city={city}'
 response = requests.get(url)
 if response.status_code == 200:
     data = response.json()
     temperature = data['current']['temp_c']  # Температура в градусах Цельсия
     humidity = data['current']['humidity']  # Влажность в процентах
     wind_speed = data['current']['wind_kph']  # Скорость ветра в км/ч
     print(f'Температура: {temperature}°C')
     print(f'Влажность: {humidity}%')
     print(f'Скорость ветра: {wind_speed} км/ч')
 else:
     print('Ошибка при получении данных о погоде')
