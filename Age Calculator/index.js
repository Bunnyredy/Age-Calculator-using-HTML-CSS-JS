var userinp = document.querySelector(".dt");
userinp.max = new Date().toISOString().split("T")[0];  //returns the date, time, month, day, year
var result = document.querySelector(".result");
var butt = document.querySelector(".btn");

butt.addEventListener("click", function () {
     calculateAge();
})


function calculateAge() {
    var dob = new Date(userinp.value);         //gets the date, month, year which is given by user
    var d1 = dob.getDate();                    //gets the date of the user input
    var m1 = dob.getMonth() + 1;
    var y1 = dob.getFullYear();

    var today = new Date();                   //gets the present date, month, year, day, time 

    var d2 = today.getDate();
    var m2 = today.getMonth() + 1;
    var y2 = today.getFullYear();

    var d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getdaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        y3--;
        m3 = 11;
    }

    result.innerHTML = "You are " + y3 + "years, " + m3 + "months and " + d3 + "days old";

}

function getdaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();     // returns the no. of days in last month
}
