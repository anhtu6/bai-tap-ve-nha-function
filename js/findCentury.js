let input = parseInt(prompt('Nhap nam can kiem tra'));
function findCentury(year) {
    let n= Math.floor(year/100);
    if(year%100==0) return document.write('nam '+year+' thuoc the ki '+n);

    return document.write('nam '+year+' thuoc the ki '+(n+1))
}
findCentury(input);