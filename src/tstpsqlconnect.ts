export function setupTstconnect(element: HTMLButtonElement) {
    // let counter = "PSQL connection OK"
    const setCounter = () => {

        fetchText(element)
    }
    element.addEventListener('click', () => setCounter())
    // setCounter("Test PSQL connection")
}

async function fetchText(element: HTMLButtonElement) {
    let response = await fetch('/api');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        element.innerHTML =data  
    }
}
