# React Query Demo

This is a simple demonstration project showcasing the use of React Query (TanStack Query) for efficient data fetching and state management in a React application.

## What to Look For

When running this demo, pay attention to these key behaviors that showcase React Query's features:

1. **Initial Load**: When you first navigate to the Home component, you'll see a loading state as React Query fetches the initial data.

2. **Instant Navigation**: If you navigate away from the Home component and then return, you'll see the data instantly (no loading state) because React Query has cached the previous result.

3. **Background Updates**: The backend generates new random numbers every 3 seconds. After the initial load, React Query will automatically fetch updates in the background. You'll see the number update without any loading states or page refreshes.

## Project Structure

The project is divided into two main parts:

- `client/`: A React frontend application using Vite
- `server/`: A Node.js/Express backend server

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Instructions

1. Clone the repository:

```bash
git clone <repository-url>
cd react-query-demo
```

2. Install dependencies for both client and server:

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm

# Install server dependencies
cd server
npm install
```

3. Start the development servers:

In one terminal, start the backend server:

```bash
cd server
npm start
```

In another terminal, start the frontend development server:

```bash
cd client
npm run dev
```

The application should now be running:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Stack

- React Query for data fetching and caching
- Express backend for API endpoint
- Vite for frontend
