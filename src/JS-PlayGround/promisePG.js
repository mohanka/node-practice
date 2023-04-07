
function getMyCar() {
    return new Promise((resolve, reject) => {
        var sum = 1+1;
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
    
getMyCar()
    .then((salute) => console.log(salute))
    .catch((errMessage) => console.log(errMessage));



getMyCar()
    .then((message) => {
        addInfo(message)
            .then((addedInfoMessage) => console.log(addedInfoMessage))
            .catch(() => console.log("Err while adding info"));
    })
    .catch(() => {console.log("Some issue")})



getMyCar()
    .then((message) => addInfo(message))
    .then((addedInfoMessage) => console.log(addedInfoMessage))
    .catch(() => console.log("Err while adding info"));