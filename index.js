var inputt= document.getElementById("inputt");
var turn=true;

function input(msg){
    console.log(msg);
    inputt.value += msg
}

function empty(){
    inputt.value="";
    turn=true;
}
function bracket(){
    if(turn){
        inputt.value+='('
        turn=false;
        console.log("(");
    }else{
        inputt.value+=')'
        turn=true;
        console.log(")")
    }
}
function clearr(){
    var copy= inputt.value.slice(0,-1);
    inputt.value=copy;
    console.log(inputt.value);
}
function result() {
    try {
        var finalResult = eval(inputt.value);
        inputt.value = finalResult;
        console.log(finalResult);
    } catch (error) {
        console.error("error", error.message);
        inputt.value = "Error";
    }
}