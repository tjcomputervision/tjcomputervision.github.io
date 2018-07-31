function openPage(pageName, elmnt) {

    var i, content, tablinks;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++)
        content[i].style.display = "none";
    document.getElementById(pageName).style.display = "block";
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++)
        tablinks[i].style.color = "#9A9A9A";
    elmnt.style.color = "white";
}
