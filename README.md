# Omilga Tyreshop

Welcome to the Omilga Tyreshop project! This project is a website for a tyreshop that displays available tyres and their details, as well as the services provided by the shop. This project was developed by us to learn and enhance our MERN stack and web development skills. We are excited to share this as an open-source project with the developer community.

## Table of Contents

- Features
- Technologies Used
- Project Structure
- Installation
- Usage
- Contributing
- License

## Features

- Display available tyres with detailed information
- Showcase services provided by the tyreshop
- User authentication (login and signup)
- User profile management
- Admin dashboard for managing products
- Responsive design for a seamless experience on all devices

## Technologies Used

- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - React Router
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - JWT for authentication

## Project Structure

```
.env.development
.env.production
.gitignore
eslint.config.js
index.html
package.json
public/
  SliderImages/
README.md
src/
  App.jsx
  assets/
  components/
    AdminLayout.jsx
    Footer.jsx
    Layout.jsx
    Navbar.jsx
    ProtectedRoute.jsx
    shadcn/
    ui.tsx
  contexts/
    AuthContext.jsx
  hooks/
    useAddTyre.jsx
    useTyreProduct.jsx
    useTyreProducts.jsx
    useUpdateTyre.jsx
  index.css
  main.jsx
  pages/
    AboutUs.jsx
    Admin/
    Contact.jsx
    Home.jsx
    Login.jsx
    ProductCatalog.jsx
    ProductDetails.jsx
    Services.jsx
    SignUp.jsx
    UserProfilePage.jsx
vite.config.js
```

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/omilga-tyreshop.git
   cd omilga-tyreshop
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a 

.env.development

 file in the root directory and add the following:

   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

   Create a 

.env.production

 file in the root directory and add the following:

   ```env
   VITE_API_BASE_URL=https://omilgatyreshop-backend.onrender.com
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. **Build for production:**

   ```sh
   npm run build
   ```

6. **Preview the production build:**

   ```sh
   npm run preview
   ```

## Usage

- **Home Page:** Displays a hero carousel and featured tyres.
- **Products Page:** Lists all available tyres with filters for brand, size, type, and price range.
- **Product Details Page:** Shows detailed information about a specific tyre.
- **Services Page:** Describes the services provided by the tyreshop.
- **About Us Page:** Provides information about the tyreshop's history and mission.
- **Contact Page:** Allows users to get in touch with the tyreshop.
- **User Profile Page:** Allows users to manage their profile and view their watchlist.
- **Admin Dashboard:** Allows admins to manage products.

## Contributing

We welcome contributions from the community! If you would like to contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

   ```sh
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit them:**

   ```sh
   git commit -m 'Add some feature'
   ```

4. **Push to the branch:**

   ```sh
   git push origin feature/your-feature-name
   ```

5. **Open a pull request.**

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Thank you for checking out the Omilga Tyreshop project! We hope you find it useful and informative. If you have any questions or feedback, feel free to reach out to us. Happy coding!