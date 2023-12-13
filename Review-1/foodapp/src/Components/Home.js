// import { Link } from 'react-router-dom'
import image from '../Assets/images/img.jpg'

const Home = () => {

    return (
        <div className="class-wrapper">

          
            <div className='d-flex-home'>

                <div className="ima-wrapper">
                    <h1>It's  Not just an Food,</h1>
                    <h1>It's an Experience</h1>
                </div>

                <div className="nic-wrapper">
                    <img src={image} alt="hi" class="img-wrapper" />
                </div>
            </div>
            {/* <div className="tag">
            <button className='but'>Preview</button>
         </div> */}


            {/* <div class="card">
    <div class="content">
     
      <button class="btn">View Book</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
     
      <button class="btn">View Book</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
    
      <button class="btn">View Book</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      
      <button class="btn">View Book</button>
    </div>
  </div> */}

        </div>
    )

}
export default Home;