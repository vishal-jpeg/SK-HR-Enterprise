import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" style={{ position: 'relative', textAlign: 'center' }}>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                
                <a
    href="#Contact"
    className="btn btn-custom btn-lg page-scroll"
    style={{
      position: 'absolute',
      top: '75%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}
  >
    Contact Us
  </a>
  <script src="//code.tidio.co/pyrul9dl4isngp3ftlgvakecwuj8uxk0.js" async></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
