import React from 'react';

const FaqSection = () => {
    return (
        <div className="faq" >
            <h2>Any Questions? <span>FAQ</span></h2>
              <div className ="questions">
                  <h4>How do i start ?</h4>
                  <div className="answer">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, enim?</p>

                  </div>
              </div>
              <div className ="questions">
                  <h4>Daily Schedule</h4>
                  <div className="answer">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, enim?</p>
                      
                  </div>
              </div>
              <div className ="questions">
                  <h4>difffrent payment methods</h4>
                  <div className="answer">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, enim?</p>
                  </div>
              </div>
              <div className ="questions">
                  <h4>products to offer</h4>
                  <div className="answer">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, enim?</p>
                      
                  </div>
              </div>
        </div>
    )
}

export default FaqSection;