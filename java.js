function myFunction(){
    var year;
    year = document.getElementById("leap").value;
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
        alert (year + " is a leap year");
    }
    else
    {
        alert (year + " is not a leap year");
    }
}
// Every year divisible by 4 is a leap year.
// But every year divisible by 100 is NOT a leap year
// Unless the year is also divisible by 400, then it is still a leap year.