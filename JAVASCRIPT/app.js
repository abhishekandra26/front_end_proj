const myPromise = new Promise((resolve,reject) => {

    setTimeout(() => {
        const random = Math.floor(Math.random() * 10);

        if(random<5){
            resolve(`Success, ${random} less than 5`);
        }

        else{
            reject(`Error, ${random} more than 5`);
        }
            
    }, 1000)
})

myPromise
    .then((result) => {
        console.log(result);
    })

    .catch((error) => {
        console.log(error);
    })