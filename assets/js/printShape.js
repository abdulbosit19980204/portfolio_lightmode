'usr strict'

let progressval = document.querySelectorAll('.progress-bar')
let printShape = document.querySelectorAll('.printShape')
let skillProgressWrap = +document.querySelector('.progress-bar-wrap').clientWidth


// console.log("printShape => ",printShape);
// console.log("skilp width = ",skillProgressWrap);

function skillval() {

    for (let i = 0; i < printShape.length; i++) {
        for (let j = 0; j < progressval.length; i++) {
            let pariavalNow = +progressval[i].ariaValueNow
            let rightPosition = ((skillProgressWrap - ((skillProgressWrap * pariavalNow) / 100)) - 5)
                // console.log(rightPosition)
            if (pariavalNow > 70) {
                // printShape[i].style.backgroundColor = '#0000FF'
                printShape[i].style.backgroundColor = '#0000FF'
                printShape[i].style.right = rightPosition + "px"





            } else if ((pariavalNow > 30) && (pariavalNow <= 70)) {
                printShape[i].style.backgroundColor = '#0044FF'
                printShape[i].style.right = rightPosition + "px"
            } else {
                printShape[i].style.backgroundColor = '#0066FF'
                printShape[i].style.right = rightPosition - 100 + "px"
                    // console.log("20% kamlardiki => ", rightPosition);
            }
        }
    }



}
skillval()