$("#get-score").on("click", function (event) {
  event.preventDefault();
  $('#img-modal').modal({ "show": false });
  var scoreArray = [];
  var userName = $("#name-input").val().trim();
  var userPhoto = $("#photo-input").val().trim();
  var radios = $(".radio-btn");

  for (let i = 0; i < radios.length; i++) {
    const element = radios[i];
    if (element.checked) {
      scoreArray.push(parseInt(element.value));
    }
  }

  // to be used in case the dropdown is necessary to the assignment
  // $(".dropdown select").each(function () {
  //   scoreArray.push($(this).val());
  // });

  if (userName === "" || userPhoto === "" || scoreArray.length < 10) {
    $("#modal-title").html("Error:");
    $(".modal-dialog").css("max-width", "400px");
    $(".modal-body").html("Please complete all fields before submitting.");
    $('#img-modal').modal({ "show": true });
  } else {
    $(".modal-dialog").css("max-width", "60%");

    var friend = {
      name: userName,
      photo: userPhoto,
      scores: scoreArray
    }

    $.post("/api/friends", friend)
      .then(function (data) {
        console.log("suck it");
        var friendName = $("<h6>");
        var friendImg = $("<img>");
        friendName.addClass("friend-name");
        friendName.html(data.name);
        friendImg.addClass("friend-img");
        friendImg.attr("src", data.photo);
        $("#modal-title").html("Best Match:");
        $(".modal-body").html(friendName);
        $(".modal-body").append(friendImg);
        $('#img-modal').modal({ "show": true });
      });
  }
});