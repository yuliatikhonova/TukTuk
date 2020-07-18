$(document).ready(() => {
  const $newItemInput = $("#Add-city"); //the city input

  $(document).on("click", "#bucketlist", insertPost);

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $("#blogPost").summernote({
    height: 420,
    toolbar: [
      // [groupName, [list of button]]
      ["style", ["bold", "italic", "underline", "clear"]],
      ["font", ["strikethrough", "superscript", "subscript"]],
      ["fontsize", ["fontsize"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["height", ["height"]]
    ]
  });

  //=============================================================================================== Adding the city on the list
  //adding the rows/list of data

  // This function grabs posts from the database and updates the view
  function getPost() {
    location.reload();
  }

  function insertPost(event) {
    event.preventDefault();
    const post = {
      city: $newItemInput.val().trim()
    };
    $.post("/api/post", post, getPost);
    $newItemInput.val("");
  }
});
