// Traigo los arrays de brands, pieces y titles desde el LS
let brands = JSON.parse(localStorage.getItem("brands"))
let pieces = JSON.parse(localStorage.getItem("pieces"))
const titles = ["Mountain View", "Cityscape", "Sunset Beach", "Ocean Dream"];

// List of Latin American countries for nationality dropdown
const latinAmericanCountries = [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", 
    "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala", 
    "Honduras", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", 
    "Uruguay", "Venezuela"
];

// Populate nationality dropdown
const nationalityDropdown = document.getElementById("nationality");
latinAmericanCountries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    nationalityDropdown.appendChild(option);
});

// Populate brand, pieces, and title dropdowns
function populateDropdown(dropdownId, valuesArray) {
    const dropdown = document.getElementById(dropdownId);
    valuesArray.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        dropdown.appendChild(option);
    });
}

// Populate the Collection form dropdowns
populateDropdown("brand", brands);
populateDropdown("pieces", pieces);
populateDropdown("title", titles);

// Handle Profile form submission
document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const instagram = document.getElementById("instagram").value;
    const nationality = document.getElementById("nationality").value;

    console.log("Profile Data: ", { name, username, instagram, nationality });
    alert("Profile saved successfully!");
});

// Handle Collection form submission
document.getElementById("collection-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const brand = document.getElementById("brand").value;
    const pieces = document.getElementById("pieces").value;
    const title = document.getElementById("title").value;

    console.log("New Puzzle Added: ", { brand, pieces, title });
    alert("New puzzle added to collection!");
});
