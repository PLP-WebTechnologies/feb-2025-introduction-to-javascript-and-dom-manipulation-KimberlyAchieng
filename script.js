document.addEventListener("DOMContentLoaded", function() {
    // Change text content dynamically
    const changeTextBtn = document.getElementById("changeTextBtn");
    changeTextBtn.addEventListener("click", function() {
        const header = document.getElementById("header");
        const description = document.getElementById("description");

        // Change text of the header and description
        header.textContent = "Text has been changed!";
        description.textContent = "This is the updated description text!";
        
        // Modify CSS styles dynamically
        header.style.color = "darkgreen";
        header.style.fontFamily = "Arial, sans-serif";
    });

    // Add a new element dynamically
    const addElementBtn = document.getElementById("addElementBtn");
    addElementBtn.addEventListener("click", function() {
        const newDiv = document.createElement("div");
        newDiv.textContent = "This is a newly added element!";
        newDiv.style.backgroundColor = "darkgreen";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.border = "2px solid green";
        

        const container = document.getElementById("container");
        container.appendChild(newDiv);
    });

    // Remove an element dynamically
    const removeElementBtn = document.getElementById("removeElementBtn");
    removeElementBtn.addEventListener("click", function() {
        const container = document.getElementById("container");
        if (container.children.length > 0) {
            container.removeChild(container.lastChild);
        } else {
            alert("No elements to remove!");
        }
    });
});
