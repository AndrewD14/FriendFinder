// Capture the form inputs
$("#submit").on("click", function(event) {
    event.preventDefault();

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
      var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("input:radio[name=q1]:checked").val(),
          $("input:radio[name=q2]:checked").val(),
          $("input:radio[name=q3]:checked").val(),
          $("input:radio[name=q4]:checked").val(),
          $("input:radio[name=q5]:checked").val(),
          $("input:radio[name=q6]:checked").val(),
          $("input:radio[name=q7]:checked").val(),
          $("input:radio[name=q8]:checked").val(),
          $("input:radio[name=q9]:checked").val(),
          $("input:radio[name=q10]:checked").val()
        ]
      };

      // AJAX post the data to the friends API.
      $.post("/api/friends", userData, function(data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });

// Form validation
function validateForm() {
  var isValid = true;
  $(".form-control").each(function() {
      if ($(this).val() === "") {
      isValid = false;
      }
  });

  //loops through the radio elements
  $(".radio").each(function() {
        //grabs the name of each radio button group
        var name = $(this).children().children().attr("name");

        //if nothing was selected, set valid to false
        if ($("input:radio[name=" + name + "]:checked").val() === "") {
            isValid = false;
        }
    });
    return isValid;
}