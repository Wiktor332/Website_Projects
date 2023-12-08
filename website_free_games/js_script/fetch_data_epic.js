
fetch('../python/data_json/data_epic.json')
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

