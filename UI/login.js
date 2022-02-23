window.onload = () => {
    // autoRedirect();

    document.getElementById('btnSubmit').addEventListener('click', submitHandler);
}

function submitHandler() {
    const username = document.getElementById('usernameTxt').value;
    const password = document.getElementById('passwordTxt').value;

    console.log(`Username: ${username}, Password: ${password}`);

    // FIXME:
    // fetch('url', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: {
    //         username: username,
    //         password: password
    //     }
    // }).then(response => {

    //     const {
    //         token
    //     } = response.body;

    //     localStorage.setItem('token', token);
    // });

    //TODO: Fix response handling when flask api is implemented. 
}

// async function isLoggedIn() {
//     const token = localStorage.getItem('token');
//     if (!token) return false;
// }

// async function autoRedirect() {
//     const loggedIn = await isLoggedIn();
//     if (!loggedIn && location.pathname !== '/login')
//         window.location.href = '/login';
//     if (loggedIn && location.pathname === '/login')
//         window.location.href = '/';
// }