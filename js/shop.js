
//log-sign-in
var btn = document.getElementById("btn");
var media = document.getElementById("media");


function menu() {
  media.classList.toggle('active');
  btn.classList.toggle("fa-xmark");
};

var close = document.getElementById("close-btn");
var login = document.getElementById("login");
var sign = document.getElementById("sign");
var form = document.getElementById("form");
var blur = document.getElementById("blur");


function registreLog() {
  form.style.display = "flex";
  login.style.display = "flex"
  sign.style.display = "none"
  blur.style.display = "block"
}

function registreSign() {
  form.style.display = "flex";
  login.style.display = "none"
  sign.style.display = "flex"
  blur.style.display = "block"
}

function closeForm() {
  form.style.display = "none";
  blur.style.display = "none"
}


//input-teeeeeeest

function validateForm() {
  // Get the form and input elements
  var signForm = document.getElementById("sign");
  var email = document.getElementById("email").value;
  var newPassword = document.getElementById("new-password").value;
  var verifyPassword = document.getElementById("verify-password").value;

  // Check if the email is in a valid format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    
  }

  // Check if the password is strong
  if (newPassword.length < 8) {
    alert("Weak password");
    
  }

  // Check if the new password and verify password match
  if (newPassword !== verifyPassword) {
    alert("Passwords do not match");
    
  }

 
  else{
    return true;
	} 
}





//containersssssssssss
document.addEventListener("DOMContentLoaded", function () {
    const typeList = document.getElementById("typeList");
    const mainContent = document.getElementById("mainContent");
    const cartButton = document.getElementById("cartButton");

 //arrays of image sources, descriptions, and prices
    const typesWithDetails = [
        { 
            name: "Art Premier", 
            images: [
                "../Image/shop-pics/AP.jpg",
                "../Image/shop-pics/AP1.jpg",
                "../Image/shop-pics/AP2.jpg",
                "../Image/shop-pics/AP3.jpg",
                "../Image/shop-pics/AP4.jpg",
                "../Image/shop-pics/AP5.jpg"
            ], 
            descriptions: [
                "Serene Symphony",
                "Whispers of the Wind",
                "Enchanted Twilight",
                "Celestial Harmony",
                "Moonlit Dreams",
                "Vibrant Echoes"
            ],
            prices: [100, 150, 200, 250, 300, 350]
        },
        { 
            name: "Abstrait", 
            images: [
                "../Image/shop-pics/AB.jpg",
                "../Image/shop-pics/AB1.jpg",
                "../Image/shop-pics/AB2.jpg",
                "../Image/shop-pics/AB3.jpg",
                "../Image/shop-pics/AB4.jpg",
                "../Image/shop-pics/AB5.jpg"
            ], 
            descriptions: [
                "Ethereal Essence",
                "Dusk Reverie",	
                "Azure Serenity",
                "Tranquil Mirage",
                "Mystical Cascade" ,
                "Velvet Horizon"],
            prices: [100, 150, 200, 250, 300, 350]
        },
        { 
            name: "Art brut", 
            images: [
                "../Image/shop-pics/Abr.jpg",
                "../Image/shop-pics/Abr1.jpg",
                "../Image/shop-pics/Abr2.jpg",
                "../Image/shop-pics/Abr3.jpg",
                "../Image/shop-pics/Abr4.jpg",
                "../Image/shop-pics/Abr5.jpg"
            ], 
            descriptions: [
                "Ethereal Essence",
                "Dusk Reverie",	
                "Azure Serenity",
                "Tranquil Mirage",
                "Mystical Cascade" ,
                "Velvet Horizon"],
            prices: [100, 150, 200, 250, 300, 350]
        },
        { 
            name: "Art conceptuel", 
            images: [
                "../Image/shop-pics/AC.jpg",
                "../Image/shop-pics/AC1.jpg",
                "../Image/shop-pics/AC2.jpg",
                "../Image/shop-pics/AC3.jpg",
                "../Image/shop-pics/AC4.jpg",
                "../Image/shop-pics/AC5.jpg"
            ], 
            descriptions: [
                "Ethereal Essence",
                "Dusk Reverie",	
                "Azure Serenity",
                "Tranquil Mirage",
                "Mystical Cascade" ,
                "Velvet Horizon"],
            prices: [100, 150, 200, 250, 300, 350]
        },
        { 
            name: "Art naïf", 
            images: [
                "../Image/shop-pics/AN.jpg",
                "../Image/shop-pics/AN1.jpg",
                "../Image/shop-pics/AN2.jpg",
                "../Image/shop-pics/AN3.jpg",
                "../Image/shop-pics/AN4.jpg",
                "../Image/shop-pics/AN5.jpg"
            ], 
            descriptions: [
                "Ethereal Essence",
                "Dusk Reverie",	
                "Azure Serenity",
                "Tranquil Mirage",
                "Mystical Cascade" ,
                "Velvet Horizon"],
            prices: [100, 150, 200, 250, 300, 350]
        },
        { 
            name: "Art oriental", 
            images: [
                "../Image/shop-pics/AO.jpg",
                "../Image/shop-pics/AO1.jpg",
                "../Image/shop-pics/AO2.jpg",
                "../Image/shop-pics/AO3.jpg",
                "../Image/shop-pics/AO4.jpg",
                "../Image/shop-pics/AO5.jpg"
            ], 
            descriptions: [
                "Ethereal Essence",
                "Dusk Reverie",	
                "Azure Serenity",
                "Tranquil Mirage",
                "Mystical Cascade" ,
                "Velvet Horizon"],
            prices: [100, 150, 200, 250, 300, 350]
        },

    ];

    

//update the main content based on selected type
    function updateMainContent(selectedType) {
        // Find the selected type in the array
        const selectedTypeData = typesWithDetails.find(typeData => typeData.name === selectedType);

        if (selectedTypeData) {
            // Display the images and name of the selected type
            const imageElements = selectedTypeData.images.map((imageSrc, index) => {
                const itemContainer = document.createElement("div");
                itemContainer.classList.add("item-container");

                itemContainer.innerHTML = `
                    <img src="${imageSrc}" alt="${selectedTypeData.name}" data-index="${index}" class="item-image">
                    <div class="details-container">
                        <h3>${selectedTypeData.name}</h3>
                        <p>${selectedTypeData.descriptions[index]}</p>
                        <p>Price: $${selectedTypeData.prices[index]}</p>
                        <div class="button-container">
                            <button onclick="addToCart('${selectedTypeData.name}', '${selectedTypeData.descriptions[index]}', ${selectedTypeData.prices[index]})">Add to Cart</button>
                            <button onclick="showDetailsWindow('${selectedTypeData.name}', ${index})">Details</button>
                        </div>
                    </div>
                `;
                return itemContainer;
            });

            // Clear existing content in mainContent
            mainContent.innerHTML = "";

            // Append the image elements to mainContent
            imageElements.forEach(itemContainer => {
                mainContent.appendChild(itemContainer);
            });
        }
    }



  // Populate the sidebar with types
    typesWithDetails.forEach(typeData => {
        const listItem = document.createElement("li");
        listItem.textContent = typeData.name;
        listItem.addEventListener("click", () => updateMainContent(typeData.name));
        typeList.appendChild(listItem);
    });

    // Initialize the main content with default values or a default type
    updateMainContent(typesWithDetails[0].name);
});




// Function to add an item to the cart
    function addToCart(name, description, price) {
        alert(`Added to cart:\n${name}\nDescription: ${description}\nPrice: $${price}`);
    }



// Function to scroll back to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show or hide the back-to-top button based on scroll position
window.onscroll = function() {
  var backToTopButton = document.getElementById("back-to-top-btn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}


