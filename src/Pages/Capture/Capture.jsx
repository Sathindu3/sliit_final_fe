import React, { useState } from 'react';
import './Capture.css';
import phoneNight from '../../Resources/Images/clearsky.png';
import settingsIcon from '../../Resources/Images/interface.png';
import uploadIcon from '../../Resources/Images/imagephone.png';
import sample1 from '../../Resources/Images/photo1.jpg';
import sample2 from '../../Resources/Images/photo2.jpeg';

function Capture() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="pg_capture">
            <div className="container">
                <div className="row">
                    {/* Heading */}
                    <div className="col-12 text-center capture-header">
                        <h2>📷 Capture the Night Sky</h2>
                        <p>Follow the guide and use your phone to upload or capture a stunning night photo.</p>
                    </div>

                    {/* Steps */}
                    <div className="col-12 capture-steps">
                        <div className="step-box">
                            <img src={phoneNight} alt="Night Sky" />
                            <h4>1. Go Outside</h4>
                            <p>Pick a clear night and dark spot for a better sky view.</p>
                        </div>

                        <div className="step-box">
                            <img src={settingsIcon} alt="Camera Settings" />
                            <h4>2. Adjust Camera</h4>
                            <p>Use Night Mode or set ISO 800–1600 and exposure to 10s manually.</p>
                        </div>

                        <div className="step-box">
                            <img src={uploadIcon} alt="Upload" />
                            <h4>3. Upload or Capture</h4>
                            <p>Upload from gallery or directly open your camera to snap a shot.</p>
                        </div>
                    </div>

                    {/* Upload & Camera */}
                    <div className="col-12 text-center upload-section">
                        {/* Upload from gallery */}
                        <input
                            type="file"
                            accept="image/*"
                            id="uploadGallery"
                            onChange={handleImageChange}
                            hidden
                        />
                        <label htmlFor="uploadGallery" className="upload-btn">
                            📁 Upload from Gallery
                        </label>

                        {/* Open Camera (mobile only) */}
                        <input
                            type="file"
                            accept="image/*"
                            capture="environment"
                            id="openCamera"
                            onChange={handleImageChange}
                            hidden
                        />
                        <label htmlFor="openCamera" className="upload-btn">
                            📷 Open Camera
                        </label>

                        {selectedImage && (
                            <div className="preview">
                                <p>Preview:</p>
                                <img src={selectedImage} alt="Preview" className="preview-img" />
                            </div>
                        )}

                        <p className="note">Accepted: JPG, PNG | Max Size: 10MB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Capture;