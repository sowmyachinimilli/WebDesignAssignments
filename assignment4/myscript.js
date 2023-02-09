//Function to validate all the fields in the form and generate error messages accordingly
var validationFailed = [];
var customFieldCreated = false;
var fromInside = false;

//Function to validate Title
function checkTitle() {
    var radios = document.getElementsByName("title");
    var selRds = 0;
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            selRds++;
        }
    }
    if (selRds > 0) {
        document.getElementById("error_title").style.display = "none";
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
    var regExComments = /^[a-zA-Z0-9@=\-'"]+/;
    var regExCustom = /[a-zA-Z]/;

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
        case "comments":
            regToVal = regExComments;
            break;
        case "custom":
            regToVal = regExCustom;
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

function emptyCheck(object,divid){
    if (object.value == "" || object.value == null) {
        object.style.border = "2px solid red";
        document.getElementById(divid).style.display = "block";
        validationFailed.push("true");
    } else {
        object.style.border = "";
        document.getElementById(divid).style.display = "none";
        validationFailed.push("false");
    }
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
    document.getElementById("flavor").style.display="none";
    document.getElementById("customDiv").style.display="none";
    document.getElementById("error_custom").style.display="none";
}

function formValidation(){
    var inplist = document.getElementsByClassName("validation");
    var inpDivlist = document.getElementsByClassName("validationDiv");

    for (var i = 0; i < inplist.length; i++) {
        emptyCheck(inplist[i],inpDivlist[i].id);
    }
    console.log("Before validateTitle validationFailed.length + " + validationFailed.length);
    console.log("Before validateTitle validationFailed.includes + " + validationFailed.includes("true"))
    checkTitle();
    validateHduh();
    console.log("After validateHduh validationFailed.length + " + validationFailed.length);
    console.log("After validateHduh validationFailed.includes + " + validationFailed.includes("true"));
    if(validationFailed.includes("true")){
        return true;
    };
    return false;
}

function getTitle(rdg) {
    var els = document.getElementsByName(rdg);
    for (var i = 0, l = els.length; i < l; i++) {
        if (els[i].checked) {
            return els[i].value;
        }
    }
}

function getCheckboxValues(cbv) {
    console.log("Inside getCheckboxValues : " + cbv);
    var checkedValue = [];
    var cbeles = document.getElementsByName(cbv);
    for (var i = 0; cbeles[i]; ++i) {
        if (cbeles[i].checked) {
            checkedValue.push(cbeles[i].value);
        }

    }
    console.log("checkedValue : " + checkedValue);
    return checkedValue;
}

function submitForm() {
    console.log("InsidesubmitForm ");
    validationFailed = [];
    if(formValidation()){
        return;
    }
    console.log("after formValidation ");

    //var dishType = document.getElementById("dishType");
    data = {
        "title": getTitle('title'),
        "fname": document.getElementById('firstName').value,
        "lname": document.getElementById('lastName').value,
        "email": document.getElementById('emailId').value,
        "phone": document.getElementById('phoneNumber').value,
        "streetAddress1": document.getElementById('streetAddress1').value,
        "streetAddress2": document.getElementById('streetAddress2').value,
        "city": document.getElementById('city').value,
        "state": document.getElementById('state').value,
        "zipcode": document.getElementById('zipcode').value,
        "drinkType": drinkType.options[drinkType.selectedIndex].text,
        "type": getCheckboxValues("flavor"),
        "custom": document.getElementById('custom').value,
        "hduh": getCheckboxValues("source"),
        "comments": document.getElementById('comments').value,
    }
    console.log("data: " + data);

    var tab = document.getElementById("myTable");
    tab.style.display = "block";

    var row = tab.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();
    var cell11 = row.insertCell();
    var cell12 = row.insertCell();
    var cell13 = row.insertCell();
    var cell14 = row.insertCell();
    var cell15 = row.insertCell();

    console.log("before assigning data");

    cell1.innerHTML = data.title;
    cell2.innerHTML = data.fname;
    cell3.innerHTML = data.lname;
    cell4.innerHTML = data.email;
    cell5.innerHTML = data.phone;
    cell6.innerHTML = data.streetAddress1;
    cell7.innerHTML = data.streetAddress2;
    cell8.innerHTML = data.city;
    cell9.innerHTML = data.state;
    cell10.innerHTML = data.zipcode;
    cell11.innerHTML = data.drinkType;
    cell12.innerHTML = data.type;
    cell13.innerHTML = data.custom;
    cell14.innerHTML = data.hduh;
    cell15.innerHTML = data.comments;

    console.log("before appending data");

    tab.appendChild(row);

    $('#myForm')[0].reset();
    document.getElementById("flavor").style.display="none";
    document.getElementById("customDiv").style.display="none";

    return false;

}

//Function to change values of checkboxes dynamically
function chooseFlavor() {
    document.getElementById("flavor").style.display="block";
    var varListVal = document.getElementById("drinkType").value;
    switch (varListVal) {
        case "selectdrink":
            document.getElementById("flavor").style.display="none";
            break
        case "milktea":
            document.getElementById("fl01val").innerHTML = "<input type='checkbox' name='flavor' id='fl01' value='Rose' onclick='serviceCheck()' />Rose<br><br>";
            break
        case "tea":
            console.log("inside tead");
            document.getElementById("fl01val").innerHTML = "<input type='checkbox' name='flavor' id='fl01' value='Green' onclick='serviceCheck()' />Green Tea<br><br>";
            break
        case "coffee":
            document.getElementById("fl01val").innerHTML = "<input type='checkbox' name='flavor' id='fl01' value='Light' onclick='serviceCheck()' />Light Roasted<br><br>";
            break
        case "frapuccino":
            document.getElementById("fl01val").innerHTML = "<input type='checkbox' name='flavor' id='fl02' value='Caramel' onclick='serviceCheck()' />Caramel Ribbon<br><br>";
            break
        case "latte":
            document.getElementById("fl01val").innerHTML = "<input type='checkbox' name='flavor' id='fl01' value='Pumpkin' onclick='serviceCheck()' />Pumpkin Spice<br><br>";
            break
    }
    serviceCheck();
}

//Function to check if any checkboxes are checked and generate text field accordingly
function serviceCheck() {
    var srvChks = document.getElementsByName("flavor");
    var ttlServChks = 0;
    for (var i = 0, len = srvChks.length; i < len; i++) {
        if (srvChks[i].checked) {
            ttlServChks++;
        }
    }
    if (ttlServChks > 0) {
        createCustomField();
        customFieldCreated = true;
    }
    else {
        disableCustomField();
        customFieldCreated = false;
    }
}

//Functiom to Create/Generate custom Text Field Dynamically
function createCustomField() {
    let ctDiv = document.getElementById("customDiv");
    ctDiv.style.display = "block";
    if(!fromInside){
    let txtFld = document.getElementById("custom");
    txtFld.style.border = "";
    txtFld.value = "";
    }
    fromInside = false;
}

//Functiom to Hide/Disable custom Text Field Dynamically
function disableCustomField() {
    let ctDiv = document.getElementById("customDiv");
    ctDiv.style.display = "none";
    let ctErrDiv = document.getElementById("error_custom");
    ctErrDiv.style.display = "none";
    ctErrDiv.value = "";
}