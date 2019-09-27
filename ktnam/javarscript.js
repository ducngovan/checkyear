function getYear() {
    let year, text;
    year = parseInt(document.getElementById('year').value);
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    // // alert( year+" la nam nhuan ");
    //     text = document.write(year+ " la nam nhuan");
    // }else {
    //     // alert(year+ " khong phai nam nhuan ");
    //     document.write((year+ " ko nhuan"));
    // }
    text = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? year + " la nam nhuan" : year + " ko nhuan";
    document.getElementById('output').innerHTML = text;


}