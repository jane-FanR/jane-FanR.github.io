//popup in homepage using jquery
$(function () {
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);

  $(".popup-onload").show();

  $(".bookatable").click(function() {
    setTimeout(
        function() {
           window.location.assign(""); //please place the URL of 'Book a Table' Page inside the quotation 
        },
        1000);
  });

  $(".close").click(function () {
    $(".popup-onload").hide();
    overlay.appendTo(document.body).remove();
    return false;
  });
});
