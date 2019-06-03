

/*function selected_day() {
    // var myButtonClasses = document.getElementById("btn1").classList;
    var my_Selected_day = document.getElementById("btn1").classList;
    // querySelecterAll
  
    if (my_Selected_day.contains("my-day")) {

        my_Selected_day.remove("my-day");

    } else {

        my_Selected_day.add("my-day");

    }
    if (my_Selected_day.contains("my-day-selected")) {

        my_Selected_day.remove("my-day-selected");

    } else {

        my_Selected_day.add("my-day-selected");

    }
}
*/
// document.querySelector('.week-day').addEventListener('click', my_Selected_day);

const dayCells = document.querySelectorAll( '.day-cell' )

if(dayCells.length > 0) {
    dayCells.forEach(dayCell => {
        dayCell.addEventListener('click', event => {
            event.target.classList.toggle('my-day-selected')
        })
    })
}