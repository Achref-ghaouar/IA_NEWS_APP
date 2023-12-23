import React, { useState, useEffect } from 'react';
import Newcard from './Components/Newcard';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

const alanKey ='2f941b88d22f356ffcf758c4934abb0d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ x, articles, number }) => {
        if (x === 'newsHeadlines') {
          setNewsArticles(articles);
        
        } else if (x === 'open') {
          const numericNumber = wordsToNumbers(number, { fuzzy: true });
          if (articles[numericNumber] && articles[numericNumber].url) {
            window.open(articles[numericNumber].url);
        
          }
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <Newcard articles={newsArticles} />
    </div>
  );
};

export default App;
