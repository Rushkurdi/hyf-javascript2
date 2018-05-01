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