
const getData = (name) => {
    name.addEventListener('load', () => {
        if (name.status >= 200 && name.status < 300) {
            try {
                console.log('success')
                console.log(name.response)
            } catch (e) {
                console.error(e);
            }
        }
    });
}

const xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'http://localhost:7070/allTickets', true);
xhr1.send()
getData(xhr1)

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', `http://localhost:7070/allTickets?id=1`, true);
xhr2.send()
getData(xhr2)

const xhr3 = new XMLHttpRequest();
xhr3.open('POST', 'http://localhost:7070/setTickets');
xhr3.setRequestHeader("Content-Type", "application/json");
xhr3.setRequestHeader('Access-Control-Allow-Credentials', true);
const reqData = { name: 'Билет', description: 'Music hall', status: true, created: Date.now()}
xhr3.send(JSON.stringify(reqData))
getData(xhr3)



