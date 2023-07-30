document.getElementById('loginform').addEventListener("submit", event => {
    event.preventDefault();

    let user = {};
    user.email = document.getElementById('inputEmail').value;
    user.password = document.getElementById('inputPassword').value;
    

    // Check for login
    getData("http://localhost:3000/login", "POST", user).then(result => {
        sessionStorage.setItem('user', JSON.stringify(result.data));
    });
});

async function getData(url, method, data) {
    let resp = await fetch(url, {
        method: method,
        headers: {
            'content-Type': "application/json"
        },
        body: JSON.stringify(data)
    });
    return await resp.json();
}