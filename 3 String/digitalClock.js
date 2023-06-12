
// Digital Clock
// You are building a logic for a clock that requires you convert absolute time in minutes into a format supported by a digital clock. See examples below.


// 125 minutes can be displayed as 2:05

// 155 minutes can be displayed as 2:35


// (You can assume the maximum value of minutes will be less than 24 X 60)

// Input

// Input is a single integer.

// 1180
// Output

// Output is a string denoting the digital clock time.

// 19:40


function convertToDigitalTime(min){
    let time = ''
    let hour =  String(Math.floor(min/60))
    let minutes = String(Math.floor(min%60))
    hour = hour.length==1?"0"+hour:hour
    minutes = minutes.length==1?"0"+minutes:minutes

    return hour+":"+minutes
}
console.log(convertToDigitalTime(155))