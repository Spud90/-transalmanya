// Toggle service details display when a service is clicked
function toggleServiceDetails(serviceId) {
    const serviceDetails = document.getElementById(serviceId);
    if (serviceDetails.style.display === "block") {
        serviceDetails.style.display = "none";
    } else {
        serviceDetails.style.display = "block";
    }
}
