// import React, { Component } from "react";
// import "./App.css";
// import FilmDetails from "./FilmDetails.js";
// import FilmListing from "./FilmListing.js";
// import TMDB from "./TMDB.js";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       films: false,
//       faves: [],
//       current: {}
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="film-library">
//           <FilmListing films={TMDB.films} />
//           <FilmDetails films={TMDB.films} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails.js";
import FilmListing from "./FilmListing.js";
import TMDB from "./TMDB.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: false,
      faves: [],
      current: {}
    };
  }

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            films={TMDB.films}
            filmsProps={this.props.films}
            favesProps={this.props.faves}
          />
          <FilmDetails films={TMDB.films} currentProps={this.props.current} />
        </div>
      </div>
    );
  }
}

export default App;
