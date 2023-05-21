function passValidator(pass) {

    let passLength = pass.length;

    function isPassLength() {

        if (passLength < 6 || passLength > 10) {
            return false;
        } else {
            return true;
        }
    }

    function notLettersAndDigits() {

        let isValid = false;

        for (let i = 0; i <= passLength - 1; i++) {
            let currChar = String(pass[i]);
            let passChar = currChar.charCodeAt();

            if ((passChar >= 48 && passChar <= 57) || (passChar >= 65 && passChar <= 90) || (passChar >= 97 && passChar <= 122)) {
                isValid = true;
            } else {
                isValid = false;
                return false;
            }
        }

        if (isValid) {
            return true;
        }
    }

    function atLeastTwoDigits() {

        let hasTwo = true;
        let twoDigits = 0;

        for (let i = 0; i <= passLength - 1; i++) {
            let currChar = String(pass[i]);
            let passChar = currChar.charCodeAt();

            if (passChar >= 48 && passChar <= 57) {
                twoDigits++;
            }
        }
        if (twoDigits >= 2) {
            hasTwo = true; return true;
        } else {
            hasTwo = false; return false;
        }

    }
    let isLengthPass = isPassLength();
    let isCharsValid = notLettersAndDigits();
    let hasTwoDigits = atLeastTwoDigits();


    if (isLengthPass && isCharsValid && hasTwoDigits) {
        console.log("Password is valid");
    }
    if (!isLengthPass) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isCharsValid) {
        console.log("Password must consist only of letters and digits");
    }
    if (!hasTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
}
passValidator('Pa$s$s')