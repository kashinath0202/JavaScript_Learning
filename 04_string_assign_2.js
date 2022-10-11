console.log("================================= Given String Using FE On consol =================================");
var word= function(){
    var string='     Hey you are doing good, keep it up     ';
    console.log(string);

    console.log("=================== 2.Length Of String ===================");

    console.log(string.length);

    console.log("=================== 3.Remove the Space ===================");

    console.log(string.trim());

    console.log("=================== 4.Count of extra space Removed in step 3  ===================");

    var string_1='Hey you are doing good, keep it up';

    console.log(string_1.length);

    console.log("=================== 5.First & last character On the Same line after trim ===================");
              
     console.log(string_1.charAt(0), string_1.charAt(string_1.length-1));

     console.log("=================== 6.Total words in string after trim ===================");
     
     var splitResult = string_1.split(" ");
           console.log(splitResult);
           console.log(splitResult.length);
           
     console.log("=================== 7.good word printing ===================");

     console.log(string_1.slice(18,22));

     console.log("=================== 8.Substring & Slice===================");
      
     console.log(string_1.substring(22));
     console.log(string_1.slice(22));

     console.log("=================== 9.Check The String===================");

     console.log(string_1.endsWith("up"));

     console.log("=================== 10.Check The String===================");

     console.log(string_1.startsWith("Hey"));
}
 word();


