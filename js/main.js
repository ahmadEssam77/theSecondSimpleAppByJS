var userEmailInput = document.getElementById("userEmail");
var userNameInput = document.getElementById("userName");
var userDomainInput = document.getElementById("userDomain");

function gettingNameAndDomain() {
    var userEmailVal = userEmailInput.value;

    if (userEmailVal.search("@") == -1) {
        alert("Kindly insert a valid email");
        userEmailInput.value = "";
    } else {
        var atPosition = userEmailVal.indexOf("@");
        var dotPosition = userEmailVal.lastIndexOf(".");
        var userName = userEmailVal.slice(0, atPosition);
        var userDomain = userEmailVal.slice(atPosition+1, dotPosition);

        userNameInput.value = userName;
        userDomainInput.value = userDomain;
    } 
}

function resetData() {
    userEmailInput.value = "";
    userNameInput.value = "";
    userDomainInput.value = "";
}





