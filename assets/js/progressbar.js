'usr strict'

let progress = document.querySelectorAll('.progress-bar')
console.log(progress);

function ariaval() {
    for (let i = 0; i < progress.length; i++) {
        let ariavalNow = progress[i].ariaValueNow
        console.log(ariavalNow);
        if (+ariavalNow > 70) {
            progress[i].style.backgroundColor = '#0000FF'
                // progress
        } else if ((+ariavalNow > 50) && (+ariavalNow <= 70)) {
            progress[i].style.backgroundColor = '#0044FF'
        } else {
            progress[i].style.backgroundColor = '#0066FF'

        }
    }
}
ariaval()