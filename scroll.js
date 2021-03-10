$('#pointer-down').click(() => {
  $('body').addClass('stop-scrolling');
  $('body').moveDown();
});

$('#pointer-up').click(() => {
  $('body').addClass('stop-scrolling');
  $('body').moveDown();
});

$(document).ready(function() {
  $('body').onepage_scroll({
    sectionContainer: 'section',
    beforeMove: $('body').addClass('stop-scrolling'),
    pagination: false,
    animationTime: 1000,
    easing: 'ease-in-out',
    keyboard: true
  });
});
