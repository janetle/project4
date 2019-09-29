
import React from 'react';

class About extends React.Component {
  
  render(){
    return(
      <div className = "tea-wrapper">
        <p className = "heading">It's About More Than Just Tea</p>
      
        <div className = "about">
          <div className = "just-tea">
            <img src = "/dacing.png" width = "90px" height = "90px" />
            <p className = "caption">For the people.</p>
            <p className = 'tea-desc'>Our tea are sourced directly from small batch producers over 30 years.</p>
          </div>
          <div className = "just-tea">
            <img src = "/treeGrow.jpg" width = "90px" height = "90px" />
            <p className = "caption">For the land.</p>
            <p className = 'tea-desc'>Our garden started as a wasteland, and we brought it back to life. Animals were brought back from extinction and dried bodies of water have replenished.</p>
          </div>
          <div className = "just-tea ">
            <img src = "/recyle.jpeg" width = "90px" height = "90px" />
            <p className = "caption">For the environment.</p>
            <p className = 'tea-desc'>Our revolutionary eco-canister doesn’t just look good...it does good! Every decision we make is one to reduce our global footprint.</p>
          </div>
          <div className = "just-tea ">
            <img src = "/hotCup.jpg" width = "90px" height = "90px" />
            <p className = "caption">For the taste.</p> 
            <p className = 'tea-desc'>Whether you prefer a bolder black tea in the morning or soothing herbal blends before bedtime, we've got the best-tasting teas for every palate.
</p> 
          </div>
        </div>
      </div>
      )
  }
    
}
export default About; 