## 🚚 FastTrack - Shipment Delivery Tracking Application

**FastTrack** is a user-friendly shipment delivery tracking application designed to help users deliver and track their packages with ease. Users can securely register or log in to access the app's features. Once logged in, they can submit their packages for delivery and monitor the status of their shipments in real-time.

With FastTrack, users can:
- 📦 **Track Delivery Status**: Receive real-time updates on the status of deliveries.
- 🚚 **Submit Packages for Delivery**: Easily add packages with essential details like receiver information, address, and package size.
- 🗂️ **Delivery Dashboard**: Keep track of all deliveries in a convenient, accessible dashboard.

FastTrack streamlines the process of package delivery and tracking, providing users with a seamless and secure experience to monitor their shipments efficiently.

## 🛠️ Tech Stack

FastTrack is built using modern technologies to provide a seamless and efficient user experience. Here's the tech stack that powers the application:

- ⚛️ **Frontend**: React - A popular JavaScript library for building dynamic user interfaces.
- 🔥 **Backend**: Firebase - Provides backend services like Firestore for real-time database, authentication, and hosting.
- 🎨 **Styling**: Tailwind CSS - A utility-first CSS framework for fast and responsive design.
- 🚀 **Deployment**: Vercel - A cloud platform for static sites and serverless functions, used for seamless deployment.

These technologies work together to ensure FastTrack is fast, responsive, and scalable for users tracking their deliveries.

## 🚀 Installation Guide

Follow these steps to set up the **FastTrack** project locally for development.

### Prerequisites
Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) and npm
- [Firebase](https://firebase.google.com/) account and Firebase project for authentication and Firestore
- [Tailwind CSS](https://tailwindcss.com/) for styling the app

### Steps to Install

1. **Clone the Repository**

   Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/fasttrack.git
   
2. **Navigate to the Project Directory**

   After cloning the repository, change to the project directory:

   ```bash
   cd fasttrack

3. **Set up Firebase Configuration**

   To configure Firebase in the project, you'll need to create a `.env` file in the `frontend` directory and add your Firebase credentials. 

   **Steps:**
   1. Go to the Firebase console: [Firebase Console](https://console.firebase.google.com/)
   2. Create a new project or select an existing one.
   3. Get your Firebase configuration object by navigating to **Project Settings** > **General** > **Your apps** section > **Firebase SDK snippet**.
   4. Add the following environment variables to your `.env` file in the `frontend` directory:

   ```bash
   VITE_FEDEX_BASE_API_URL=https://apis-sandbox.fedex.com
   VITE_FEDEX_API_KEY=your_fedex_api_key
   VITE_FEDEX_SECRET_KEY=your_fedex_secret_key

4. **Run the Application Locally**

   After setting up your Firebase configuration, you can run the application locally on your machine.
   Navigate to the `frontend` directory, install the frontend dependencies and start the development server:
   ```bash
      cd frontend
      npm install
      npm run dev
   
  The frontend application will be available at http://localhost:3000.



