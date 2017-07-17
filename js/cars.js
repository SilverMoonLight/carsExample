
function addCar () {
    const inputs = document.getElementsByTagName("input");

    let values = [];

    for(let i = 0; i < inputs.length; i++) {
        
        inputs[i].value !== "" ? values.push(inputs[i].value) : "";
    }

    let container = document.getElementById("container");
    let newElementContainer = document.createElement("div");
    newElementContainer.className = "newElementContainer";
    const carName = document.createElement("span");
    carName.innerHTML = values[0];
    const carImage = document.createElement("img");
    carImage.src = values[1];
    const carDesc = document.createElement("p");
    carDesc.innerHTML = values[2];

    container.appendChild(newElementContainer);
    newElementContainer.appendChild(carName);
    newElementContainer.appendChild(carImage);
    newElementContainer.appendChild(carDesc);

}