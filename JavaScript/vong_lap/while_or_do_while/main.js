var myArray = [1, 2, 3, 4, 5];
var i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

var i = 0;
do{
    console.log(myArray[i]);
    i++;
}while(i < 10);

var i = 0;
do{
    console.log(myArray[i]);
    i++;
    if(i == 3) continue;
}while(i < 10);

var i = 0;
do{
    console.log(myArray[i]);
    i++;
    if(i == 3) break;
}while(i < 10);

var mang2chieu = [[1, 2], [3, 4], [5, 6]];
for (var i = 0; i < mang2chieu.length; i++) {
    for (var j = 0; j < mang2chieu[i].length; j++) {
        console.log(mang2chieu[i][j]);
    }
}
