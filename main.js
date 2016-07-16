
var click = new Event ('myfolders');
var click = new Event ('publicfolders');


function showExternal() {
    console.log('hi');
    var site = document.getElementById("external-site-my");
    console.log('hi');

    site.innerHTML = '<object type="text/html" data="http://www.one.co.il" ></object>';
}

myfolders.addEventListener('click', showExternal);


function showExternal() {
    console.log('hi1');
    var site = document.getElementById("external-site-public");
    console.log('hi1');

    site.innerHTML = '<object type="text/html" data="http://www.sport5.co.il" ></object>';
}

myfolders.addEventListener('click', showExternal);
publicfolders.addEventListener('click', showExternal);


