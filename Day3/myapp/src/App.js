import Nav from"./Components/Nav";
import Footer from "./Components/Footer";
import "./Assets/CSS/Nav.css";

function App() {
  return (
    <div>
      <Nav/>
    <center><h1 className="but">WORLD OF VIEW</h1></center>
    <h2 className="new">Start Your New York Hop On Hop Off Adventure Here</h2>
    <Footer/>
   
    {/* <div className="bux"><center><button className="bix">Buy Tickets</button></center></div> */}
    <div className="text"><p className="name">Anchored by Wall Street in the Financial District of Lower Manhattan,</p> 
    <p className="name">New York City has been called both the world's
       leading financial and fintech center</p>
       <p className="name">And the most economically powerful city in the world.</p></div>
    </div>
  );
}

export default App
