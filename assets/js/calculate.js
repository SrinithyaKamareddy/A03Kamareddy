
function getTotal(){
    var rate_value;
    if ($("#r1")[0].checked)
    {
        rate_value = $("#r1")[0].value;
        return rate_value;
    }
    if($("#r2")[0].checked)
    {
        rate_value = $("#r2")[0].value;
        return rate_value;
    }
}
function myFun(){
    var z = $("#s1")[0].value;
    return z;
return z;

}
function Calculate(){
    var answer=getTotal()*myFun();
    console.log("answer", answer);
    document.getElementById("cost").value = answer;
    document.getElementById("touser").innerHTML="Thank you for shopping with us.";
}
