function printpage(){
    window.print();
    
     
        
}
 
function  predict() {
    // Get the select element
    var selectElement = document.getElementById("inputGroupSelect012");

    // Get the selected option value
    var selectedValue = selectElement.value;

    // Check the selected value and perform an action
    if (selectedValue === "1") {
        document.getElementById("result").innerHTML = "<span><h1>Accuracy</h1><h3>96%</h3></span><span><h1>Rotten</h1><h3>4%</h3></span><span><h1>Fresh</h1><h3>96%</h3></span>";
    }
    else if (selectedValue === "2") {
        document.getElementById("result").innerHTML = "<span><h1>Accuracy</h1><h3>97%</h3></span><span><h1>Rotten</h1><h3>4%</h3></span><span><h1>Fresh</h1><h3>96%</h3></span>";
    }
    else if (selectedValue === "3") {
        document.getElementById("result").innerHTML = "<span><h1>Accuracy</h1><h3>98%</h3></span><span><h1>Rotten</h1><h3>4%</h3></span><span><h1>Fresh</h1><h3>96%</h3></span>";
    }
    else if (selectedValue === "4") {
        document.getElementById("result").innerHTML = "<span><h1>Accuracy</h1><h3>99%</h3></span><span><h1>Rotten</h1><h3>4%</h3></span><span><h1>Fresh</h1><h3>96%</h3></span>";
    }
    else if (selectedValue === "5") {
        document.getElementById("result").innerHTML = "<span><h1>Accuracy</h1><h3>90%</h3></span><span><h1>Rotten</h1><h3>4%</h3></span><span><h1>Fresh</h1><h3>96%</h3></span>";
    }
    else if (selectedValue === "6") {
        document.getElementById("result").innerHTML = "<span><h1>Accuracy</h1><h3>91%</h3></span><span><h1>Rotten</h1><h3>4%</h3></span><span><h1>Fresh</h1><h3>96%</h3></span>";
    }
    else if (selectedValue === "7") {
        document.getElementById("result").innerHTML = "<span><h1>Accuracy</h1><h3>92%</h3></span><span><h1>Rotten</h1><h3>4%</h3></span><span><h1>Fresh</h1><h3>96%</h3></span>";
    }
    else{
        alert("choose iteam type");
    }
    hideButton();
}
function hideButton() {
    // Get the button element
    var buttonElement = document.getElementById("myButton");

    // Hide the button by setting its display property to "none"
    buttonElement.style.display = "none";
}