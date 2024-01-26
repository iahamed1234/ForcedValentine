// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Call the function to create and display popup
    createValentineModal();

    // Create and display the modal
    function createValentineModal() {
        // Create modal and its elements
        var modal = document.createElement("div");
        var modalContent = document.createElement("div");
        var text = document.createElement("p");
        var yesBtn = document.createElement("button");
        var noBtn = document.createElement("button");

        // Set attributes and styles
        setupModal(modal, modalContent, text, yesBtn, noBtn);
        modalContent.appendChild(text);
        modalContent.appendChild(yesBtn);
        modalContent.appendChild(noBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    // Function to set attributes and styles
    function setupModal(modal, modalContent, text, yesBtn, noBtn) {
        // Modal styles
    modal.setAttribute("id", "valentineModal");
        Object.assign(modal.style, {
            display: "block", position: "fixed", left: "0", top: "0",
            width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", zIndex: "1"
        });

        // Popup content styles with transparent background
        Object.assign(modalContent.style, {
            backgroundColor: "transparent", // Make background transparent
            margin: "15% auto", padding: "0px",
            border: "1px solid #888", width: "30%", height: "30%",
            textAlign: "center", backgroundImage: "url('images/modal-background.jpg')",
            backgroundSize: "contain", backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        });
        
        // Create a text background div
        var textBackground = document.createElement("div");
        Object.assign(textBackground.style, {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "10px",
            borderRadius: "10px"
        });

    // Text content style
    text.textContent = "Will you be my Valentine?";
    Object.assign(text.style, {
        fontSize: "30px",
        color: "white",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
    });

    textBackground.appendChild(text);
    modalContent.appendChild(textBackground);
        
        // Yes button
        yesBtn.textContent = "Yes";
        Object.assign(yesBtn.style, {
            backgroundColor: "pink", // Set button color
            color: "white", // Set text color
            fontSize: "20px", // Font
            padding: "15px 20px", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer",
            margin: "10px"
        });
        yesBtn.onmouseover = function() {
            this.style.backgroundColor = "#ff69b4"; // Highlight color on hover
        };
        yesBtn.onmouseout = function() {
            this.style.backgroundColor = "pink"; // Original color
        };
        yesBtn.addEventListener('click', function() {
            text.textContent = "Congratulations! Everyone deserves better but YOU deserve the best... that’s why you have me.";
            modalContent.removeChild(yesBtn);
            modalContent.removeChild(noBtn);
        });

        // No button
        noBtn.textContent = "No";
        Object.assign(noBtn.style, {
            backgroundColor: "pink", // Set button background color to pink
            color: "white", // Set text color
            fontSize: "20px", // Font Size
            padding: "15px 20px", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer", 
            position: "relative" 
        });
        noBtn.style.cursor = "pointer";
        noBtn.onmouseover = function() {
            var newX = Math.random() * (window.innerWidth - this.clientWidth);
            var newY = Math.random() * (window.innerHeight - this.clientHeight);
            this.style.position = "absolute";
            this.style.left = newX + 'px';
            this.style.top = newY + 'px';
        };
        // Popup content style
    Object.assign(modalContent.style, {
        backgroundColor: "#fefefe",
        margin: "15% auto",
        padding: "0px",
        border: "1px solid #888",
        width: "30%",
        height: "30%",
        textAlign: "center",
        backgroundImage: "url('images/dogcat.jp2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    });
    }
});
