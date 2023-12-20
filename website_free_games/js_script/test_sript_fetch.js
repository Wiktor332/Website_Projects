// Variable to store the text content of the tracked element
let trackedElementText = "";

// Function to determine the path based on trackedElementText
function handleTrackedTextContent() {
  let fetchPath = ''; // Default path

  switch (trackedElementText) {
    case 'Playstation':
      fetchPath = '../python/data_json/data_playstation.json';
      break;
    case 'Playstation 4':
      fetchPath = '../python/data_json/data_ps4.json';
      break;
    case 'Playstation 5':
      fetchPath = '../python/data_json/data_ps5.json';
      break;
    case 'Xbox':
      fetchPath = '../python/data_json/data_xbox.json';
      break;
    case 'Xbox One':
      fetchPath = '../python/data_json/data_one.json';
      break;
    case 'Xbox Series XS':
      fetchPath = '../python/data_json/data_xs.json';
      break;
    case 'PC':
      fetchPath = '../python/data_json/data_pc.json';
      break;
    case 'ALL PC':
      fetchPath = '../python/data_json/data_pc.json';
      break;
    case 'Steam':
      fetchPath = '../python/data_json/data_steam.json';
      break;
    case 'Epic Games Store':
      fetchPath = '../python/data_json/data_epic.json';
      break;
    case 'GOG':
      fetchPath = '../python/data_json/data_gog.json';
      break;
    default:
      fetchPath = '../python/data_json/data_pc.json'
      break;
  }
  return fetchPath;
}

// Function to fetch data based on the determined path
function fetchData(path) {
  fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((completedata) => {
      let data1 = "";
      let count = 0;
      completedata.forEach((values, index) => {
        // Create a unique ID for each checkbox by appending the index
        const checkboxID = `btnControl_${index}`;
        data1 += `<div class="card">
        <input type="checkbox" id="${checkboxID}"/>
        <label class="btn" for="${checkboxID}">
          <h1 class="title">${values.title}</h1>
          <img src="${values.image}" alt="img" class="images">
          <p class="description">${values.description}</p>
          <p class="type">Type: ${values.type}</p>
          <p class="instructions">${values.instructions}</p>
          <a class="link" href="${values.gamerpower_url}" target="_blank">Click to receive</a>
          <p class="info">Click for detailed instructions</p>
        </label>
      </div>`;
      count++;
      });
      document.getElementById("cards").innerHTML = data1;

      console.log(`Total mapped objects: ${count}`);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
    });
}

// Function to load data based on URL parameter or default to PC data
function loadDataFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedOption = urlParams.get('page');

  if (selectedOption) {
    const options = document.querySelectorAll('.menu li a');
    options.forEach(option => {
      if (option.getAttribute('href') === selectedOption) {
        trackedElementText = option.textContent;
        const path = handleTrackedTextContent();
        fetchData(path);

        // Update UI with selected option
        const selected = document.querySelector('.selected');
        selected.innerText = trackedElementText;
      }
    });
  } else {
    trackedElementText = "PC"; // Set default to PC
    const path = handleTrackedTextContent();
    fetchData(path);

    // Update UI with default option
    const selected = document.querySelector('.selected');
    selected.innerText = trackedElementText;
  }
}

// Load data on page load
window.addEventListener('load', () => {
  loadDataFromURL();
});

// Iterate through dropdown elements
const dds = document.querySelectorAll('.dropdown');

dds.forEach(dd => {
  const select = dd.querySelector('.select');
  const options = dd.querySelectorAll('.menu li a'); // Changed to select anchor tags

  const selected = dd.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
  });

  options.forEach(option => {
    option.addEventListener('click', (event) => {
      event.preventDefault();
  
      trackedElementText = option.textContent;
      selected.innerText = trackedElementText;
  
      document.getElementById("cards").innerHTML = '';

      const path = handleTrackedTextContent();
      fetchData(path);
  
      console.log('Clicked option:', trackedElementText); // Log the clicked option
      console.log('Fetching data from path:', path); // Log the fetch path
  
      // Change the URL based on the clicked option
      const page = option.getAttribute('href'); // Get the href attribute of the clicked option
      if (page) {
        const url = new URL(window.location.href);
        url.searchParams.set('page', page); // Set a URL parameter 'page' with the clicked option's href
        window.history.pushState({}, '', url); // Change the URL without reloading the page
        console.log('Changed URL:', window.location.href); // Log the changed URL
      }
  
      select.classList.remove('select-clicked');

      function loadDataFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedOption = urlParams.get('page');
      
        // If there's a selectedOption, load data accordingly
        if (selectedOption) {
          const options = document.querySelectorAll('.menu li a');
          options.forEach(option => {
            if (option.getAttribute('href') === selectedOption) {
              trackedElementText = option.textContent;
              const path = handleTrackedTextContent();
              fetchData(path);
              
              // Update UI with selected option
              const selected = document.querySelector('.selected');
              selected.innerText = trackedElementText;
            }
          });
        }
      }
      
      // Load data on page load
      window.addEventListener('load', () => {
        loadDataFromURL();
      });
    });
  });
});

// let trackedElementURL = ""; // Define the variable in the global scope

//   function handleTrackedURLContent() {
//     let fetchURL = ''; // Default path
  
//     switch (trackedElementURL) {
//       case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_playstation.html':
//       fetchURL = '../python/data_json/data_playstation.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_ps4.html':
//       fetchURL = '../python/data_json/data_ps4.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_ps5.html':
//       fetchURL = '../python/data_json/data_ps5.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_xbox.html':
//       fetchURL = '../python/data_json/data_xbox.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_one.html':
//       fetchURL = '../python/data_json/data_one.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_xs.html':
//       fetchURL = '../python/data_json/data_xs.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_pc.html':
//       fetchURL = '../python/data_json/data_pc.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_steam.html':
//       fetchURL = '../python/data_json/data_steam.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_epic.html':
//       fetchURL = '../python/data_json/data_epic.json';
//       break;
//     case 'http://127.0.0.1:5500/website_free_games/templates/index_main.html?page=index_gog.html':
//       fetchURL = '../python/data_json/data_gog.json';
//       break;
//     default:
//       fetchURL = '../python/data_json/data_pc.json'
//       break;
//   }
//   return fetchURL;
// }
  
//   function fetchData_URL(pathURL) {
//     fetch(pathURL)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((completedata1) => {
//         let data2 = "";
//         completedata1.forEach((values, index) => {
//           // Create a unique ID for each checkbox by appending the index
//           const checkboxID = `btnControl_${index}`;
//           data2 += `<div class="card-carousel">
//             <div class="wrap" id="1">
//                 <img src="${values.image}" alt="img" class="images">
//                 <h2 class="title">${values.title}</h2>
//             </div>`;
//         });
//         document.getElementById("card-carousel").innerHTML = data2;
//       })
//       .catch((err) => {
//         console.error('Error fetching data:', err);
//       });
//   }
  
//   dds.forEach(dd => {
//     const select = dd.querySelector('.select');
//     const options = dd.querySelectorAll('.menu li a'); // Changed to select anchor tags
  
//     const selected = dd.querySelector('.selected');
  
//     select.addEventListener('click', () => {
//       select.classList.toggle('select-clicked');
//     });
  
//     options.forEach(option => {
//       option.addEventListener('click', (event) => {
//         event.preventDefault();
  
//         // Retrieve URL from the href attribute of the anchor tag
//         trackedElementURL = option.getAttribute('href');
//         selected.innerText = trackedElementURL; // Set URL instead of text
  
//         document.getElementById("cards").innerHTML = '';
  
//         // Use the URL for further processing (e.g., fetching data)
//         const pathURL = trackedElementURL;
//         const fetchURL = handleTrackedURLContent(pathURL);
//         fetchData_URL(fetchURL);
  
//         console.log('Clicked option URL:', trackedElementURL); // Log the clicked URL
//         console.log('Fetching data from path:', fetchURL); // Log the fetch path
//       });
//     });
//   });