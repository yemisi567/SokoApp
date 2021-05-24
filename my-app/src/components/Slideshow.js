import React from 'react'
import '../App.css'

const colors = ["#003277", "#00C49F", "#FFBB28"];
const delay = 3000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}>
             <h1><div className="row">
                    <div className="column">
                      <h3
                      style={{fontWeight: 700,
                      color:'white',
                      fontSize: 12,
                      marginTop: 50
                      }}> 
                      Having any <span style={{color:'coral'}}>issues</span> with<br />your order?</h3>
                    </div>
                    <div className="column">
                        <button className="button button2">Contact Us</button>
                    </div>
                  </div></h1>
             
             </div>
                     

             
        ))}
      </div>

     
    </div>
  );
}
export default Slideshow