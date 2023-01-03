function showtext() {

    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var stagename = document.getElementById('sname').value;
    var streamingPlatform = document.getElementById('streamingPlatform').value;
    var link = document.getElementById('link').value;

    document.getElementById("show").innerHTML = firstname + "<br>" + lastname + "<br>" + stagename + "<br>" + streamingPlatform + "<br>" + link;
}