function calculateBMI() {
var inputweight = document.getElementById("inputweight");
var inputheight = document.getElementById("inputheight");
var weightvalue = inputweight.value;
var heightvalue = inputheight.value;
console.log(weightvalue)
if(weightvalue === "" && heightvalue === "")
{
    alert("input some values");
}
 else if(weightvalue < 0 || heightvalue < 0)
 {
     alert("value must be positive")
 }
 var squareheight = heightvalue * heightvalue;
 var BMIOutput = weightvalue / squareheight;
 
 var output = (document.getElementById("output"));
 output.innerHTML  = BMIOutput;
 if(output < 18.5) {
    output.value += "underweight";
 }
 else if(output < 24.9 && output >= 18.5) {
     output.value += "  normal "
 }
 else if(output < 29 && output >= 24.9) {
    output.value += "  overwieght"
 }

 
}


