function callback_3(i) {
    console.log(i + " is divisible by 3")
}

function callback_5(i) {
    console.log(i + " is divisible by 5")
}

function threeFive(startValue, endValue, callback3, callback5) {
    var myArr3 = [];
    var myArr5 = [];
    for (var i = startValue; i <= endValue; i++) {
        if (i % 3 == 0) {
            callback3(i);
            myArr3.push(i);
        }
        if (i % 5 == 0) {
            callback5(i);
            myArr5.push(i);
        }
    }
    console.log(myArr3, myArr5);
}
let div35 = threeFive(10, 15, callback_3, callback_5);
console.log(div35);