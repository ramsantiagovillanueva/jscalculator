function x1(){

    return Number(document.getElementById('num1').value);
 }
 
 function x2(){
    return Number(document.getElementById('num2').value);
 }
 function isValid(){
    let num1 = x1();
    let num2 = x2();
            return true;
        }
    
 
 function add(){
   if (isValid() == true){
    alert(x1() + x2());
   }
   else{
    alert("invalid input");
   }
 }
 
 function minus(){
    if (isValid() == true){
        alert(x1() - x2());
       }
       else{
        alert("invalid input");
       }
 }
 
 function times(){
    if (isValid() == true){
        alert(x1() * x2());
       }
       else{
        alert("invalid input");
       }
 }
 
 function divide(){
    if (isValid() == true){
        alert(x1() / x2());
     
       }
 }
 function output (answer){
     document.getElementById('output')
 }