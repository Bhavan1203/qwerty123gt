// JavaScript for buyer dashboard

// Dummy data for properties
const properties = [
    { id: 1, name: "Property 1", price: 100000, bedrooms: 3, bathrooms: 2, area: "City Center", hospitalsNearby: 3, collegesNearby: 2 },
    { id: 2, name: "Property 2", price: 120000, bedrooms: 4, bathrooms: 3, area: "Suburb", hospitalsNearby: 1, collegesNearby: 1 },
    { id: 3, name: "Property 3", price: 90000, bedrooms: 2, bathrooms: 1, area: "Downtown", hospitalsNearby: 2, collegesNearby: 3 }
];

// Function to display properties
function displayProperties() {
    const propertiesContainer = document.getElementById("propertiesContainer");
    propertiesContainer.innerHTML = ""; // Clear previous content

    properties.forEach(property => {
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
            <button onclick="showSellerDetails(${property.id})">I'm Interested</button>
        `;
        propertiesContainer.appendChild(propertyCard);
    });
}

// Function to handle "I'm Interested" button click
// Function to handle "I'm Interested" button click
function showSellerDetails(propertyId) {
    // Dummy data for seller details (replace this with actual data fetching logic)
    const sellers = [
        { id: 1, name: "Seller A", email: "sellerA@example.com", phoneNumber: "1234567890" },
        { id: 2, name: "Seller B", email: "sellerB@example.com", phoneNumber: "0987654321" },
        { id: 3, name: "Seller C", email: "sellerC@example.com", phoneNumber: "5678901234" }
    ];

    // Find the property in the dummy data based on its ID
    const property = properties.find(property => property.id === propertyId);

    if (property) {
        // Find the seller based on the property's ID (assuming the seller ID matches property ID)
        const seller = sellers.find(seller => seller.id === property.id);

        if (seller) {
            // Display seller details
            alert(`Seller Name: ${seller.name}\nEmail: ${seller.email}\nPhone Number: ${seller.phoneNumber}`);
        } else {
            alert("Seller details not found for this property.");
        }
    } else {
        alert("Property details not found.");
    }
}


// Display properties when the page loads
window.addEventListener("DOMContentLoaded", displayProperties);
