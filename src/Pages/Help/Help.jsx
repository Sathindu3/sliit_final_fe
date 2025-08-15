import React from 'react';
import './Help.css';
import clearsky from '../../Resources/Images/clearsky.png';
import tripod from '../../Resources/Images/tripod.png';
import interface1 from '../../Resources/Images/interface.png';
import imagephone from '../../Resources/Images/imagephone.png';

function Help() {
    return (
        <div className='pg_help'>
            <div className="container">
                <div className="row">
                    {/* Title Section */}
                    <div className="col-12 content-1">
                        <h2>No telescope? Grab your smart phone!</h2>
                    </div>

                    {/* Steps Section */}
                    <div className="col-12 content-3">
                        <h3 className="steps-heading">📸 How to Capture the Night Sky with Your Phone</h3>
                        <div className="steps-container">
                            <div className="step">
                                <h5>🌌 Step 1: Choose a Clear Night</h5>
                                <p>Avoid clouds and bright city lights. The darker the sky, the better.</p>
                                <img src={clearsky} alt="Clear sky" />
                            </div>
                            <div className="step">
                                <h5>📍 Step 2: Use a Stable Surface</h5>
                                <p>Use a tripod or steady surface to reduce blur and shake.</p>
                                <img src={tripod} alt="Tripod" />
                            </div>
                            <div className="step">
                                <h5>📷 Step 3: Open Camera Settings</h5>
                                <p>Use manual or "Night Mode" settings. Set ISO to 800–1600 and exposure to 5–10 seconds.</p>
                                <img src={interface1} alt="Camera settings interface" />
                            </div>
                            <div className="step">
                                <h5>✨ Step 4: Use Our App Guide</h5>
                                <p>Follow on-screen overlays to align with visible constellations and planets.</p>
                                <img src={imagephone} alt="App guide on phone" />
                            </div>
                            <div className="step">
                                <h5>🧪 Step 5: Analyze and Share</h5>
                                <p>We'll process your photo and identify stars, planets, or galaxies. Share your results!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;
