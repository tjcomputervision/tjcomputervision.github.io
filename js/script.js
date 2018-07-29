function openPage(pageName, elmnt) {

    var i, content, tablinks;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++)
        content[i].style.display = "none";
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "white";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "white";
    elmnt.style.color = "#0A2E5E";
}
