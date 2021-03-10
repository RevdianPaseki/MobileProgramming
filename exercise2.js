
function mandi() {
    console.log("mandi");
}
function sarapan(callback) {
    setTimeout(() => {
        console.log("sarapan");
        callback();
    }, 3000);
}

function BerangkatSekolah() {
    console.log("Berangkat ke Sekolah");
}

mandi();
sarapan(BerangkatSekolah);

function helloworld() {
    return helloworld = newPromise((resolve) => {
        resolve("hello world");
    })
};

let messages = async () => {
    try {
        const msg = await helloworld();
        setTimeout(() => { console.log(msg); }, 2000);
    }
    catch(error)
    {
        console.log(error);
    }
};
messages();