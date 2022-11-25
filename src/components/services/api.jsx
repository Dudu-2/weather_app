const KEY = '68886548a0b74f46828224238222111';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);

  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
