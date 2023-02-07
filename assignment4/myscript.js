//Function to validate all the fields in the form and generate error messages accordingly
var validationFailed = [];
var ratingFieldCreated = false;
var fromInside = false;

//Function to validate Title
function validateTitle() {
    var radios = document.getElementsByName("title");
    var selRds = 0;
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            selRds++;
        }
    }
    if (selRds > 0) {
        validationFailed.push("false");
    }
    else {
        document.getElementById("error_title").style.display = "block";
        validationFailed.push("true");
    }
}

function validateInputs(object, regCase, divId) {

    console.log("Objext : " + object + ", regCase : " + regCase + ", divId : " + divId );

    var regExName = /^[a-zA-Z]+$/;
    var regExEmail = /^[_A-Za-z0-9-\\.+]+(\\.[_A-Za-z0-9-]+)*@northeastern.edu$/;
    var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regExStrtAdd1 = /^(\d{1,}) [a-zA-Z0-9]+$/;
    var regExCity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    var regExState = /^(([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy]))$/;
    var regExZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/;

    var regToVal;

    switch (regCase) {
        case "firstName":
        case "lastName":
            regToVal = regExName;
            break;
        case "emailId":
            regToVal = regExEmail;
            break;
        case "phoneNumber":
            regToVal = regExPhone;
            break;
        case "streetAddress1":
            regToVal = regExStrtAdd1;
            break;
        case "city":
            regToVal = regExCity;
            break;
        case "state":
            regToVal = regExState;
            break;
        case "zipcode":
            regToVal = regExZipCode;
            break;
        case 8:
            regToVal = regExHduh;
            break;
        case "comments":
            regToVal = regExComments;
            break;
        case "rating":
            regToVal = regExRating;
            break;

    }

    if (!object.value.trim().match(regToVal)) {
        object.style.border = "2px solid red";
        document.getElementById(divId).style.display = "block";
        object.value = "";
        validationFailed.push("true");
    } else {
        object.style.border = "";
        document.getElementById(divId).style.display = "none";
        validationFailed.push("false");
    }

}
//Function to Validate How did you hear from us field
function validateHduh() {
    var chks = document.getElementsByName("source");
    var selChks = 0;
    for (var i = 0, len = chks.length; i < len; i++) {
        if (chks[i].checked) {
            selChks++;
        }
    }
    if (selChks > 0) {
        validationFailed.push("false");
    }
    else {
        document.getElementById("error_hduh").style.display = "block";
        
        validationFailed.push("true");
    }
}

function removeDivs(object, divId){
    object.style.border = "";
    document.getElementById(divId).style.display = "none";
}

function clearDivs(){
    var inplist = document.getElementsByClassName("validation");
    var inpDivlist = document.getElementsByClassName("validationDiv");

    for (var i = 0; i < inplist.length; i++){
        document.getElementById(inplist[i].id).style.border = "";
    }
    for (var i = 0; i < inpDivlist.length; i++){
        document.getElementById(inpDivlist[i].id).style.display = "none";
    }
    document.getElementById("error_title").style.display = "none";
    document.getElementById("error_hduh").style.display = "none";
}

