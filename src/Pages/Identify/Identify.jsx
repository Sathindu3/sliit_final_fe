import React, { useState } from 'react';
import './Identify.css';
import phone1 from '../../Resources/Images/iphone 1.png';
import pattern from '../../Resources/Images/pattern.png';

function Identify() {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null); // store the file for sending
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleImageUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setImage(URL.createObjectURL(uploadedFile));
            sendToBackend(uploadedFile);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
            setImage(URL.createObjectURL(droppedFile));
            sendToBackend(droppedFile);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const sendToBackend = async (file) => {
        setLoading(true);
        setResult('');

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('https://your-api.com/api/detection/predict', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Server error: ' + response.statusText);
            }

            const data = await response.json();
            
            // You can adjust how you parse the Roboflow response
            setResult(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error(error);
            setResult('❌ Failed to analyze image.');
        } finally {
            setLoading(false);
        }
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
                            <pre>{result}</pre>
                        </div>
                    )}
                </div>

                <img src={pattern} alt="pattern" className="pattern_image" />
            </div>
        </div>
    );
}

export default Identify;
