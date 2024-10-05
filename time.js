
// function getTimeString(time){
//     const hour = parseInt(time / 3600);
//     const day =parseInt(hour / 24);
//     let remainingSecond = time % 3600;
//     const minute = parseInt(remainingSecond % 60);
//     remainingSecond = remainingSecond % 60;
//     return `${day} day ${hour} hrs ${minute} min ${remainingSecond} sec`
// }

// console.log(getTimeString(21000123));

// function getTimeString(time) {
//     const secondsInMinute = 60;
//     const secondsInHour = 3600;
//     const secondsInDay = 86400;
//     //const secondsInMonth = 30 * secondsInDay;

//     //const month = parseInt(time / secondsInMonth);
//     //let remainingSecond = time % secondsInMonth;

//     const day = parseInt(remainingSecond / secondsInDay);
//     remainingSecond = remainingSecond % secondsInDay;

//     const hour = parseInt(remainingSecond / secondsInHour);
//     remainingSecond = remainingSecond % secondsInHour;

//     const minute = parseInt(remainingSecond / secondsInMinute);
//     remainingSecond = remainingSecond % secondsInMinute;

//     return `${day} days ${hour} hrs ${minute} min ${remainingSecond} sec`;
// }

function getTimeString(time) {
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;

    const day = parseInt(time / secondsInDay);
    let remainingSecond = time % secondsInDay;

    const hour = parseInt(remainingSecond / secondsInHour);
    remainingSecond = remainingSecond % secondsInHour;

    const minute = parseInt(remainingSecond / secondsInMinute);
    remainingSecond = remainingSecond % secondsInMinute;

    return `${day} days ${hour} hrs ${minute} min ${remainingSecond} sec`;
}

console.log(getTimeString(1201234));
