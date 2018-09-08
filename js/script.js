function openPage(pageName, elmnt) {

    var i, content, tablinks, dots;
    content = document.getElementsByClassName("content");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        dots[i].style.background = "#FFF";
    }
    document.getElementById(pageName).style.display = "block";
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++)
        tablinks[i].style.color = "#9a9a9a";
    elmnt.style.color = "white";
    document.getElementById("d"+pageName).style.background = "#1CB0F5";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
