function takeJson() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then (function (user) {
        console.log(user);
    });
}

takeJson();