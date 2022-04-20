import React from 'react';

class Player extends React.Component {
  render() {
    const { movie = {}, category = {} } = this.props;
    return(
      <section>
        <h1>{movie.title}</h1>
        <section>
          <video width="420" height="315" controls>
            <source src="https://www.youtube.com/watch?v=okVCUCUmaPI" type="video/mp4" />
            Browser não suporta!
          </video>
        </section>
        <h3>
          {category.name} - {movie.released}
        </h3>
      </section>
    );
  }
}

export default Player;
