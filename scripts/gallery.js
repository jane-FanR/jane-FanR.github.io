document.addEventListener("DOMContentLoaded", function () {
    //references
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    //references all elements
    var thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.onclick = function () {
            //display the modal
            modal.style.display = "block";
            modalContent.style.backgroundImage = "url('" + this.src + "')";
            captionText.innerHTML = this.alt;
        };
    });

    //close button
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };
    //second option to close
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
