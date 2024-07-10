import React from 'react';

interface EmailProps {
    subject: string;
    sender: string;
}

const Email: React.FC<EmailProps> = ({ subject, sender }) => {
    return (
        <div>
            <h1>{subject}</h1>
            <h3>{sender}</h3>
        </div>
    );
};

export default Email;