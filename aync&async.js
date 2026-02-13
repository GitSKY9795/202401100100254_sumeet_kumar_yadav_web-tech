/*console.log("start");
for (let index = 0; index < 5; index++) {
   console.log("Hello world");
   
}
console.log("end");*/
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log('Data received:', data);
}

fetchData(displayData);
          