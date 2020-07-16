$(document).ready(() => {
  const $newItemInput = $("#Add-city"); //the city input
  const $todoContainer = $(".todo-container"); // where to put the list...have to figure it out

  $(document).on("click", "#bucketlist", insertPost);

  let posts = [];

  getPost();
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $("#myEditor").summernote({
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
  function initializeRows() {
    $todoContainer.empty();
    const rowsToAdd = [];
    for (let i = 0; i < posts.length; i++) {
      rowsToAdd.push(createNewRow(posts[i]));
    }
    $todoContainer.prepend(rowsToAdd);
  }

  // This function grabs posts from the database and updates the view
  function getPost() {
    $.get("/api/posts", data => {
      console.log(data);

      posts = data; //push the data to the array
      initializeRows();
    });
  }

  function createNewRow(post) {
    const $newInputRow = $(
      [
        "<li class='list-group-item'>",
        "<span>",
        post.city,
        "</span>",
        "<i class='fas fa-edit ml-auto' data-toggle='modal' data-target='#newPostModal'></i></li>"
      ].join("")
    );

    $newInputRow.data("post", post);

    return $newInputRow;
  }

  function insertPost(event) {
    event.preventDefault();
    const post = {
      city: $newItemInput.val().trim()
    };

    $.post("/api/posts", post, getPost);
    $newItemInput.val("");
  }
});
