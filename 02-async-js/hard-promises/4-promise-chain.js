/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


function waitOneSecond() {
  const pr = new Promise(function(resolve){
    setTimeout(() => resolve(), 1000);
  })

  return pr;
}

function waitTwoSecond() {

  return new Promise(function(resolve){
    setTimeout(() => resolve(), 2000);
  })

}

function waitThreeSecond() {

  return new Promise(function(resolve){
    setTimeout(() => resolve(), 3000);
  })

}

function calculateTime() {

  var start = Date.now()
  waitOneSecond()
  .then(() => {return waitTwoSecond()})
  .then(() => {return waitThreeSecond()})
  .then(() => {
    var time = Date.now() - start;
    console.log(time / 1000 + " Seconds!");
  } )
  
  }

calculateTime();