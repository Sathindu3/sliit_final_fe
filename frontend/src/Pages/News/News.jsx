import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v4/articles?limit=12')
            .then(res => setNews(res.data.results))
            .catch(err => console.error('Error fetching news:', err));
    }, []);

    return (
        <div className='pg_capture'>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12 content-1">
                    <h2>See upcoming events in the sky! <br />Get updated.</h2>
                </div>

                <div className="col-lg-12 col-md-12 col-xs-12 content-2">
                    <h3 className='news-heading'>🌌 Latest Astronomy News</h3>
                    <div className='news-grid'>
                        {news.map(article => (
                            <div key={article.id} className='news-card'>
                                <img
                                    src={article.image_url || article.imageUrl || 'https://via.placeholder.com/400x180?text=No+Image'}
                                    alt={article.title}
                                    className="news-img"
                                />
                                <div className="news-content">
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='news-title'>
                                        {article.title}
                                    </a>
                                    <p className="news-date">
                                        {new Date(article.published_at || article.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
