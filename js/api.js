// Search Temperature
const searchTemperature = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    if (!searchText) {
        alert('Please enter a valid city name!!!');
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=a0299f20f927dcd541411af65f3aab8b`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemp(data))
    }
    searchField.value = '';
}

// Display Temptureature
const displayTemp = temp => {
    if (temp.cod == 404) {
        alert('Invalid City Name');
        return;
    }
    document.getElementById('city-name').innerText = temp.name;
    document.getElementById('temperature').innerText = temp.main.temp;
    document.getElementById('type').innerText = temp.weather[0].main;
    document.getElementById('img').setAttribute('src', `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`)
}