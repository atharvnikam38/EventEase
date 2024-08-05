const items = [
  {
    id: 1,
    image: 'images/image1.png',
    category: 'Wedding',
    name: 'The Grand Imperial Banquet Hall',
    description: 'The Grand Imperial Banquet Hall in Vashi, Mumbai offers luxurious settings ideal for weddings, receptions, and pre-wedding functions.',
    views: 1.2,
    reviews: 6,
    bookedDates: ['2024-08-15', '2024-08-16'],
    guests: 200,
    budget: 50000,
    latitude: 19.0330,
    longitude: 73.0297
  },
  {
    id: 2,
    image: 'images/image2.png',
    category: 'Birthday',
    name: 'Celebration Corner',
    description: 'Celebration Corner is a perfect venue for memorable birthday parties with a spacious and vibrant atmosphere.',
    views: 1.2,
    reviews: 6,
    bookedDates: ['2024-09-05', '2024-09-06'],
    guests: 100,
    budget: 30000,
    latitude: 19.0760,
    longitude: 72.8777
  },
  {
    id: 3,
    image: 'images/image3.png',
    category: 'Party',
    name: 'Elite Party Venue',
    description: 'Elite Party Venue is designed for high-energy events and parties, featuring modern decor and excellent service.',
    views: 1.2,
    reviews: 6,
    bookedDates: ['2024-10-21', '2024-10-22'],
    guests: 150,
    budget: 40000,
    latitude: 19.2183,
    longitude: 72.9781
  },
  {
    id: 4,
    image: 'images/image4.jpeg',
    category: 'Conference',
    name: 'Corporate Nexus Hall',
    description: 'Corporate Nexus Hall is equipped with state-of-the-art facilities, making it ideal for corporate events, conferences, and seminars.',
    views: 0.8,
    reviews: 4,
    bookedDates: ['2024-11-11', '2024-11-12'],
    guests: 250,
    budget: 60000,
    latitude: 19.0761,
    longitude: 72.8772
  },
  {
    id: 5,
    image: 'images/image5.jpeg',
    category: 'Anniversary',
    name: 'Eternal Moments Hall',
    description: 'Eternal Moments Hall provides a romantic setting for anniversary celebrations with elegant decor and excellent service.',
    views: 1.0,
    reviews: 5,
    bookedDates: ['2024-12-01', '2024-12-02'],
    guests: 180,
    budget: 45000,
    latitude: 19.1643,
    longitude: 73.0119
  },
  {
    id: 6,
    image: 'images/image6.jpeg',
    category: 'Wedding',
    name: 'Opulent Wedding Palace',
    description: 'Opulent Wedding Palace offers a grand and luxurious venue for weddings, ensuring a memorable experience with top-notch amenities.',
    views: 1.5,
    reviews: 7,
    bookedDates: ['2024-07-25', '2024-07-26'],
    guests: 300,
    budget: 80000,
    latitude: 19.2186,
    longitude: 72.9784
  },
  {
    id: 7,
    image: 'images/bir1.jpg',
    category: 'Birthday',
    name: 'Joyful Celebrations Hall',
    description: 'Joyful Celebrations Hall is ideal for vibrant and fun-filled birthday parties, featuring customizable decor and friendly service.',
    views: 0.9,
    reviews: 4,
    bookedDates: ['2024-06-15', '2024-06-16'],
    guests: 120,
    budget: 35000,
    latitude: 19.0728,
    longitude: 72.8826
  },
  {
    id: 8,
    image: 'images/image8.jpeg',
    category: 'Corporate Event',
    name: 'Executive Event Center',
    description: 'Executive Event Center is designed for professional corporate events and meetings with modern amenities and a sophisticated environment.',
    views: 1.3,
    reviews: 6,
    bookedDates: ['2024-05-10', '2024-05-11'],
    guests: 220,
    budget: 55000,
    latitude: 19.0762,
    longitude: 72.8773
  },
  {
    id: 9,
    image: 'images/image9.jpeg',
    category: 'Party',
    name: 'Vibrant Celebration Hall',
    description: 'Vibrant Celebration Hall offers a lively and energetic atmosphere for all types of parties and social events.',
    views: 1.4,
    reviews: 8,
    bookedDates: ['2024-04-21', '2024-04-22'],
    guests: 160,
    budget: 42000,
    latitude: 19.1180,
    longitude: 72.9140
  },
  {
    id: 10,
    image: 'images/bir2.jpeg',
    category: 'Anniversary',
    name: 'Romantic Elegance Hall',
    description: 'Romantic Elegance Hall provides an intimate and charming setting for anniversary celebrations, featuring elegant decor and exceptional service.',
    views: 1.1,
    reviews: 5,
    bookedDates: ['2024-03-15', '2024-03-16'],
    guests: 140,
    budget: 47000,
    latitude: 19.2437,
    longitude: 72.8550
  },
  {
    id: 11,
    image: 'images/image4.jpeg',
    category: 'Wedding',
    name: 'Majestic Wedding Venue',
    description: 'Majestic Wedding Venue offers a luxurious and grand setting for weddings, providing top-notch amenities and services.',
    views: 1.6,
    reviews: 9,
    bookedDates: ['2024-02-14', '2024-02-15'],
    guests: 250,
    budget: 75000,
    latitude: 19.0434,
    longitude: 72.8650
  },
  {
    id: 12,
    image: 'images/bir3.jpeg',
    category: 'Birthday',
    name: 'Themed Birthday Hall',
    description: 'Themed Birthday Hall is perfect for hosting themed birthday parties with customizable decor and a fun atmosphere.',
    views: 1.0,
    reviews: 4,
    bookedDates: ['2024-01-10', '2024-01-11'],
    guests: 110,
    budget: 32000,
    latitude: 19.0169,
    longitude: 73.0305
  },
  {
    id: 13,
    image: 'images/bur5.jpeg',
    category: 'Party',
    name: 'Festive Event Hall',
    description: 'Festive Event Hall provides a vibrant and energetic space for hosting various types of parties and celebrations.',
    views: 1.2,
    reviews: 6,
    bookedDates: ['2024-03-21', '2024-03-22'],
    guests: 170,
    budget: 46000,
    latitude: 19.2510,
    longitude: 72.8460
  }
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
                          <a href="hall1.html" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Book 
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
                     
                  </div>
              </div>
          </article>`;
  });

  itemsContainerElement.innerHTML = innerHTML;
}

function searchItems() {
  let searchInput = document.getElementById('searchInput').value.toLowerCase();
  let categoryFilter = document.getElementById('categoryFilter').value;
  let eventDateStart = document.getElementById('eventDateStart').value ? new Date(document.getElementById('eventDateStart').value) : null;
  let eventDateEnd = document.getElementById('eventDateEnd').value ? new Date(document.getElementById('eventDateEnd').value) : null;
  let guests = document.getElementById('guests').value;
  let budget = document.getElementById('budget').value;

  let filteredItems = items.filter(item => {
    let bookedDates = item.bookedDates.map(date => new Date(date));

    // Check if any booked date falls within the user's requested date range
    let isAvailable = !bookedDates.some(bookedDate => {
      // If only start date is provided
      if (eventDateStart && !eventDateEnd) {
        return bookedDate >= eventDateStart;
      }
      // If both start and end dates are provided
      if (eventDateStart && eventDateEnd) {
        return (
          (eventDateStart <= bookedDate && bookedDate <= eventDateEnd) ||
          (eventDateStart <= bookedDate && bookedDate <= eventDateEnd) ||
          (bookedDate <= eventDateStart && bookedDate <= eventDateEnd)
        );
      }
      return false;
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
