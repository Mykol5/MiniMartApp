## 🛒 MiniMart – eCommerce Preview App

This is a functional mobile application developed using **React Native (Expo)**. It was built based on a Figma design prototype for an eCommerce app as part of a mobile developer assessment. The app consists of three core screens: **Product Listing**, **Product Details**, and **Cart**, along with smooth navigation and state management for the cart functionality.

## Objective

The goal of this project was to:
- Convert a Figma design into a functional mobile app
- Accurately match the provided UI design
- Implement navigation and state management
- Demonstrate reusable component structure and cart functionality

## Tech Stack

- **Framework**: React Native (Expo)
- **Navigation**: React Navigation
- **State Management**: React Context API
- **UI Libraries**: React Native Paper, React Native Vector Icons
- **Package Manager**: yarn

## Figma Design

[Figma Design Link](https://www.figma.com/design/ff6kLW7UB7N7JH8P33j39j/Alphatwelve-Mobile-App-Developer-Assessment)

## Compiled App Screenshots

![Home Screen](assets/homescreen.png) 

![App Icon](assets/appiconscreen.jpg) 

![Product Details Screen](assets/productdetails1.png) 

![Product Details Screen](assets/productdetails2.png) 

![Product Details Screen](assets/productdetails3.png) 

![Cart Screen](assets/cartscreen.png) 

## Features Implemented

- Product listing from static data
- Detailed product view with "Add to Cart" functionality
- Cart management (add, remove, increase/decrease quantity)
- Badge counter on cart icon
- Toast notification after adding to cart
- Bottom navigation bar
- Fully responsive and pixel-perfect design match with Figma

## Screens

### Home Page (Product Listing)
- Scrollable list of product cards
- Each card displays image, name, and price
- Tapping a product navigates to details

### Product Details
- Displays image, name, price, and description
- Includes “Add to Cart” button
- Shows toast confirmation and updates cart badge

### Cart Page
- Lists added products
- Quantity controls (+ / -)
- Delete item from cart
- Automatically updates total

## Data Source

- Products are loaded from a **static array** stored locally
- No backend integration

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/MiniMartApp.git
cd MiniMartApp
```

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

