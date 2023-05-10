function test(input) {

    let index = 0;
    let username = input[index];
    index++;
    let command = input[index];
    index++;

    let pass = "";
    let count = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }

    while (command != pass) {
        count++;
        if (count === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");

        command = input[index];
        index++;
    }

    if (command === pass) {
        console.log(`User ${username} logged in.`);
    }

}
test(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])