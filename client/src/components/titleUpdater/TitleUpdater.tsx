import React from 'react';
import { useLocation } from 'react-router-dom';

const TitleUpdater: React.FC = () => {
    const location = useLocation();

    React.useEffect(() => {
        switch (location.pathname) {
            case '/':
                document.title = 'TapSeva';
                break;
            case '/about':
                document.title = 'About - TapSeva';
                break;
            case '/contact':
                document.title = 'Contact - TapSeva';
                break;
            case '/downloads':
                document.title = 'Downloads - TapSeva';
                break;
            case '/services':
                document.title = 'Services - TapSeva';
                break;
            case '/users':
                document.title = 'Users - TapSeva';
                break;
            case '/applications':
                document.title = 'Applications - TapSeva';
                break;
            case '/auth/signin':
                document.title = 'Sign In - TapSeva';
                break;
            case '/auth/signup':
                document.title = 'Sign Up - TapSeva';
                break;
            case '/profile':
                document.title = 'Profile - TapSeva';
                break;
            case '/updates':
                document.title = 'Updates - TapSeva';
                break;
            default:
                document.title = 'TapSeva';
        }
    }, [location]);

    return null;
};

export default TitleUpdater;
