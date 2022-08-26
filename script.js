`use strict`;

const countryContainer = document.querySelector(".country-container");
const inputCountryName = document.querySelector("#country-input");

const btnGetCountry = document.querySelector("#btn-get-country");
const btnAddCountry = document.querySelector("#btn-get-country");

btnAddCountry.addEventListener("click", function () {
  getCountry();
});

function getCountry() {
  const countryName = inputCountryName.value;
  inputCountryName.value = "";
  const api = `https://restcountries.com/v3.1/name/${countryName}`;
  console.log(api);
  makeRequest(api);
}

function makeRequest(api) {
  const request = new XMLHttpRequest();
  request.open("GET", api);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<div class="country">
        <div class="country-image-container">
          <img src="${data.flags.svg}" alt="country-image" id="country-image" />
        </div>
        <div class="country-info">
          <h3 class="heading">${data.name.common}</h3>
          <h5 class="info">Population ${data.population}</h5>
          <h5 class="info">Region ${data.region}</h5>
          
        </div>
      </div>  
`;
    countryContainer.insertAdjacentHTML("afterbegin", html);
  });
}
