alert("script works")
let a=prompt("Enter the value of a","543")
a = Number.parseInt(a)
alert("You have entered a value of type "+(typeof a))
let write = confirm("Do you want to write it into a page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write")
}
