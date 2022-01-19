const products = [
    {
      id:1, 
      title:'Producto-1', 
      price:630, 
      pictureUrl:"https://i.picsum.photos/id/919/300/300.jpg?hmac=zkfpwKMEdwrJgSjLM7xZabY8f9on1wdBVKC4qThOPP4"
    },
    {
      id:5, 
      title:'Producto-2', 
      price:350, 
      pictureUrl:"https://i.picsum.photos/id/1067/300/300.jpg?hmac=RWGvJaQWQ82pFjo24Ww3k0ccaUdbSJZSuDRM13YcdM0"
    },
    {id:7, 
      title:'Producto-3', 
      price:890, 
      pictureUrl:"https://i.picsum.photos/id/599/300/300.jpg?hmac=nSWHdvA8ntvutXYRkHDZnrSQ6M5a8fIeWfm9Y9OjB5c"
    }
  ]

  export const promesaProd = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 5000)
  })