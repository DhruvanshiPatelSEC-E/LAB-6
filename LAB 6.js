//task 1
//1
function delay (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("2 seconds passed"));

//2
function delay (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("Error"));

//task 2

//1

const promise = new Promise((resolve, reject) => {
    resolve(1);
});

promise
.then((value) => {
    const Multiply = 2 * 2;
    console.log(Multiply);
    return Multiply;
})
//addition
.then((value) => {
    const Multiply = 3 + 2;
    console.log(Multiply);
    return Multiply;
})

//division
.then((value) => {
    const Multiply = 2 / 2;
    console.log(Multiply);
    return Multiply;
})

//finalresult
.then((finalResult)=>{
    console.log(finalResult);
});

//TASK 3

//then and catch
function simulateOperation() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5; 
  
      setTimeout(() => {
        if (success) {
          resolve("Operation succeeded!");
        } else {
          reject("Operation failed.");
        }
      }, 1000); 
    });
  }
  
  simulateOperation()
    .then((message) => {
      console.log(`success: ${message}`);
    })
    .catch((error) => {
      console.error(error); 
    });

    //TASK 4

    //try and catch and await
    async function fetchPromise() {
        try{
            let promise = await fetchPromise(finalResult);
            return Promise;
        } catch (error){
            console.log(error);
        }
    }  
    
    


    
    
  
