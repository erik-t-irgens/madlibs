$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];


/*
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
*/

  for (var index = 0; index < blanks.length; index += 1) {
    var userInput = $("input#" + blank).val();
    $("." + blank).text(userInput);
  }

    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });
/*
    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
*/
    $("#story").show();

    event.preventDefault();
  });
});
