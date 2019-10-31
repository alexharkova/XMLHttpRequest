let simpleRequest = (URL, callback) => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", URL);

    xhr.onload = function () {
        callback(xhr.responseText, xhr.status);
    };

    xhr.send();
};

let handleResponse = (response, status) =>{

    if (status === 404){
        console.log('Not Found');
    }else if(status === 400){
        console.log('Bad request')
    }else{
        console.log(JSON.parse(response));
    }
};

simpleRequest('https://reqres.in/api/users?page=2', (response, status) => {
    handleResponse(response, status);
});

simpleRequest('https://reqres.in/api/users/232', (response, status) => {
    handleResponse(response, status);
});

simpleRequest('https://rwewewes.in/api/users/232', (response, status) => {
    handleResponse(response, status);
});