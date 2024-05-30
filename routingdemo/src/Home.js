
import video1 from "./videos/video1.mp4"
import "./App.css"
function Home() {
    return(
        <div className="about">
           <h2>Welcome to our Homepage</h2>
           <div className="cards">

           <div className="card1">
            <img id="imag1" src="image/image2.jpeg" alt=""/>
           </div>

           <div className="card2">

            <img id="imag2" src="image/image3.psd" alt=""/>
           </div>

           <div className="card3">
            <img id="imag3" src ="image/image2.jpeg" alt=""/>
           </div>

           </div>

           <div className="videos">

           <div className="video1">
            <video class="child-vid" src={video1} controls />
            
           </div>

           <div className="video2">
            <video class="child-vid" src={video1} autoPlay loop muted />
           </div>

           <div className="video3">
           <video class="child-vid" src={video1} autoPlay loop muted />
           </div>
    </div>

           
           
           


        </div>
    )
}

export default Home