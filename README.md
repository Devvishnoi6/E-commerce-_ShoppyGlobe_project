# ShoppyGlobe - E-Commerce Application

ShoppyGlobe is a basic e-commerce application built using React, Redux, and React Router.
It allows users to browse products, view detailed information about each product,
add items to their shopping cart, and manage their cart. 
The application is fully responsive and optimized for a variety of screen sizes.

## Features

- **Product List**: Displays a list of products fetched from an external API.
- **Product Details**: Shows detailed information about a selected product.
- **Cart Management**: Add and remove products from the cart using Redux for state management.
- **Responsive Design**: The application is designed to work well on different screen sizes.
- **React Router**: Used for navigation between pages.
- **Redux**: Used for managing cart state and actions.
- **Error Handling**: Graceful error handling for failed product fetch requests.
- **Lazy Loading**: Components are lazily loaded to optimize performance.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For managing global state (cart items).
- **React Router**: For handling navigation and routing between pages.
- **CSS**: For styling the application with a responsive design.
- **Fetch API**: For fetching product data from an external API (`https://dummyjson.com/products`).

shoppyglobe/
│
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   └── NotFound.jsx
|   |   ├── Checkout.jsx 
│   │
│   ├── hooks/
│   │   └── useFetchProducts.js
│   │
│   ├── redux/
│   │   ├── action.js
│   │   ├── reducers.js
│   │   └── store.js
│   │
│   ├── App.jszx
│   ├── main.jsx
│   ├── App.css
│   └── ...
│
├── package.json
└── ...


## Running application

- 1.Clone repository
- 2.navigate to the folder
- 3.npm install 
- 4.npm run dev

##  Author
Dev Vishnoi
