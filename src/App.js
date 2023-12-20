import logo from './logo.svg';
import './App.css';
import searchBar from './searchbar';

function App() {
  

  return (
    <div>
      <div id="Title">
        <h1>
          <span id='whiteLetters'>Ja</span>
          <span id='purpleLetters'>mmm</span>
          <span id='whiteLetters'>ing</span>
        </h1>
      </div>

      <div class="body">
        <searchBar />

        <div id="resultsBox">
          <div id="resultsContainer">
            <h2>Results</h2>
          </div>
        </div>

        <div>
          <div id="playlistContainer">
            <h2>Playlist</h2>
          </div>
        </div>


          
      </div>
        
    </div>
    


    
  );
};

export default App;
