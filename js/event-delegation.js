
document.getElementById("list-items").addEventListener('click', (e) => {
    const message = `The element with the class '${e.target.className}' was clicked.`;
    console.log(message);
});