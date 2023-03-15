
document.querySelector(".nav").innerHTML = `
<!-- <a class="navbar-brand" href="#">Navbar</a> -->
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <a class="nav-item nav-link active" href="index.html">Home</a>
    <a class="nav-item nav-link" href="Joelbio.html">About Joel</a>
    <a class="nav-item nav-link" href="violaclips.html">Viola Tracks</a>
    <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
  </div>
</div>
</nav>`

let summary = document.querySelectorAll("summary");
for (let i = 0; i < summary.length; i++) {
    summary[i].innerHTML += `About this track`;
}
