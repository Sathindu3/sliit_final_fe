import React, { useState } from 'react';
import './Identify.css';
import phone1 from '../../Resources/Images/iphone 1.png';
import pattern from '../../Resources/Images/pattern.png';

function Identify() {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            simulateAIProcessing(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            simulateAIProcessing(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const simulateAIProcessing = (file) => {
        setLoading(true);
        setResult('');
        setTimeout(() => {
            setResult('🔭 Identified: Orion constellation, Mars, Andromeda Galaxy.');
            setLoading(false);
        }, 3000);
    };

    return (
        <div className="pg_capture">
            <div className="row">
                {/* Header */}
                <div className="col-12 content-1">
                    <h2>No telescope? Grab your smartphone!</h2>
                    <p>
                        No need to worry about a telescope. Use your smartphone and capture the night sky easily.
                        We provide the best settings for your device.
                    </p>
                </div>

                {/* Phone Ratings */}
                <div className="col-12 content-2">
                    <div className="sub-1">
                        {[12, 13, 14, 15, 16].map((version, index) => (
                            <div className="box" key={index}>
                                <img src={phone1} alt={`iPhone ${version}`} />
                                <div className="description">
                                    <h5>iPhone {version}</h5>
                                    <p>Rating {6 + version / 2}/10</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Upload & AI Analysis */}
                <div className="col-12 content-3">
                    <h2>🛰️ Capture & Analyze</h2>
                    <p>Upload or drag & drop your sky image to analyze with AI.</p>

                    <div
                        className="drop-area"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <p>📁 Drag & drop image here or click to upload</p>
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                    </div>

                    {image && (
                        <div className="preview">
                            <h4>🖼️ Preview</h4>
                            <img src={image} alt="Uploaded Preview" />
                        </div>
                    )}

                    {loading && <p className="loading">🧠 Analyzing image using ML model...</p>}

                    {result && (
                        <div className="result">
                            <h4>🧪 AI Results</h4>
                            <p>{result}</p>
                        </div>
                    )}
                </div>

                <img src={pattern} alt="pattern" className="pattern_image" />
            </div>
        </div>
    );
}

export default Identify;
