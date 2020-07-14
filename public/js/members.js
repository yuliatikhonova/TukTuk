$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

function getPost() {
  let bucketlist = document.getElementById("bucketlist").innerHTML +=
  document.getElementById("bucketlist").appendChild(li);
    <ul id="bucketlist"></ul>
}
<input type="text" name="" id="search-history"></input>


<div><button onclick="addToList()" type="button" name="button" id="bucketlist">add</button></div>                                                                         
