
function calc(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var height = Math.pow(height,2);
    var result = (703 * weight)/ height;
    document.getElementById("demo").innerHTML = result;

    

if(height == ""){

        alert('Input Height Please!!');

} else if(weight == ""){

    alert('Input Weight Please!! ');
}
else {
    document.getElementById("demo").style.display = "block";
}
}