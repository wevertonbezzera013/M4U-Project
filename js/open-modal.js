document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".sidenav");
	var instances = M.Sidenav.init(elems, Option);
});

document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".modal");
	var instances = M.Modal.init(elems, Option);
});
