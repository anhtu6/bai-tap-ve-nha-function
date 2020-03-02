let arr= [1,8,2,5,6,7,6];
function findMaxNextdoor(array) {
    if (arr.length<=2)  return document.write('Mang da cho co khong qua 2 phan tu');
    let temp = [];
    for (let i=0;i<arr.length-1;i++) {
        temp.push(arr[i]*arr[i+1]);
    }
    console.log(temp)
    let maxtemp = temp[0];
    let text = '';
    for (i=1;i<arr.length-1;i++){
        if (temp[i]>maxtemp) maxtemp =temp[i];
    }
    console.log(maxtemp)
    for (i=0;i<arr.length-1;i++){
        if (temp[i] == maxtemp) text+=i+' va '+(i+1)+', ';
    }
    return document.write('mang da cho ['+arr+']co cap phan tu tich lon nhat o vi tri '+text);
}
findMaxNextdoor(arr);