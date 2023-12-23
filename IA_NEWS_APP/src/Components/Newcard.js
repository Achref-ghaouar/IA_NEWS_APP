import React, { useState, useEffect } from 'react';
import './Newcard.css';

const Newcard = ({ articles }) => {
  console.log(articles);
  const [notification, setNotification] = useState(null);

  const createRows = () => {
    const rows = [];

    if (!articles || !articles.length) {
      return (
        <div className='Home'>
          <img src="https://avatars.githubusercontent.com/u/54960780?s=200&v=4" alt="" />
          <h1>WELCOME TO THE IA NEWS WEBSITE</h1>
          <div className='tellme'>
            <h2>FOR SEARCHING NEWS BY SORCE </h2>
            <h4> JUST CLICK ON THE MICRO ICON AND SAY "GIVE ME THE NEWS FROM <span>SOURCE <span> ( EXAMPLE : CNN , BBC , FRANCE24) </span></span>  "</h4>
            <h2>FOR SEARCHING NEWS BY TERM </h2>
            <h4> JUST CLICK ON THE MICRO ICON AND SAY "WHATS UP WITH <span>TERM <span> ( EXAMPLE : BITCOIN , TESLA , FOOTBALL) </span></span>  "</h4>
          </div>
        </div>
      );
    }

    let count = 0; // Initialize the counter
    let count2 = 0;
    for (let i = 0; i < articles.length; i += 3) {
      const rowArticles = articles.slice(i, i + 3);

      const row = (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', paddingLeft: '50px' }}>
          {rowArticles.map((article, index) => (
            <div key={index} style={{ flex: '0 0 30%', maxWidth: '30%', border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
              <img src={article.urlToImage || "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"} alt={article.title} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px', borderRadius: '4px' }} />
              <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>{article.title}</h3>
              <p style={{ fontSize: '14px', color: '#555' }}>{article.description}</p>
              <p>{count++}</p>
              
              
              <div style={{ marginTop: '10px', padding: '10px', background: '#eee', borderRadius: '4px' }}>
                <p>If you want to know more about the article, just say :</p>
                <p style={{ fontWeight: 'bold' }}>{"Open the article number " + count2++}</p>
              </div>
            </div>
          ))}
        </div>
      );

      rows.push(row);
    }

    return rows;
  };

  useEffect(() => {
    if (notification) {
    
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);

  
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div>
      {createRows()}
      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
};

export default Newcard;
