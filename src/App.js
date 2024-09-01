import React, { useState } from 'react';
import './App.css';

const AngleSelector = () => {
    const [angle, setAngle] = useState(0);

    const handleChange = (value) => {
        const validValue = Math.min(Math.max(parseInt(value), 0), 360);
        setAngle(validValue);
    };

    return (
        <div className="angle-container">
            <input
                type="number"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => handleChange(e.target.value)}
            />
            <br />
            <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => handleChange(e.target.value)}
            />
            <br />
            <div className="radio-buttons">
                {[0, 45, 60, 90, 180].map((val) => (
                    <label key={val}>
                        <input
                            type="radio"
                            name="angleRadio"
                            value={val}
                            checked={angle === val}
                            onChange={() => handleChange(val)}
                        />
                        {val}°
                    </label>
                ))}
            </div>
        </div>
    );
};

export default AngleSelector;
