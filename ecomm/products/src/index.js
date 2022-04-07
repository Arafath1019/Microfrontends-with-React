// import faker from "faker";

// let products = "";

// for (let i = 0; i<3; i++){
//     const name = faker.commerce.productName();
//     products += `<div>${name}</div>`;
// }

products = `<div>Mobile</div><div>Monitor</div><div>Computer</div>`

document.querySelector("#dev-products").innerHTML = products;
