const destination = document.getElementById("destinationname");
const loc = document.getElementById("location");
const photo = document.getElementById("photo");
const description = document.getElementById("description");
let lists = document.getElementById("listofplaces");
let counter = 0;

document.getElementById("forms").addEventListener("submit", addFields);

function addFields(event) {
  //event targets the form
  event.preventDefault(); //preventing the webpage to be refreshed
  console.log("clicked");

  let destinationValue = destination.value;
  let locValue = loc.value;
  let photoValue = photo.value;
  let descriptionValue = destination.value;
  console.log(destinationValue);

  lists.innerHTML += `<li style="border:solid" id ="${counter}">
  <h1>${destinationValue}</h1>
  <p>${locValue}</p>
  <button style="background-color:yellow" id="edit" type="submit">Edit</button>
  <button style="background-color:red" id = "removeBtn" type="submit">Remove</button>
  </li>`;

  document.getElementById("removeBtn").addEventListener("submit", remove);

  function remove() {
    li.counter.innerHTML = "";
  }

  function edit() {
    destinationValue = prompt("Enter new name");
    locValue = prompt("Enter new location");
    photoValue = prompt("Enter new photo url");
  }
  counter++;
}
