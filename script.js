async function start() {
    // Fetch data from JSON file
    const response_news = await fetch("news.json");
    const news = await response_news.json();

    for (let text of news){
        var firstElement = document.createElement("p");
        firstElement.innerText = text;
    }
}