const sections = document.querySelectorAll("section");
// console.log(sections);

for (const section of sections){
    // console.log(section);
    section.style.border = "2px solid steelblue";
    section.style.marginBottom = "5px";
    section.style.paddingLeft = "7px";
    section.style.borderRadius = "15px";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "yellow";

// adding a new class
const placesContainer= document.getElementById("places-container");
// placesContainer.classList.add("yellow-bg");
placesContainer.classList.add("text-center");
placesContainer.classList.add("large-text");
placesContainer.classList.remove("large-text");

