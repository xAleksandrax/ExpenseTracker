class HttpService
{
    static async get(url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data); // Wyświetlenie odpowiedzi serwera w konsoli
          return data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
      

    static post(url, body)
    {
        const request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onload=(response)=>{
            console.log(response);
        }
        request.send(JSON.stringify(body))
    }
    
}

