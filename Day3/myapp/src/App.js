import Nav from"./Components/Nav";
import Footer from "./Components/Footer";
import "./Assets/CSS/Nav.css";
import topview from "./Assets/images/topview.mp4";


function App() {
  return (
    <div>
      <Nav/>

    <video className="background-video" autoPlay loop muted playsInline>
        <source src={topview} type="video/mp4" />
      </video>
      
      <div className="contain">
      <h1>Start Your New York Hop On Hop Off Adventure Here</h1>
    <div className="bux"><center><button className="bix">Buy Tickets</button></center></div>
    </div>

    <div className="final">
      <h2  className="para">What can be better than the huge green park? </h2>
      <h2 className="para">That is the reason why you should visit the Central Park and find there Sheep Meadow, </h2>
       <h2 className="para"> it is one of the most beautiful places in New York</h2>
    </div>
      
    <Footer/>
   
       </div>
  );
}

export default App
