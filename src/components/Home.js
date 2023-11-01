import React from 'react';

import '../css/Home.css';

function Home() {
  return (
    <div className="content-card" >
      <div className="greeting">
        <span role="img" aria-label="Wave" className="wave-emoji" style={{fontSize:'60px', position: 'relative', bottom:'80px'}}><strong>
          👋 HELLO THERE!</strong>
        </span>
        
      </div>
      <p>I am <strong>Amrutha</strong>, a newbie in degree, but a not-so-newbie in tech.</p><br/>
      <p>I go by the motto <em><strong>"Solve the problem first, then code".</strong></em></p><br/>
      <p style={{fontSize:'30px', whiteSpace:'nowrap'}}><strong>Crafting commits and building possibilities, one at a time.</strong></p>
    </div>
  );
}

export default Home;
