function getCommits(element) {
  const repo = element.dataset.repo;
  const user = element.dataset.user;
  const req = new XMLHttpRequest();
  //req.addEventListener("load", showCommits);
  req.open("GET", 'https://api.github.com/repos/' + user + '/' + repo + '/commits');
  req.send();
}

function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="' + r.html_url + '">Go to Github</a> <a href="#" data-repo="' + r.name + '" data-user="' + r.owner.login + '" onclick="getCommits(this)">Show Commits</a></li>').join('')}</ul>`
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
