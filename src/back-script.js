const fetch = require('node-fetch');

async function getUser() {
    const response = await fetch('https://api.github.com/users/slowsleep');
    const status = await response.status;
    if (status == 200) {
        const resJSON = await response.json();
        return {status: status, data: resJSON};
    }
    return {status, data: null};
}

module.exports = { getUser };
