import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import './Home.css';
import planet1 from '../../Resources/Images/planet1.png';
import planet2 from '../../Resources/Images/planet2.png';
import comet1 from '../../Resources/Images/comet2.png';
import mstore from '../../Resources/Images/mstore.png';
import applestore from '../../Resources/Images/applcestore.png';
import android from '../../Resources/Images/android.png';

function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className='pg_home'>
            <div className="row">
                <img className='comet1' src={comet1} alt="" />
                <div className="col-lg-12 col-md-12 col-xs-12 content-1">
                    <Carousel fade>
                        <Carousel.Item>
                            <img src={planet1} alt="" />
                            <Carousel.Caption className='caption-1'>
                                <h3>Best place for mobile astrophotography </h3>
                                <p>Try our settings for better output</p>
                     
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={planet2} alt="" />
                            <Carousel.Caption className='caption-2'>
                                <h3>Unlock the Galaxy with Your Phone</h3>
                                <p>Discover constellations, planets, and more</p>
                                <a href="#pattern-tool" className="button_try">Try Now</a>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                    <div className="sub-2">

                        <h3>Download our dedicated app for better experience</h3>

                        {/* <a href="#" className="button_try">Try on mobile</a> */}

                        <div className="store-links">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <img src={mstore} alt="Google Play" />
                            </a>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <img src={applestore} alt="Apple Store" />
                            </a>
                            <a href="https://www.android.com/" target="_blank" rel="noopener noreferrer">
                                <img src={android} alt="Android" />
                            </a>
                        </div>

                    </div>
                </div>

                {/* COUNT-UP SECTION */}
                <div ref={ref} className="col-lg-12 col-md-12 col-xs-12 content-2">
                    <div>
                        <ul>
                            <li>
                                <h5>
                                    {inView ? <CountUp end={20} duration={4} /> : 0}+
                                </h5>
                                <p>Mobile devices</p>
                            </li>
                            <li className="sub-1">
                                <h5>
                                    {inView ? <CountUp end={2000} duration={4} /> : 0}+
                                </h5>
                                <p>Stars and planets</p>
                            </li>
                            <li>
                                <h5>
                                    {inView ? <CountUp end={30} duration={4} /> : 0}+
                                </h5>
                                <p>Star patterns</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-xs-12 content-3" id="pattern-tool">
                    <h3 className="zoom-in">Want to know what you have captured?</h3>
                    <h5 className="fade-in">Try our powerful pattern recognition tool!</h5>
                    <a href="/capture" className="pattern-button">Launch Tool</a>
                </div>

            </div>
        </div>
    );
}

export default Home;
