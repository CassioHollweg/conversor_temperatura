let btn = document.querySelector(".btn");
let temperaturaDigitada = document.querySelector("#temp");
let temperaturaEntrada = document.querySelector("#temperaturas-entrada");
let temperaturaSaida = document.querySelector("#temperaturas-saida");
let resultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {
  if (
    temperaturaEntrada.value == "celsius" &&
    temperaturaSaida.value == "fahrenheit"
  )
    resultado.textContent = `A temperatura de Celsius para Fahrenheit fica: ${celsiusParaFahrenheit(
      temperaturaDigitada.value
    )}F`;
  else if (
    temperaturaEntrada.value == "fahrenheit" &&
    temperaturaSaida.value == "celsius"
  )
    resultado.textContent = `A temperatura de Fahrenheit para Celsius fica: ${fahrenheitParaCelsius(
      temperaturaDigitada.value
    )}C`;
  else if (
    temperaturaEntrada.value == "kelvin" &&
    temperaturaSaida.value == "celsius"
  )
    resultado.textContent = `A temperatura de Kelvin para Celsius fica: ${kelvinParaCelsius(
      temperaturaDigitada.value
    )}C`;
  else if (
    temperaturaEntrada.value == "celsius" &&
    temperaturaSaida.value == "kelvin"
  )
    resultado.textContent = `A temperatura de Celsius para Kelvin fica: ${celsiusParaKelvin(
      temperaturaDigitada.value
    )}K`;
  else if (
    temperaturaEntrada.value == "kelvin" &&
    temperaturaSaida.value == "fahrenheit"
  )
    resultado.textContent = `A temperatura de Kelvin para Fahrenheit fica: ${kelvinParaFahrenheit(
      temperaturaDigitada.value
    )}F`;
  else if (
    temperaturaEntrada.value == "fahrenheit" &&
    temperaturaSaida.value == "kelvin"
  )
    resultado.textContent = `A temperatura de Fahrenheit para Kelvin fica: ${fahrenheitParaKelvin(
      temperaturaDigitada.value
    )}K`;
  else if (
    temperaturaEntrada.value == "celsius" &&
    temperaturaSaida.value == "rankine"
  )
    resultado.textContent = `A temperatura de Celsius para Rankine fica: ${celsiusParaRankine(
      temperaturaDigitada.value
    )}R`;
  else if (
    temperaturaEntrada.value == "fahrenheit" &&
    temperaturaSaida.value == "rankine"
  )
    resultado.textContent = `A temperatura de Fahrenheit para Rankine fica: ${fahrenheitParaRankine(
      temperaturaDigitada.value
    )}R`;
  else if (
    temperaturaEntrada.value == "kelvin" &&
    temperaturaSaida.value == "rankine"
  )
    resultado.textContent = `A temperatura de Kelvin para Rankine fica: ${kelvinParaRankine(
      temperaturaDigitada.value
    )}R`;
  else if (
    temperaturaEntrada.value == "rankine" &&
    temperaturaSaida.value == "celsius"
  )
    resultado.textContent = `A temperatura de Rankine para Celsius fica: ${rankineParaCelsius(
      temperaturaDigitada.value
    )}C`;
  else if (
    temperaturaEntrada.value == "rankine" &&
    temperaturaSaida.value == "fahrenheit"
  )
    resultado.textContent = `A temperatura de Rankine para Fahrenheit fica: ${rankineParaFahrenheit(
      temperaturaDigitada.value
    )}F`;
  else if (
    temperaturaEntrada.value == "rankine" &&
    temperaturaSaida.value == "kelvin"
  )
    resultado.textContent = `A temperatura de Rankine para Kelvin fica: ${rankineParaKelvin(
      temperaturaDigitada.value
    )}K`;
  else
    resultado.textContent = `A temperatura de ${temperaturaEntrada.value} para ${temperaturaSaida.value} fica: ${temperaturaDigitada.value}`;
});

//functions para as conversões
function celsiusParaFahrenheit(tempCelsius) {
  let tempFahrenheit = tempCelsius * 1.8 + 32;
  return tempFahrenheit;
}

function celsiusParaKelvin(tempCelsius) {
  let tempKelvin = tempCelsius + 273;
  return tempKelvin;
}

function celsiusParaRankine(tempCelsius) {
  let tempRankine = tempCelsius * 1.8 + 491.67;
  return tempRankine;
}

function fahrenheitParaCelsius(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) / 1.8;
  return tempCelsius;
}

function fahrenheitParaKelvin(tempFahrenheit) {
  let tempKelvin = ((tempFahrenheit - 32) * 5) / 9 + 273;
  return tempKelvin;
}

function fahrenheitParaRankine(tempFahrenheit) {
  let tempRankine = tempFahrenheit + 459.67;
  return tempRankine;
}

function kelvinParaCelsius(tempKelvin) {
  let tempCelsius = tempKelvin - 273;
  return tempCelsius;
}

function kelvinParaFahrenheit(tempKelvin) {
  let tempFahrenheit = (tempKelvin - 273) * 1.8 + 32;
  return tempFahrenheit;
}

function kelvinParaRankine(tempKelvin) {
  let tempRankine = (tempKelvin - 273.15) * 1.8 + 491.67;
  return tempRankine;
}

function rankineParaCelsius(tempRankine) {
  let tempCelsius = tempRankine + 1.8 - 273.15;
  return tempCelsius;
}

function rankineParaFahrenheit(tempRankine) {
  let tempFahrenheit = tempRankine - 491.67 + 32;
  return tempFahrenheit;
}

function rankineParaKelvin(tempRankine) {
  let tempKelvin = tempRankine - 491.67 / 1.8 + 273.15;
  return tempKelvin;
}
