// JavaScript for seller dashboard

// Dummy data for seller's properties
let sellerProperties = [
    { id: 1, name: "Property A", price: 200000, bedrooms: 4, bathrooms: 3, area: "Suburb", hospitalsNearby: 2, collegesNearby: 1 },
    { id: 2, name: "Property B", price: 180000, bedrooms: 3, bathrooms: 2, area: "City Center", hospitalsNearby: 3, collegesNearby: 2 },
    { id: 3, name: "Property C", price: 220000, bedrooms: 5, bathrooms: 4, area: "Downtown", hospitalsNearby: 1, collegesNearby: 2 }
];

// Function to display seller's properties
function displaySellerProperties() {
    const sellerPropertiesContainer = document.getElementById("sellerPropertiesContainer");
    sellerPropertiesContainer.innerHTML = ""; // Clear previous content

    sellerProperties.forEach(property => {
        const propertyCard = document.createElement("div");
        propertyCard.classList.add("property-card");
        propertyCard.innerHTML = `
            <h3>${property.name}</h3>
            <p>Price: $${property.price}</p>
            <p>Bedrooms: ${property.bedrooms}</p>
            <p>Bathrooms: ${property.bathrooms}</p>
            <p>Area: ${property.area}</p>
            <p>Hospitals Nearby: ${property.hospitalsNearby}</p>
            <p>Colleges Nearby: ${property.collegesNearby}</p>
            <button onclick="editProperty(${property.id})">Edit</button>
            <button onclick="deleteProperty(${property.id})">Delete</button>
        `;
        sellerPropertiesContainer.appendChild(propertyCard);
    });
}

// Function to handle property editing
function editProperty(propertyId) {
    const propertyIndex = sellerProperties.findIndex(property => property.id === propertyId);
    if (propertyIndex !== -1) {
        const property = sellerProperties[propertyIndex];
        const newName = prompt("Enter the new name for the property:", property.name);
        const newPrice = parseInt(prompt("Enter the new price for the property:", property.price));
        const newBedrooms = parseInt(prompt("Enter the new number of bedrooms:", property.bedrooms));
        const newBathrooms = parseInt(prompt("Enter the new number of bathrooms:", property.bathrooms));
        const newArea = prompt("Enter the new area:", property.area);
        const newHospitalsNearby = parseInt(prompt("Enter the new number of hospitals nearby:", property.hospitalsNearby));
        const newCollegesNearby = parseInt(prompt("Enter the new number of colleges nearby:", property.collegesNearby));

        if (newName && !isNaN(newPrice) && !isNaN(newBedrooms) && !isNaN(newBathrooms) && newArea && !isNaN(newHospitalsNearby) && !isNaN(newCollegesNearby)) {
            sellerProperties[propertyIndex] = {
                ...property,
                name: newName,
                price: newPrice,
                bedrooms: newBedrooms,
                bathrooms: newBathrooms,
                area: newArea,
                hospitalsNearby: newHospitalsNearby,
                collegesNearby: newCollegesNearby
            };
            displaySellerProperties(); // Update the UI
            console.log("Property details updated:", sellerProperties[propertyIndex]);
        } else {
            console.error("Invalid input for property details.");
        }
    } else {
        console.error("Property not found with ID:", propertyId);
    }
}

// Function to handle property deletion
function deleteProperty(propertyId) {
    const propertyIndex = sellerProperties.findIndex(property => property.id === propertyId);
    if (propertyIndex !== -1) {
        const isConfirmed = confirm("Are you sure you want to delete this property?");
        if (isConfirmed) {
            sellerProperties.splice(propertyIndex, 1); // Remove the property from the array
            displaySellerProperties(); // Update the UI
            console.log("Property deleted with ID:", propertyId);
        }
    } else {
        console.error("Property not found with ID:", propertyId);
    }
}

// Display seller's properties when the page loads
window.addEventListener("DOMContentLoaded", displaySellerProperties);
