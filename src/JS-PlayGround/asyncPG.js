
function getMyCar(sum) {
    return new Promise((resolve, reject) => {
        if(sum == 2) {
            resolve("Hey Ramesh");
        } else {
            reject("errrrr.....");
        }
    })   
}

function addInfo(message) {
    return new Promise((resolve, reject) => {
        resolve(`${message} your car has arrived`);
    })
}

// async await is just a syntatic sugar over the promises 
async function myAsyncFn(sum) {
    try {
        const res1 = await getMyCar(sum);
        console.log("Got res1");
        const res2 = await addInfo(res1);
        console.log("Got res2");
        console.log(res2);        
    } catch (err) {
        console.log(err);
    }
}

myAsyncFn(3);

myAsyncFn(2);