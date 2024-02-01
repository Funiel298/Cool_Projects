const apiKey = "48630635ebc31aba2f59c952b5672565"; 

export default async function GetGeneralData(city: any) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching general data:", error);
    return null;
  }
}
