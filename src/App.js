import React from 'react';
import Products from './component/Products'

function App() {

  function alertDelete(){
    alert("Xóa")
  }

  function alertEdit(){
    alert("Sửa")
  }

  let products = [{
    "id": 1,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 2,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 3,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
]

  const styles ={
    'color':'red'
  }
  return (
    <div className="App">
     <Products products={products} rowClick={alertEdit}></Products>
     {/* <Products products={products} rowClick={alertDelete}/> */}
    </div>
  );
}

export default App;
