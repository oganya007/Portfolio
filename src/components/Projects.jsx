import nft from '../assets/nft.jpg'
function Projects() {

    return (
      <div id='projects'>
  <h2>Projects</h2>
  <p>These below are links to my projects</p>
  <div className="box-container">
    <div className="box">
    <img src={nft} alt="This is an image of an nft logo" />
    <a href="https://benable.com/faq">Github Link</a>
</div>

    <div className="box">
    <img src={nft} alt="This is an image of an nft logo" />
    <a href="https://benable.com/faq">Github Link</a>
</div>

    <div className="box">
    <img src={nft} alt="This is an image of an nft logo" />
    <a href="https://benable.com/faq">Github Link</a>
</div>

  </div>
      </div>
    )
  }
  
  export default Projects
  