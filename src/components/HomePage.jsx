import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div className='App'>
            <div>
        <img src="../src/assets/beers.png" alt="beers" />
        <h2>
          <Link to="/beers">All beers</Link>
        </h2>
        <p>
            Some text goes here!
        </p>
      </div>
      <div>
        <img src="../src/assets/random-beer.png" alt="random beer" />
        <h2>
          <Link>Random beer</Link>
        </h2>
        <p>
        Some text goes here!
        </p>
      </div>
      <div>
        <img src="../src/assets/new-beer.png" alt="new beer" />
        <h2>
          <Link>New beer</Link>
        </h2>
        <p>
        Some text goes here!
        </p>
      </div>
        </div>
    );
}

export default HomePage;
