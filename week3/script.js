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




-- -- -- -- -- -- -- -- -- -- -- -
var arr2d = [
    [1, 2],
    [3, 4],
    [5, 6]
]
var product = [];
for (var i = 0; i < arr2d.length; i++) {
    for (var x = 0; x < arr2d[i].length; x++) {
        product += arr2d[i][x];
    }
    console.log(product);
};


-- -- -- -- -- -- -

function repeatStringNumTimes(str, num) {

    var strRepeated = "";

    for (var i = 0; i < num; i++) {
        strRepeated += str;
    }

    return strRepeated;
}

repeatStringNumTimes("abc", 3);


function repeatStringNumTimes(str, num) {

    var strRepeated = "";
    var i = 0;
    while (i < num) {
        strRepeated += str;
        i++;
    }

    return strRepeated;
}

//test
repeatStringNumTimes("abc", 3);


function repeatStringNumTimes(str, num) {

    var strRepeated = "";
    var i = 0;
    do {
        strRepeated += str;
        i++;
    }
    while (i < num);
    return strRepeated;
}

//test
repeatStringNumTimes("abc", 3);