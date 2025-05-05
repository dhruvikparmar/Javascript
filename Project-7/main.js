let men=document.getElementById("men");
let women=document.getElementById("women");
let kids=document.getElementById("kids");
let images=document.getElementById("images");
let footer=document.getElementById("footer");
let productlist = document.getElementById("productlist");

let cardobj=[
  {
    "image": "./images/mens/men12.jpg",
    "id": 1,
    "title": "<br>Mens Casual Premium Slim Fit Shirt<br>",
    "price": 109.95,
    "description": "<br>Slim-fitting style, contrast raglan long sleeve, light weight.<br><br>",
    "category": "men's clothing",
    "rating":  3.9,
    "button":"Add to cart"
  }
  ,
  {
    "image": "./images/mens/men13.jpg",
    "id": 2,
    "title": "<br>Mens Casual Slim Fit Black Half-sleeve Shirt<br> ",
    "price": 22.3,
    "description": "<br> contrast raglan half sleeve, light weight,Slim-fitting style.<br><br> ",
    "category": "men's clothing",
    "rating": 4.1 
  },
  {
    "image": "./images/mens/men14.jpg",
    "id": 3,
    "title": "<br>Mens Casual Premium grey Shirt<br> ",
    "price": 55.99,
    "description": "<br> contrast raglan full sleeve, light weight,Slim-fitting style.<br><br> ",
    "category": "men's clothing",
    "rating": 4.7
  },
  {
    "image": "./images/mens/men7.jpg",
    "id": 4,
    "title": "<br>Mens casual black pant<br>",
    "price": 15.99,
    "description": "<br> contrast raglan ,confertable, light weight,Slim-fitting style.<br><br> ",
    "category": "men's clothing",
    "rating": 2.6,
    
  },
  {
    "image": "./images/mens/men8.jpg",
    "id": 5,
    "title": "<br>Mens casual sky-blue pant<br>",
    "price": 695,
    "description": "<br> contrast raglan ,confertable, light weight,Slim-fitting style.<br><br> ",
    "category": "men's clothing",
    "rating": 4
  },
  {
    "image": "./images/mens/men11.jpg",
    "id": 6,
    "title": "<br>Mens casual denim's pant<br>",
    "price": 168,
    "description": "<br> contrast raglan ,confertable, light weight,Slim-fitting style.<br><br> ",
    "category": "men's clothing",
    "rating": 3.9
  },
  {
    "image": "./images/womens/women11.jpg",
    "id": 7,
    "title": "<br>women's casual multi-color top<br>",
    "price": 9.99,
    "description": "<br>Classic top for Engagement, Wedding, Anniversary, Valentine's Day...<br><br>",
    "category": "women's clothing",
    "rating": 3
  },
  {
    "image": "./images/womens/women8.jpg",
    "id": 8,
    "title": "<br>women's premium  green top<br>",
    "price": 10.99,
    "description": "<br>Classic top for Engagement, Wedding, Anniversary, Valentine's Day...<br><br>",
    "category": "women's clothing",
    "rating": 4.6
  },
  {
    "image": "./images/womens/women9.jpg",
    "id": 9,
    "title": "<br>women's casual light-yellow top<br>",
    "price": 64,
    "description": "<br>Classic top for Engagement, Wedding, Anniversary, Valentine's Day...<br><br>",
    "category": "women's clothing",
    "rating":  3.3
  },
  {
    "image": "./images/womens/women13.jpg",
    "id": 10,
    "title": "<br>women's slim dark-blue jeans pant<br>",
    "price": 109,
    "description": "<br>light-weight pant for Engagement, Wedding, Anniversary, Valentine's Day...<br><br>",
    "category": "women's clothing",
    "rating": 3.6
  },
  {
    "image": "./images/womens/women14.jpg",
    "id": 11,
    "title": "<br>women's slim light-blue jeans pant<br>",
    "price": 109,
    "description": "<br>light-weight light-blue pant for Engagement, Wedding, Anniversary, Valentine's Day...<br><br>",
    "category": "women's clothing",
    "rating": 4.8
  },
  {
    "image": "./images/womens/women15.jpg",
    "id": 12,
    "title": "<br>women's slim light-black jeans pant<br>",
    "price": 114,
    "description": "<br>light-weight black pant for Engagement, Wedding, Anniversary, Valentine's Day...<br><br>",
    "category": "women's clothing",
    "rating": 4.9
  },
  {
    "image": "./images/kids/kids10.jpg",
    "id": 13,
    "title": "<br>kid's Premium white t-shirt<br>",
    "price": 599,
    "description": "<br> contrast raglan white t-shirt, light weight,Slim-fitting style.<br><br> ",
    "category": "kid's clothing",
    "rating": 2.9
  },
  {
    "image": "./images/kids/kids13.jpg",
    "id": 14,
    "title": "<br>kid's casual stripped green t-shirt<br>",
    "price": 999,
    "description": "<br> contrast raglan green t-shirt, light weight,Slim-fitting style.<br><br> ",
    "category": "kid's clothing",
    "rating": 3.9
  },
  {
    "image": "./images/kids/kids12.jpg",
    "id": 15,
    "title": "<br>kid's Premium black t-shirt<br>",
    "price": 599,
    "description": "<br> contrast raglan black t-shirt, light weight,Slim-fitting style.<br><br> ",
    "category": "kid's clothing",
    "rating": 2.9
  },
  {
    "image": "./images/kids/kids14.jpg",
    "id": 16,
    "title": "<br>kid's Premium multi-color t-shirt<br>",
    "price": 29.95,
    "description": "<br> contrast raglan multi-color t-shirt, light weight,Slim-fitting style.<br><br> ",
    "category": "kid's clothing",
    "rating": 2.9
  },
  {
    "image": "./images/kids/kids9.jpg",
    "id": 17,
    "title": "<br>kid's casual white t-shirt<br>",
    "price": 29.99,
    "description": "<br> contrast raglan white t-shirt, light weight,Slim-fitting style.<br><br> ",
    "category": "kid's clothing",
    "rating": 3.9
  },
  {
    "image": "./images/kids/kids11.jpg",
    "id": 18,
    "title": "<br>kid's Premium multi-color t-shirt<br>",
    "price": 9.85,
    "description": "<br> contrast raglan multi-color t-shirt, light weight,Slim-fitting style.<br><br> ",
    "category": "kid's clothing",
    "rating": 4.7
  },
]

localStorage.setItem("productlist", JSON.stringify(cardobj));

function displayProducts(filteredProducts) {  
  productlist.innerHTML = "";
  filteredProducts.forEach(product => {
    let box = document.createElement("div");
    box.classList.add("product-box");
    box.innerHTML = `
      <img src="${product.image}" alt="${product.title}" width="150">
      <h2>${product.title}</h2>
      <h3>Price: $${product.price}</h3>
      <p>${product.description}</p>
      <p>Category: ${product.category}</p>
      <p>Rating: ${typeof product.rating === 'object' ? product.rating.rate : product.rating}</p>
    `;

    
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.style.color = "white";
    button.style.marginLeft = "35%";
    button.style.backgroundColor = "rgb(0, 100, 90)";
    button.style.border = "1px solid white";
    button.style.borderRadius = "5px";
    button.style.padding = "5px";
    button.onclick = () => {
      alert(`"${product.title}" added to cart!`);
    };

    box.appendChild(button);
    productlist.appendChild(box);
  });
}

all.addEventListener("click", () => {
  images.style.display = "block";
  footer.style.display = "block";
  productlist.style.display = "none";
  // let products = JSON.parse(localStorage.getItem("productlist"));
  // displayProducts(products);
});

men.addEventListener("click", () => {
  images.style.display = "none";
  footer.style.display = "none";
  productlist.style.display = "block";
  productlist.style.display = "flex";

  let products = JSON.parse(localStorage.getItem("productlist"));
  let filtered = products.filter(p => p.category === "men's clothing");
  displayProducts(filtered);
});

women.addEventListener("click", () => {
  images.style.display = "none";
  footer.style.display = "none";
  productlist.style.display = "block";
  productlist.style.display = "flex";
  let products = JSON.parse(localStorage.getItem("productlist"));
  let filtered = products.filter(p => p.category === "women's clothing");
  displayProducts(filtered);
});

kids.addEventListener("click", () => {
  images.style.display = "none";
  footer.style.display = "none";
  productlist.style.display = "block";
  productlist.style.display = "flex";
  let products = JSON.parse(localStorage.getItem("productlist"));
  let filtered = products.filter(p => p.category === "kid's clothing"); 
  displayProducts(filtered);
});