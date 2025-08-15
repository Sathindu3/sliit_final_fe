import React, { useState } from 'react';
import './Learn.css';
import planet1 from '../../Resources/Images/planet1.png';
import planet2 from '../../Resources/Images/planet2.png';
import milkeyway from '../../Resources/Images/clearsky.png';

const data = {
    Planets: [
        {
            title: "Moon",
            desc: "The Moon is Earth's only natural satellite, orbiting at an average distance of 384,400 km...",
            img: planet2
        },
        {
            title: "Mars",
            desc: "Mars is the fourth planet from the Sun. It is often referred to as the 'Red Planet'...",
            img: planet1
        }
    ],
    Stars: [
        {
            title: "Sun",
            desc: "The Sun is the closest star to Earth and the center of our solar system...",
            img: planet1
        }
    ],
    Galaxies: [
        {
            title: "Milky Way",
            desc: "The Milky Way is the galaxy that contains our solar system. It appears as a band of light...",
            img: milkeyway
        }
    ],
    Others: [
        {
            title: "Black Hole",
            desc: "A black hole is a region of spacetime where gravity is so strong that nothing—not even light—can escape...",
            img: planet1
        }
    ]
};

function Learn() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleCategory = (category) => {
        setActiveCategory(prev => (prev === category ? null : category));
        setSearchTerm(''); // Clear search when switching category
    };

    const filteredItems = activeCategory
        ? data[activeCategory].filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <div className='pg_learn'>
            <img className="comet1" src={planet2} alt="Comet" />
            <div className="container">
                <div className="row">
                    <div className="col-12 content-1">
                        <h2>Learn About the Sky!</h2>
                        <div className="category-buttons">
                            {Object.keys(data).map(category => (
                                <button
                                    key={category}
                                    onClick={() => toggleCategory(category)}
                                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {activeCategory && (
                            <input
                                type="text"
                                className="search-input"
                                placeholder={`Search in ${activeCategory}`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        )}
                    </div>

                    <div className="col-12 content-2">
                        {filteredItems.map((item, index) => (
                            <div className="sub-1" key={index}>
                                <img src={item.img} alt={item.title} />
                                <div className="box-1">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learn;
