class HttpService
{
    // static async get(url) {
    //     const response = await fetch(url);
    //     const data = await response.text();
    //     console.log(data); // wyświetlenie odpowiedzi serwera w konsoli
    //     return data;
    //   }
    // static get(url) {
    //     return fetch(url)
    //       .then(response => response.text())
    //       .then(data => {
    //         console.log(data); // Wyświetlenie odpowiedzi serwera w konsoli
    //         return data;
    //       });
    //   }
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

