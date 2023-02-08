import fay from '../assets/big.jpg'

function About() {
  

    return (
      <div id='about'>
  <h2>About</h2>
  <div className="about-container">

    <div className="bio">
      <h3>Who am i?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsum quasi saepe cum ducimus, voluptate voluptatum explicabo minus cupiditate dolores minima, dolorem nisi.
         Illo ea praesentium repudiandae nihil dolores harum?</p>

         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Voluptas, unde quibusdam minus quasi veniam enim distinctio explicabo, officia, rem iste animi adipisci est consequatur? In accusamus dolore maiores officiis non?</p>

           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla sapiente earum! Amet hic doloremque saepe ullam sunt modi obcaecati!</p>
 </div>

    <div className="profile-image">
      <img src={fay} alt="" />

    </div>
  </div>

      </div>
    )
  }
  
  export default About
 