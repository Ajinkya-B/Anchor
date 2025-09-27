# Anchor
A single source of truth for supplier product issues — centralizing updates, tracking problems, and ensuring nothing gets lost in emails or spreadsheets.

## Features

- **Gmail OAuth Login**: Secure authentication using Google Identity Services
- **Protected Routes**: Dashboard is only accessible after successful login
- **Responsive Design**: Clean, modern UI that works on all devices
- **Demo Mode**: Test the application without setting up OAuth credentials

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

4. **Login**: Use the "Demo Login" button for testing, or set up Google OAuth for production

## Google OAuth Setup (Optional)

For production use with real Google OAuth:

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Identity Services API
4. Create OAuth 2.0 Client ID credentials
5. Add your domain to authorized JavaScript origins
6. Copy `.env.example` to `.env` and add your client ID:
   ```
   REACT_APP_GOOGLE_CLIENT_ID=your_actual_client_id_here
   ```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Application Flow

1. **Login Page**: Users are redirected here by default
2. **Authentication**: Login via Google OAuth or demo mode
3. **Dashboard**: Black dashboard page with user information and logout option
4. **Protected Routes**: Automatic redirection to login if not authenticated

## Project Structure

```
src/
├── components/
│   ├── Login.tsx          # Login page with OAuth integration
│   └── Dashboard.tsx      # Main dashboard (black page as requested)
├── context/
│   └── AuthContext.tsx    # Authentication state management
├── types/
│   └── google.d.ts        # TypeScript declarations for Google APIs
├── App.tsx                # Main app with routing
├── index.tsx              # Application entry point
└── App.css                # Styling for all components
```
