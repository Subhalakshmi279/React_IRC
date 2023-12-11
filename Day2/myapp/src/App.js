import './Asserts/CSS/style.css'
import Nav from './Components/Nav.js'
function App()
{
    return(

        

        <div>
            

        <form class="container"> 
        <div class="box">
            
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">News</a></li>
         </ul>
        </div>
        
        <h1>Registration page</h1>
        
        <input type="text" id="Name" className="correct" placeholder="Name"/>
       
        <input type="email" id="email"className="correct" placeholder="email"/>
        
        <input type="number" id="Number"className="correct" placeholder="Phone"/>
       
        <input type="datetime-local"className="correct"/>
        
        <input type="password" id="passr"className="correct" placeholder="password"/>
        <input type="password" id="pass"className="correct" placeholder="retype your password"/>

        <input type="submit"  className="but" value="SUBMIT"/>
        
   
</form>
        </div>
    )
}
export default App