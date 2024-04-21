// run your api call here

const api = {
    async get(url) {
        const response = await fetch(url);
        return response.json();
    }
}