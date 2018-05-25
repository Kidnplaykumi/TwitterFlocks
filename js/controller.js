const modal = $('#modal-container');
const tweetbtn = $('#tweetbtn');
const composeTweeetDropDown = $('.dropdown-toggle');

modal.hide();

$('#close-modal-button').on('click', () => {
  modal.fadeOut('fast');
});

tweetbtn.on('click', () => {
  modal.fadeIn('fast');
});

composeTweeetDropDown.on('click', () => {
  $('#modal-tweet-compose-dropdown').toggle();
});
