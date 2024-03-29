
# tHOTEL - MEN Stack Project

## Overview
tHOTEL is a MEN (MongoDB, Express.js, Node.js) stack project that allows users to manage hotel listings. It features error handling, authentication, authorization, storing data in MongoDB Atlas Cloud, storing images in Cloudinary Cloud, and a map feature for locating hotels. Users are required to use their own API keys and secret keys for secure operation.

## Technologies Used
- MongoDB
- Express.js
- Node.js
- Mongoose
- EJS (Embedded JavaScript)
- CSS
- JavaScript
- Bootstrap

## Features
- **Error Handling:** Comprehensive error handling to ensure smooth user experience.
- **Authentication:** User authentication system to manage user accounts securely.
- **Authorization:** Authorization mechanisms to control access to certain features based on user roles.
- **MongoDB Atlas Cloud:** Utilizes MongoDB Atlas Cloud to store and manage data securely in the cloud.
- **Cloudinary Integration:** Integrates Cloudinary for storing and managing images securely in the cloud.
- **Map Feature:** Allows users to locate hotels on a map for easier navigation.

## Routes

### Listing Routes (`/listings`)
- **GET `/listings`:** View all hotel listings.
- **POST `/listings`:** Create a new hotel listing. (Requires authentication)
- **GET `/listings/category/:category`:** Filter listings by category.

### User Routes
- **GET `/signup`:** Render sign-up form.
- **POST `/signup`:** Create a new user account.
- **GET `/login`:** Render login form.
- **POST `/login`:** Authenticate user login.
- **GET `/logout`:** Log out the current user.

### Review Routes (`/listings/:id/review`)
- **POST `/listings/:id/review`:** Add a new review for a listing. (Requires authentication)
- **DELETE `/listings/:id/review/:reviewId`:** Delete a review. (Requires authentication and review ownership)

## Responsive Design


Responsive design is crucial for ensuring that your web application is accessible and user-friendly across various devices and screen sizes. In this video, we'll explore five key strategies for achieving responsiveness in the tHOTEL MEN stack project.



#tHOTEL #MENstack #responsivedesign #webdevelopment #codingtips

## Getting Started
### Prerequisites
- Node.js and npm should be installed on your machine.
- MongoDB Atlas account for database storage.
- Cloudinary account for image storage.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/inaveed-git/tHOTEL-MENstack.git
   ```

2. Navigate to the project directory:
   ```
   cd tHOTEL
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Configuration
1. Create a `.env` file in the root directory of the project.
2. Add your MongoDB Atlas connection URL, Cloudinary credentials, and other sensitive information to the `.env` file:
   ```
   CLOUD_NAME=your_cloud_name_here
   API_KEY=your_api_key_here
   API_KEY_SECRET=your_api_key_secret_here

   DB_URL=your_mongodb_connection_url_here

   SESSION_SECRET=your_session_secret_here
   MAP_BOX_TOKEN=your_mapbox_token_here



   ```

## Running the Application
1. Start the server:
   ```
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:8080` to access the application.

## Project Structure
- `app.js`: Main entry point of the application.
- `config/db.js`: Configuration file for connecting to MongoDB.
- `models/`: Directory containing database models.
- `routes/`: Directory containing route definitions.
- `views/`: Directory containing view templates.
- `public/`: Directory containing static assets.

## Contributing
Contributions are welcome! Please feel free to submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
