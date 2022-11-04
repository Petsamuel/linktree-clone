// import logo from './logo.svg';
import "./App.css";
import Links from "./components/links";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile__img">
          <div className="Profile_img" id="profile__img"></div>
          <div className="share-content" id="share"></div>
        </div>
        <div className="profile_name">
          <p>Samuel Peter Edidiong</p>
        </div>
        <div className="slack_name">
          <p id="slack">@bieefilled</p>
        </div>
      </header>
      <main className="main-section" role={"main"}>
        <Links
          twitter="Twitter"
          team="Zuri Team"
          book1="Zuri Books"
          python="Python Books"
          coders="Background Check for Coders"
          book2="Zuri Books"
          contact="Contact Me"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
