//syncrhonous, blocking, single-thread
/*
console.log("proses 1");
console.log("proses 2");
console.log("proses 3");
*/

//Asyncrhonous, non-blocking
//Multi-Thread : Parrarel
/*
console.log("proses 1");
setTimeout(() => {
    console.log("Proses 2");
}, 3000);
console.log("proses 3");
*/



//Single-Thread : Concurrent
/*
setTimeout(() => {
    console.log("proses 1");
    setTimeout(() => {
        console.log("Proses 2");
        setTimeout(() => {
            console.log("proses 3");
        }, 3000);
    }, 3000)
}, 3000);
*/

/*
const numbers = [1,2,5,4,5];

numbers.forEach((item) => {
    setTimeout(() => {
        console.log(item);
    }, index * 3000);
});
*/

// konsep "Promise"
let condition = false

function newPromise() {
    new Promise((resolve, reject) => {
        if(condition) {
            resolve("berhasil");
        }
        else("gagal");
    });
}

//then catch
/*
newPromise.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});
/*

//Async - await
/*
const getPromise = async () => {
    const res = await newPromise();
    console.log(res);
};

getPromise();
*/

//pake "fetch"
/*
fetch("https://jsonplaceholder.typicde.com/users")
.then((res) =>res.json())
.then((json) => consle.log(json));
*/


const getJsonPlaceholder = async () => {
    const res = fetch("https://jsonplaceholder.typicde.com/users")
    const json = await res.json();
    console.log(json);
};

getJsonPlaceholder();







