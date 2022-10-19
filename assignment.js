console.warn("Design  a grade system ");

function gradeSystem(score) {
    
        if (score >= 35 && score<=100) {
              console.log("You are Passed");
        }
        if (score >= 35 && score < 60) {
            console.log("GRADE is C");
        }
        if (score >= 60 && score < 75) {
            console.log("GRADE is B");

        } if (score >= 75 && score <= 90) {
            console.log("GRADE is A");
        }
        if (score >= 90 && score <= 100) {
            console.log("GRADE is A+");
        }
        
        if (score<35 && score>=0 && score!=" " && score!= null && score!="") {
            console.log(`Result = You are failed.`);
    }

    if (score<0 || score>100 ) {
        console.log("Invalid score");
    }
    
    if (score==null || score==undefined) {
        console.log("Null or undefined");
    }
    
    if (typeof(score)=="string") {
        console.log("String Format : Invalid score");
    }
    
    console.log;
}
gradeSystem(66);
console.warn("===================");
gradeSystem(13);
console.warn("===================");
gradeSystem(" ");
console.warn("===================");
gradeSystem(98);
console.warn("===================");
gradeSystem("Fifty Five");
console.warn("===================");
gradeSystem(35);
console.warn("===================");
gradeSystem(75);
console.warn("===================");
gradeSystem(null);
console.warn("===================");
gradeSystem(undefined);
console.warn("===================");
gradeSystem(-20);
console.warn("===================");
gradeSystem(55);
console.warn("===================");
gradeSystem(82);

