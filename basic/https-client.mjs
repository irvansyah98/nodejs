import https from 'https';

const endpoint = "https://hookb.in/wNgR9g9mQkUqWVaqDmqN";
const request = https.request(endpoint,{
    method : "POST",
    headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response)=> {
    response.addListener("data",(data)=> {
        console.info(`Receive data : ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstName : "budi",
    lastName : "1234"
})

request.write(body);
request.end();