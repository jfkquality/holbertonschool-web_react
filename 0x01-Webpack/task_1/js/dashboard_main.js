import $ from "jquery";
import _ from "lodash";

$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the studnts</p>");
$('body').append("<button>Click here to get started</button>");
updateCounter();
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");

function updateCounter() {
  let count = 0;

  $('button').on('click', _.debounce(() => {
    count += 1;
    $('#count').html(`${count} clicks on the button`)
  }, 500));
}

// let count = 0;
// function updateCounter() {
//   count = count + 1;
//   $('#count').text(`${count.toString()} clicks on the button`);
// }
// $('button').on('click(_.debounce(updateCounter)); click(_.debounce(updateCounter));
