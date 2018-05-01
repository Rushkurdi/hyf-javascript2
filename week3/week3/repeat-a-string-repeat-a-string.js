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


repeatStringNumTimes("abc", 3);