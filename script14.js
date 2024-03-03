 // Explain Call back function with an example - explaination in notes14

 function main(xyz){
console.log("I am main")
xyz();
 }

 main(function xyz(){
console.log("I am xyz")
 })