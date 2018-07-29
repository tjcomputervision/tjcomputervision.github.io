function openPage(pageName, elmnt) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++)
        tabcontent[i].style.display = "none";
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "white";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "white";
    elmnt.style.color = "#0A2E5E";
}

document.getElementById("defaultOpen").click();
