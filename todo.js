var object = {
  username: "admin",
  password: "12345",
};
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == object.username && password == object.password) {
    console.log(username, password);
    return true;
  } else {
    alert("invalid username or password");
    return false;
  }
}
// fetch
// async function todo(url) {
//   const response = await fetch(url);
//   const data = response.json();
//   console.log(data);
// }
// todo("https://jsonplaceholder.typicode.com/todos");
function todo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // var jpeople = response.people;
      var output = "";
      for (var i = 0; i < response.length; i++) {
        output += "<li>" + response[i].title + "</li>";
      }
      document.getElementById("demo").innerHTML = output;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}
