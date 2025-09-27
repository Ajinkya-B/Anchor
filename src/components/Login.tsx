import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  useEffect(() => {
    // Initialize Google Sign-In
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID || "demo-client-id",
        callback: handleGoogleResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      // Render the sign-in button
      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-button")!,
        {
          theme: "outline",
          size: "large",
          text: "signin_with",
          shape: "rectangular",
        }
      );
    }
  }, []);

  const handleGoogleResponse = (response: any) => {
    try {
      // Decode the JWT token to get user information
      const token = response.credential;
      const payload = JSON.parse(atob(token.split('.')[1]));
      
      const userData = {
        id: payload.sub,
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      };

      login(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleDemoLogin = () => {
    // Demo login for testing without actual Google OAuth
    const demoUser = {
      id: 'demo123',
      name: 'Demo User',
      email: 'demo@example.com',
      picture: 'https://via.placeholder.com/80'
    };
    login(demoUser);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to Anchor</h1>
        <p>Sign in to access your dashboard</p>
        
        <div id="google-signin-button" style={{ marginBottom: '1rem' }}></div>
        
        <p>or</p>
        
        <button 
          className="google-login-btn" 
          onClick={handleDemoLogin}
          style={{ background: '#28a745' }}
        >
          Demo Login (for testing)
        </button>
      </div>
    </div>
  );
};

export default Login;