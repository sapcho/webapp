//add class responsive to main div
function myFunction() {
    document.getElementsByClassName("top")[0].classList.toggle("responsive");
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}

/*document.getElementById("myDropdown").classList.toggle("show");

// Close the dropdown if the user clicks outside of it
document.getElementById("test").onclick = function(event) {
    if (!event.target.matches('.nav-section')) {

        var dropdowns = document.getElementsByClassName("action-list");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}*/

var click = new Event ('myfolders');
var click = new Event ('publicfolders');


function showExternalMy() {
    console.log('hi');
    var site = document.getElementById("external-site-my");
    console.log('hi');

    site.innerHTML = '<object type="text/html" data="http://www.one.co.il" style="height: 90%";' +
        'margin="2%"></object>';
}

function showExternalPublic() {
    console.log('hi1');
    var site = document.getElementById("external-site-public");
    console.log('hi1');

    site.innerHTML = '<object type="text/html" data="http://www.sport5.co.il" style="height: 90%";' +
        'margin="2%"></object>';
}

myfolders.addEventListener('click', showExternalMy);
publicfolders.addEventListener('click', showExternalPublic);


