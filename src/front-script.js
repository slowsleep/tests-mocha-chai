let app = document.querySelector("#app");

async function getUserInfo() {
    const response = await fetch("https://api.github.com/users/slowsleep");
    const status = await response.status;
    if (status == 200) {
        const resJSON = await response.json();
        return {status: status, data: resJSON};
    }
    return {status, data: null};
}

let res = getUserInfo().then((data) => printJSON(JSON.stringify(data, null, '\t')));

function printJSON(string) {
    let pre = document.createElement("pre");
    pre.id = "content";
    pre.textContent = string;
    app.appendChild(pre);
}
