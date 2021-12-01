
function getpercentage (num) {
    let total = 100;
    let percantage = (num/total)*100;
    return percantage;
}
var degree;
function calculate() {
    degree = document.getElementById("degree").value;
    let result = getpercentage(degree);
    let rzlt = "Result : " + result + "%";
    document.getElementById("result").innerHTML = rzlt;
    console.log(rzlt);
}


