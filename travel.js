document.getElementById('itinerary-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    let activitiesList = document.querySelectorAll('.activity-item');
    let activities = [];
    activitiesList.forEach(function (activity) {
        activities.push(activity.textContent);
    });

    displayItinerary(destination, startDate, endDate, activities);

    // Reset the form
    document.getElementById('itinerary-form').reset();
    document.getElementById('activity-list').innerHTML = '';
});

document.getElementById('add-activity').addEventListener('click', function () {
    const activityInput = document.getElementById('activity');
    const activity = activityInput.value;

    if (activity !== "") {
        let activityList = document.getElementById('activity-list');
        let listItem = document.createElement('li');
        listItem.textContent = activity;
        listItem.classList.add('activity-item');
        activityList.appendChild(listItem);
        activityInput.value = '';
    }
});

function displayItinerary(destination, startDate, endDate, activities) {
    const itineraryDisplay = document.getElementById('itinerary-display');
    itineraryDisplay.innerHTML = `
        <h3>Destination: ${destination}</h3>
        <p>Start Date: ${startDate}</p>
        <p>End Date: ${endDate}</p>
        <h4>Activities:</h4>
        <ul>
            ${activities.map(activity => `<li>${activity}</li>`).join('')}
        </ul>
    `;
}
