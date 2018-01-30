function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="' + r.html_url + '">Go to site</a></li>').join('')}</ul>`
    document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  event.preventDefault();
  var username = document.getElementById("username").value;

  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", "https://api.github.com/users/" + username + "/repos");
  req.send();
}
