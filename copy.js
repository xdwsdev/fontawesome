document.addEventListener("DOMContentLoaded", function() {
    var copyLink = document.getElementById("copyLink");

    copyLink.addEventListener("click", function(event) {
        event.preventDefault();

        var textToCopy = copyLink.innerText;

        navigator.clipboard.writeText(textToCopy).then(function() {
            console.log("Text copied to clipboard:", textToCopy);
            alert("URL copied to clipboard: " + textToCopy);
        }).catch(function(error) {
            console.error("Unable to copy text to clipboard:", error);
        });
    });
});