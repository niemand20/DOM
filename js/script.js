const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    // <!-- console.log(li); -->
    // <!-- console.log(li.innerText); -->
};
const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    // <!-- console.log(h1); -->
    /* console.log(h1);*/
    // <!-- console.log(h1.innerText); -->
}


const places = document.getElementsByClassName("important-places");
console.log(places);
for (const place of places){
    // console.log(place.innerText);
};

// querySelectorAll()
const someLi = document.querySelectorAll(".fruits-container li");
console.log(someLi);
for (const li of someLi){
    // console.log(li);
    // console.log(li.innerText);
}