var targetDiv = document.getElementsByClassName("column2")

function HideButton() {
    console.log("Button pressed");
    console.log(targetDiv);

    if (targetDiv[0].style.display === "none") {
        targetDiv[0].style.display = "block";
    } else {
        targetDiv[0].style.display = "none";
    }
}

