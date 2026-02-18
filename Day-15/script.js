// console.log("hello world")
// fetch("https://jsonplaceholder.typicode.com/todos/5").then(resp=>console.log(resp));
function getData(url){
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>console.log(data))
}
getData("https://jsonplaceholder.typicode.com/todos/5")
