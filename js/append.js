// 1.where to add
const placesList = document.getElementById("places-list");
// 2. what to add
const li = document.createElement("li");
li.innerText = "pahartoli bon";
// 3.add the child
placesList.appendChild(li);


// anther item adding

const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "my  food list";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "borhani";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "salad";
ul.appendChild(li3);
const li4 = document.createElement("li");
li4.innerText = "goru";
ul.appendChild(li4);
section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML  = `
<h1>Dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Shirt</li>
    <li>Pant</li>
</ul>

`
mainContainer.appendChild(sectionDress);