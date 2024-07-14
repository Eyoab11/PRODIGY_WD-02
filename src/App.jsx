import React from 'react';
import Timer from './components/Timer';
import timerImage from './assets/clock.jpg'; 

const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200" style={{ backgroundImage: `url(${timerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Timer />
        </div>
    );
};

export default App;
