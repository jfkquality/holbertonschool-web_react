import $ from "jquery";

// import jquery and add three different paragraphs to the page body

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<p>Copyright - Holberton School</p>');


});
