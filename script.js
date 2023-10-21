// document.addEventListener("DOMContentLoaded", function () {
//         const menuBtn = document.querySelector(".menu-btn");
//         const card123 = document.querySelector(".card123");

//         menuBtn.addEventListener("click", function () {
//             card123.style.display = "block";
//         });
//     });

//     document.addEventListener("DOMContentLoaded", function () {
//         const menuBtn = document.querySelector(".menu-btn");
//         const card123 = document.querySelector(".card123");
    
//         menuBtn.addEventListener("click", function () {
//             if (card123.style.display === "none" || card123.style.display === "") {
//                 card123.style.display = "block";
//             } else {
//                 card123.style.display = "none";
//             }
//         });
//     });

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const card123 = document.querySelector(".card123");

    menuBtn.addEventListener("click", function () {
        if (card123.style.display === "none" || card123.style.display === "") {
            card123.style.display = "block"; // Show the card123 element
        } 
        else {
            card123.style.display = "none"; // Hide the card123 element
        }
    });
});

    
    
    
    
    
