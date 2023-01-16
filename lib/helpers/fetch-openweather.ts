type FetchProps = {
  GeolocationCoordinates?: any;
};

export async function fetchOnecall(props: any) {
  const functionCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude={part}&appid=48f427056d4654fc05c05c1e61a36c47&lang=da&units=metric`;

  try {
    const response = await fetch(functionCall);
    const results = await response.json();

    return results;
  } catch (err: any) {
    console.log(`Fetch error: ${err.message}`);
  }
}

export async function fetchWeather(props: any) {
  const functionCall = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&exclude={part}&appid=48f427056d4654fc05c05c1e61a36c47&lang=da&units=metric`;

  try {
    const response = await fetch(functionCall);
    const results = await response.json();

    return results;
  } catch (err: any) {
    console.log(`Fetch error: ${err.message}`);
  }
}
