async function start() {
    // Fetch data from JSON file
    const response_news = await fetch("news.json");
    const news = await response_news.json();

    for (let text in news){
        var firstElement = document.createElement("p");
        firstElement.innerText = text;
    }