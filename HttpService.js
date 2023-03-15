import axios from 'axios'
class HttpService
{
    //klasa powinna miec 2 metody get i post 
    //metoda get 
    static async get(url)
    {
        const response = await fetch(url);
        return await response.text();
    }

    static async post(url, body)
    {
        await axios.post(url, body)
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.log(error);
        }); 
    }
}

export default HttpService;
//post wysyła dane na serwer
