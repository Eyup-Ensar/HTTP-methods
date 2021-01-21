
document.querySelector("#get").addEventListener('click', function () {
    let url = "http://jsonplaceholder.typicode.com/posts";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }
    xhr.send();
});

document.querySelector("#post").addEventListener('click', function () {
    const data = {
        "userId": 1,
        "title": "new tittle",
        "body": "new body"
    }
    let json = JSON.stringify(data);
    let url = "http://jsonplaceholder.typicode.com/posts";
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        if(xhr.status === 201 && xhr.readyState === 4){
            console.log(xhr.responseText);
        }
    }
    xhr.send(json);
});

document.querySelector("#put").addEventListener('click', function () {
    fetch('http://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                userId: 1,
                title: "update tittle",
                body: "update body",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
});

document.querySelector("#del").addEventListener('click', function () {
    fetch('http://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    })
});


