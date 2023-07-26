function fancyBarcodes(input) {

    const pattern = /@#+[A-Z]{1}[A-Za-z\d]{4,}[A-Z]@#+/g;
    const digitPatt = /[0-9]/g;
    const barcodeCounts = input.shift();


    while ((currBarcode = input.shift()) !== undefined) {
        const isValid = currBarcode.match(pattern);
        let productGroup = '';

        if (isValid) {
            while ((hasDigit = digitPatt.exec(isValid[0])) !== null) {
                productGroup += hasDigit;
            }

            if (productGroup.length === 0) {
                productGroup = '00'
            }

            console.log(`Product group: ${productGroup}`);

        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])

    ;