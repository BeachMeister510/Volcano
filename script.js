// ==========================
// Volcano Shape Dialog
// ==========================
function showShape(title, answer) {

    const dialog = document.getElementById("volcanoShape");

    document.getElementById("shapeTitle").textContent = title;
    document.getElementById("shapeAnswer").textContent = answer;

    dialog.showModal();
}


// ==========================
// Rock Classification Dialog
// ==========================
function showRock(title, answer) {

    const dialog = document.getElementById("classification");

    document.getElementById("rockTitle").textContent = title;
    document.getElementById("rockAnswer").textContent = answer;

    dialog.showModal();
}