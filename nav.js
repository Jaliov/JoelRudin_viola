
document.querySelector(".nav").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
<a class="navbar-brand" href="#">Joel Rudin</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <a class="nav-item nav-link active" aria-current="page" href="index.html">Home</a>
    <a class="nav-item nav-link" href="Joelbio.html">About Joel</a>
    <a class="nav-item nav-link" href="violaclips.html">Viola Tracks</a>
    <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
  </div>
</div>
</div>
</nav>
</nav>
`

let summary = document.querySelectorAll("summary");
for (let i = 0; i < summary.length; i++) {
    summary[i].innerHTML += `About this track`;
}
