document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('guestBookForm').onsubmit = function (event) {
        let valid = true;

        let fName = document.getElementById('fName').value.trim();
        let lName = document.getElementById('lName').value.trim();
        let email = document.getElementById('email').value.trim();
        let linkedIn = document.getElementById('linkedIn').value.trim();
        let where = document.getElementById('where').value;
        let addToList = document.getElementById('add-to-list').checked;

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let linkedInPattern = /^https:\/\/linkedin\.com\/in\//;

        clearErrors();

        if (fName === "") {
            document.getElementById('fNameError').style.display = 'block';
            valid = false;
        }

        if (lName === "") {
            document.getElementById('lNameError').style.display = 'block';
            valid = false;
        }

        if (addToList === true) {
            if (email === "") {
                document.getElementById('emailError').style.display = 'block';
                valid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                valid = false;
            }
        }


        if (linkedIn !== "" && !linkedInPattern.test(linkedIn)) {
            document.getElementById('linkedInError').style.display = 'block';
            valid = false;
        }

        if (where === "") { 
            document.getElementById('whereError').style.display = 'block';
            valid = false;
        }
        
        return valid;
    };

    function clearErrors() {
        document.getElementById('fNameError').style.display = 'none';
        document.getElementById('lNameError').style.display = 'none';
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('linkedInError').style.display = 'none';
        document.getElementById('whereError').style.display = 'none';
    }
});
