console.warn("@@@@@@@@@@@@@@ INTERVIEW Question Set Page No - 17 (String Tricky Programs ) @@@@@@@@@@@@@@");

console.warn("***************** String Programs **********************");

var myString = "TCS the Indian IT Giant Company"

console.warn("================= Reverse String =======================");

newString = myString.length - 1;
revString = "";
for (let index = newString; index >= 0; index--) {

    revString = revString + myString.charAt(index);

}
console.log(revString);

console.warn("================= Count Vowels =======================");

var myString = "TCS the Indian IT Giant Company";

lowerString = myString.toLowerCase();

stringLength = lowerString.length;

var totalVawels = 0;

for (let index = 0; index <= stringLength; index++) {

    totalChar = lowerString.charAt(index)
    if (totalChar == "a" || totalChar == "e" || totalChar == "i" || totalChar == "o" || totalChar == "u") {

        totalVawels = totalVawels + 1;
    }
}

console.log(totalVawels);


console.warn("================= Count Vowels using Including() =======================");

var myString = "TCS the Indian IT Giant Company";
allLowerCaseChar = myString.toLowerCase();
vowels = "aeiou";
total = 1;

for (let index = 0; index <= myString.length; index++) {

    allcharLowerCase = myString.charAt(index);
    finalResult = vowels.includes(allcharLowerCase);
    if (finalResult) {
        total = total + 1
    }

}
console.log(total);


console.warn("================= Total number of words =======================");

var myString = "TCS the Indian IT Giant Company";

totalWords = myString.split("");
console.log(totalWords);
console.log(`Total Words of String : ${myString.length}`);