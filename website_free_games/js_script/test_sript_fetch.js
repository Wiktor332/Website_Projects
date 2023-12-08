// Variable to store the text content of the tracked element
let trackedElementText = '';

// Function to determine the path based on trackedElementText
function handleTrackedTextContent() {
    let fetchPath = ''; // Default path
  
    if (trackedElementText === 'Playstation') {
      fetchPath = '../python/data_json/data_playstation.json'; // Path for Playstation
    } else if (trackedElementText === 'Playstation 4') {
        fetchPath = '../python/data_json/data_ps4.json';
    } else if (trackedElementText === 'Playstation 5') {
        fetchPath = '../python/data_json/data_ps5.json';
    } else if (trackedElementText === 'Xbox') {
      fetchPath = '../python/data_json/data_xbox.json'; // Path for Xbox
    } else if (trackedElementText === 'Xbox One') {
        fetchPath = '../python/data_json/data_one.json';
    } else if (trackedElementText === 'Xbox Series XS') {
        fetchPath = '../python/data_json/data_xs.json';
    } else if (trackedElementText === 'PC') {
        fetchPath = '../python/data_json/data_pc.json';
    } else if (trackedElementText === 'Steam') {
        fetchPath = '../python/data_json/data_steam.json';
    } else if (trackedElementText === 'Epic Games Store') {
        fetchPath = '../python/data_json/data_epic.json';
    } else if (trackedElementText === 'GOG') {
        fetchPath = '../python/data_json/data_gog.json'
    }else if (trackedElementText === 'Steam') {
      fetchPath = '../python/data_json/data_steam.json'; // Path for Steam
    } else if (trackedElementText === '')
    // Add more conditions for different textContent values and their respective paths
  
    // Return the determined fetch path
    return fetchPath;
  }

// Fetch data based on the determined path
function fetchData(path) {
    fetch(path)
      .then((data) => {
        return data.json();
      })
      .then((completedata) => {
        let data1 = "";
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
        });
        document.getElementById("cards").innerHTML = data1;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  // Iterate through dropdown elements
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    const trackedElementDisplay = document.getElementById('trackedElementDisplay'); // Reference to display element
  
    select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
    });
  
    options.forEach(option => {
      option.addEventListener('click', () => {
        // Store the text content of the clicked element in the trackedElementText variable
        trackedElementText = option.textContent.trim();
  
        // Update the 'selected' element with the clicked option's text content
        selected.innerText = trackedElementText;
  
        // Update the display element to show the trackedElementText content
        trackedElementDisplay.textContent = trackedElementText;
  
        // Handle logic based on trackedElementText content
        const path = handleTrackedTextContent();
        fetchData(path);
  
        // Close the menu and remove active class from options
        select.classList.remove('select-clicked');
      });
    });
  });