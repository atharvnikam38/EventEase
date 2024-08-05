const items = [
  {
    id: 1,
    image: 'images/image1.png',
    category: 'Wedding',
    name: 'Imperial Banquets',
    description: 'Imperial Banquets, Vashi, Mumbai brings luxury to Navi Mumbai with its Vashi branch. It is ideal for hosting pre-wedding functions, wedding and reception ceremony.',
    views: 1.2,
    reviews: 6,
    bookedDates: ['2024-08-15', '2024-08-16'], // Example booked dates
    guests: 200,
    budget: 50000,
    latitude: 19.0330,
    longitude: 73.0297
  },
  {
    id: 2,
    image: 'images/image2.png',
    category: 'Birthday',
    name: 'Second Hall',
    description: 'Imperial Banquets, Vashi, Mumbai brings luxury to Navi Mumbai with its Vashi branch. It is ideal for hosting pre-wedding functions, wedding and reception ceremony.',
    views: 1.2,
    reviews: 6,
    bookedDates: ['2024-09-05', '2024-09-06'], // Example booked dates
    guests: 100,
    budget: 30000,
    latitude: 19.0760,
    longitude: 72.8777
  },
  {
    id: 3,
    image: 'images/image3.png',
    category: 'Party',
    name: 'Third Hall',
    description: 'Imperial Banquets, Vashi, Mumbai brings luxury to Navi Mumbai with its Vashi branch. It is ideal for hosting pre-wedding functions, wedding and reception ceremony.',
    views: 1.2,
    reviews: 6,
    bookedDates: ['2024-10-21', '2024-10-22'], // Example booked dates
    guests: 150,
    budget: 40000,
    latitude: 19.2183,
    longitude: 72.9781
  }
  // Add more items as needed
];


function onload() {
  let bagItemsStr = localStorage.getItem('bagitem');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage(items);
}

function displayItemsOnHomePage(filteredItems) {
  let itemsContainerElement = document.querySelector('.itemsContainerHall');
  let innerHTML = ``;

  filteredItems.forEach(item => {
    innerHTML += `
          <article class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${item.image}" alt="${item.name}">
                  <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${item.category}</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${item.name}</h1>
                      <p class="leading-relaxed mb-3">${item.description}</p>
                      <div class="flex items-center flex-wrap">
                          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                              </svg>
                          </a>
                          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                              </svg>${item.views}K
                          </span>
                          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>${item.reviews}
                          </span>
                      </div>
                      <button class="buttonAddBag" onclick="addToBag(${item.id})">
                          Add to Bag
                      </button>
                  </div>
              </div>
          </article>`;
  });

  itemsContainerElement.innerHTML = innerHTML;
}

function searchItems() {
  let searchInput = document.getElementById('searchInput').value.toLowerCase();
  let categoryFilter = document.getElementById('categoryFilter').value;
  let eventDateStart = new Date(document.getElementById('eventDateStart').value);
  let eventDateEnd = new Date(document.getElementById('eventDateEnd').value);
  let guests = document.getElementById('guests').value;
  let budget = document.getElementById('budget').value;

  let filteredItems = items.filter(item => {
    let bookedDates = item.bookedDates.map(date => new Date(date));

    // Check if any booked date falls within the user's requested date range
    let isAvailable = !bookedDates.some(bookedDate => {
      return eventDateStart <= bookedDate && bookedDate <= eventDateEnd;
    });

    return (
      (!searchInput || item.name.toLowerCase().includes(searchInput)) &&
      (!categoryFilter || item.category === categoryFilter) &&
      isAvailable &&
      (!guests || item.guests >= parseInt(guests)) &&
      (!budget || item.budget <= parseInt(budget))
    );
  });

  displayItemsOnHomePage(filteredItems);
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}


function nearMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userLatitude = position.coords.latitude;
      const userLongitude = position.coords.longitude;
      const maxDistance = 10; // Set the max distance in km for filtering

      const filteredItems = items.filter(item => {
        const distance = getDistanceFromLatLonInKm(userLatitude, userLongitude, item.latitude, item.longitude);
        return distance <= maxDistance;
      });

      displayItemsOnHomePage(filteredItems);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}



// Initial load
onload();
