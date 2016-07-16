
var click = new Event ('myfolders');
var click = new Event ('publicfolders');


function showExternalMy() {
    console.log('hi');
    var site = document.getElementById("external-site-my");
    console.log('hi');

    site.innerHTML = '<object type="text/html" data="http://www.one.co.il" ></object>';
}


function showExternalPublic() {
    console.log('hi1');
    var site = document.getElementById("external-site-public");
    console.log('hi1');

    site.innerHTML = '<object type="text/html" data="http://www.sport5.co.il" ></object>';
}

myfolders.addEventListener('click', showExternalMy);
publicfolders.addEventListener('click', showExternalPublic);


