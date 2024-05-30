import '../../App.css'
import marsImage from '../../marsWhite.png';

const landingPage = () => {

  return (
    <div className="mars-container">
      <div className="image-section">
      <img src={marsImage} className="App-logo" alt="mars"/>
      </div>
      <div className="text-section">
        <h1>MARS</h1>
        <p>Mastering Automated Response Solutions</p>
        <button className="get-started-button">Get Started</button>
        {/* <button onClick={navigateToLogin} className="get-started-button">Get Started</button> */}
      </div>
    </div>
  );
}

export default landingPage