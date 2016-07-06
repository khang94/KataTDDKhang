/**
 * Created by khang on 6/29/2016.
 */
window.Add1 = window.Add1 || {};
(function(){
    var caculator = function(){
        var inputString = document.getElementById('string').value;

        var isDelimeterExist = isThereDelimeter(inputString);
        var result = 0;
        alert(" is there delimeter : " + isDelimeterExist);
        if(isDelimeterExist){
            result = caculateStringWithDelimeter(inputString);
        }
        else {
            result = caculateStringWithNonDelimeter(inputString);
        }
        alert('result = ' + result);
        return result;
    };
    window.Add1.init = function(){
        document.getElementById('btnClick').addEventListener('click',caculator);


    };
})();
// Caculate the string with non-delimeter
function caculateStringWithNonDelimeter(inputString){
    var arrayOfNumber = inputString.split(',');
    var result = 0 ;
    for(var i = 0 ; i < arrayOfNumber.length ; i++){
        result += parseInt(arrayOfNumber[i]);
    }
    return result;
}
// Caculate the string with the delimeter
function caculateStringWithDelimeter(inputString){
    var result = 0;
    for(var i = 0 ; i < inputString.length ; i++){
        if(inputString.indexOf('\n')>-1){
            inputString = inputString.replace('\n','');
        }
        if(!isNaN(inputString[i])) {
            result += parseInt(inputString[i]);
        }
    }
    return result;
}
function isThereDelimeter(inputString){
    var checkDelimeter = false;
    for(var i = 0 ; i < inputString.length ; i++){
        var char = inputString[i];
        // '//1,2,3,3,5'
        if (isNaN(char) && char != ','){
            // This array does not have the delimiter
            checkDelimeter = true;
            break;
        }
    }
    return checkDelimeter;
}
/*function add1(number){
    var arrayOfNumber = [];
    var result = 0;
    if(number.length == 0) {
        result = 0;
    }
    else if(number.length=1){
        result = number;
    }
    else {
        arrayOfNumber = number.split(",");
        for(var i = 0 ; i < arrayOfNumber.length ; i++) {
            result += arrayOfNumber[i];
        }
    }
    return result;
}*/