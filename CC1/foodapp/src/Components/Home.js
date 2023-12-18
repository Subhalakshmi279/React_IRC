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
            {/* card */}

            
<main class="page-content">
  <div class="card">
    <div class="content">
      <h2 class="title">Mountain View</h2>
      <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">To The Beach</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Desert Destinations</h2>
      <p class="copy">It's the desert you've always dreamed of</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Explore The Galaxy</h2>
      <p class="copy">Seriously, straight up, just blast off into outer space today</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
</main>

{/* card2 */}
<main class="page-content2">
  <div class="card2">
    <div class="content2">
      <h2 class="title">Mountain View</h2>
      <p class="copy2">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button class="btn2">View Trips</button>
    </div>
  </div>
  <div class="card2">
    <div class="content2">
      <h2 class="title">To The Beach</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card2">
    <div class="content2">
      <h2 class="title">Desert Destinations</h2>
      <p class="copy2">It's the desert you've always dreamed of</p>
      <button class="btn2">Book Now</button>
    </div>
  </div>
  <div class="card2">
    <div class="content2">
      <h2 class="title">Explore The Galaxy</h2>
      <p class="copy2">Seriously, straight up, just blast off into outer space today</p>
      <button class="btn2">Book Now</button>
    </div>
  </div>
</main>

        </div>
    )

}
export default Home;