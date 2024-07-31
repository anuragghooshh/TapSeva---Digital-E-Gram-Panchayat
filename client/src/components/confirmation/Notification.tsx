import React from 'react';

interface NotificationProps {
    message: string;
    duration?: number;
}

const Notification : React.FC<NotificationProps> = ({ message, duration = 3000 }) => {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null;

    return (
        <div className="notification">
            {message}
        </div>
    );
};

export default Notification;
