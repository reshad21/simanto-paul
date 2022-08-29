const getdata = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => diaplaydata(data))
}
getdata();


const diaplaydata = (data) => {
    // console.log(data);
    const countrydetails = document.getElementById('countrydetails');
    data.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('countrystyle');
        div.innerHTML = `
            <h3>Country Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : "No capital"}</p>
            <button onclick="getinfo('${country.cca2}')">Get Details</button>
        `;
        countrydetails.appendChild(div);
    })
}


const getinfo = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data))
}

const displayCountryDetail = detail => {
    console.log(detail[0]);
    console.log(detail[0].name.common);
    console.log(detail[0].flags.png);
    const header = document.getElementById('header');
    header.classList.add('headerstyle');
    header.innerHTML=`
        <h1>Country Name : ${detail[0].name.common}</h1>
        <img src="${detail[0].flags.png}">
    `;

}