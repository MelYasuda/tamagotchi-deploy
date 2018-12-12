import React from 'react';
import PropTypes from 'prop-types';
import CreateForm from './CreateForm';
import { Link } from 'react-router-dom';
import Egg from './assets/egg.png';

function Home(props) {
  return (
    <div className='egg-page'>
      <style jsx>{`
        .egg-page {
          text-align: center;
          width: 500px;
        }
      `}</style>
      {props.tamagotchi.name ? (
        <div>
          <Link to='/detail'><img src={Egg} /></Link>
          <h2>Click the egg to hatch {props.tamagotchi.name}</h2>
        </div>
      ) : (
        <div>
          <CreateForm onNewTama={props.onNewTama} />
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  tamagotchi: PropTypes.object,
  onNewTama: PropTypes.func
};

export default Home;
