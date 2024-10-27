echo $city = 'moscow'; //замените на свой город
$url = "http://meteor.serversys.ru/v1?city=$city";
$response = file_get_contents($url);
if ($response !== false) {
    $data = json_decode($response, true);
    if (isset($data['current'])) {
        $temperature = $data['current']['temp_c'];
        $humidity = $data['current']['humidity'];
        $wind_speed = $data['current']['wind_kph'];
        echo "Температура: $temperature°C
Влажность: $humidity%
Скорость ветра: $wind_speed км/ч
";
    } else {
        echo "Ошибка: данные о текущей погоде недоступны.
";
    }
} else {
    echo "Ошибка при получении данных о погоде.
";
}
