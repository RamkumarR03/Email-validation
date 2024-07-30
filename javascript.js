
function validationform() {
    var firstname = document.validateform.firstname.value;
    var lastname = document.validateform.lastname.value;
    var city = document.validateform.city.value;
    var email = document.validateform.mail.value;
    var Phonenumber = document.validateform.Phonenumber.value;
    var address = document.validateform.address.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstname == null || firstname == "" || firstname.length < 6) {
        alert("Firstname should be more than six characters");
        return false;
    } else if (lastname == null || lastname == "" || lastname.length < 1) {
        alert("Lastname must be at least two characters long");
        return false;
    } else if (city == null || city == "") {
        alert("Please fill out the city field");
        return false;
    } else if (email == null || email == "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    } else if (Phonenumber == null || Phonenumber == "") {
        alert("Please fill out the phone number field");
        return false;
    } else if (address == null || address == "") {
        alert("Please fill out the address field");
        return false;
    }

    return true;
}