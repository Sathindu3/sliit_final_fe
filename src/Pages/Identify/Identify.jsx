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
            processImage(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            processImage(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const processImage = async (file) => {
        setLoading(true);
        setResult('');

        const formData = new FormData();
        formData.append('Image', file);

        try {
            const response = await fetch('http://localhost:5257/api/Detection/detect', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Backend response:', data);

            if (data.success) {
                // Parse the nested JSON string from backend
                const parsedData = JSON.parse(data.data);

                // Extract outputs safely
                const outputs = parsedData.outputs || [];

                if (outputs.length > 0) {
                    // Example: extracting labels and confidence if available
                    const labels = outputs[0].classification_predictions?.map(p => p.label) || [];
                    const confidenceScores = outputs[0].classification_predictions?.map(p => p.confidence) || [];

                    setResult(
                        `Detected: ${labels.join(', ') || 'N/A'}\nConfidence: ${confidenceScores.join(', ') || 'N/A'}`
                    );
                } else {
                    setResult('No objects detected.');
                }
            } else {
                setResult('No objects detected.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResult(`❌ Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pg_capture">
            <div className="row">
                <div className="col-12 content-1">
                    <h2>No telescope? Grab your smartphone!</h2>
                    <p>
                        No need to worry about a telescope. Use your smartphone and capture the night sky easily.
                        We provide the best settings for your device.
                    </p>
                </div>

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
