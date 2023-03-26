class HttpService
{
    //klasa powinna miec 2 metody get i post 
    //metoda get 
    static async get(url)
    {
        const response = await fetch(url);
        return await response.text();
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

