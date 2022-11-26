let is_notes_and_recording_available = true;
let promise = new Promise(function(resolve, reject ){
    if(is_notes_and_recording_available) {
        resolve("Sir shared notes and recordings !! ");
    } else{
        reject("Sir does not shared notes and recordings !!");
    }
} );

promise.then(function(success){
    console.log(success);
}).catch(function(failure){
    console.log(failure);
}).finally(function(){
    console.log("Done....");
});

console.warn("=================== Promise (Practice) ========================= ");

let promiseResult = false;
let myPromise = new Promise(function(successed,rejected){
    if(promiseResult){
        successed("I am so Happy");
    }else{
        rejected("I am so sad")
    }
})
myPromise.then(function(happy){
    console.log(happy);
}).catch(function(unhappy){
    console.log(unhappy);
}).finally(function(){
    console.log("Finally Happy");
})

console.warn("=================== Promise (Practice 2) ========================= ");

let myNumber = false;
let practice = new Promise(function(even,odd){
  if(myNumber){
    even("0,2,4,6,8,10");
  }else{
    odd("1,3,5,7,9")
  }
})
practice.then(function(evenNumbers){
  console.log(evenNumbers);
}).catch(function(oddNumbers){
  console.log(oddNumbers);
}).finally(function(){
    console.log("Numbers");
});


console.warn("=================== Promise (Practice ....) ========================= ");

var myDream = false;
let simple = new Promise(function(hi, by) {
    if(myDream){
        hi('Success');
    }else{
        by("Unsuccess");
    }
}) 

simple.then(function(best){
    console.log(best);
}).catch(function(bad){
    console.log(bad);
}).finally(function(){
    console.log("Good....");
});

