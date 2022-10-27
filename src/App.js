import logo from './logo.svg';
import './App.css';
import Profile_image from './profile__img.png';
import Links from './components/links'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile__img" id="profile__img">
          <img src={Profile_image} alt="Profile_image" />
        </div>
        <div className="profile_name">
          <p>Annette Black</p>
        </div>

      </header>
      <main className='main-section' role={"main"}>
        <Links twitter="Twitter" team="Zuri Team" book1="Zuri Books" python="Python Books" coders="Background Check for Coders" book2="Zuri Books" />
        <div class="social-media-container">
          
          
        </div>
      </main>
      <footer>
        <div>

        </div>
      </footer>
    </div>
  );
}

export default App;
