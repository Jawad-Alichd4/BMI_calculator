function calculateBMI() {
var inputweight = document.getElementById("inputweight");
var inputheight = document.getElementById("inputheight");
var weightvalue = inputweight.value;
var heightvalue = inputheight.value;
console.log(weightvalue)
if(weightvalue === "" && heightvalue === "")
{
    alert("input some values");
    return;
}
 else if(weightvalue < 0 || heightvalue < 0)
 {
     alert("value must be positive");
     return;
 }
 var squareheight = heightvalue * heightvalue;
 var BMIOutput = weightvalue / squareheight;
 
 var output = (document.getElementById("output"));
 output.innerHTML  = BMIOutput;
  

 if(BMIOutput < 18.5) {
    output.innerHTML = "underweight :" + BMIOutput;
 }
 else if(BMIOutput < 24.9 && output >= 18.5) {
     output.innerHTML = "  normal : " + BMIOutput;
 }
 else if(BMIOutput < 29 && output >= 24.9) {
    output.innerHTML = "overwieght :" + BMIOutput;
 }
  else if(BMIOutput > 29 ) {
     output.innerHTML = "Obesity :" + BMIOutput;
  }
 
}


