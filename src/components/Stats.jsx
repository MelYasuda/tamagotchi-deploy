import React from 'react';
import Background from './assets/background.png';
import PropTypes from 'prop-types';

function Stats(props) {
  return (
    <div className="tama-body">
      <style jsx>{`   
        .tama-body {
          background-color: #f8f8f8;
          background-image: url("${Background}");
          background-size: 350px;
          background-repeat: no-repeat;
          height: 210px;
          position: relative;
        }
        .stats-container {
          text-align: left;
          font-family: monospace;
          font-size: 20px;
          position: absolute;
          background-color: #cccccc;
          width: 330px;
          height: 190px;
          overflow-y: scroll;
          list-style: none;
          top: 10px;
          margin: 0 10px;
          padding: 10px;
          border: 5px double gray;
          border-radius: 5px;
        }
        .hearts {

        }
      `}</style>
      <ul className="stats-container">
        <li>Name: {props.tamagotchi.name}</li>
        <li>Age: {props.tamagotchi.age}</li>
        <li>Food Level:
          <span className='hearts'>
            {props.tamagotchi.foodLevel > 75 ? (
              '❤️❤️❤️❤️'
            ) : (
              props.tamagotchi.foodLevel > 50 ? (
                '❤️❤️❤️🖤'
              ) : (
                props.tamagotchi.foodLevel > 25 ? (
                  '❤️❤️🖤🖤'
                ) : (
                  props.tamagotchi.foodLevel > 0 ? (
                    '❤️🖤🖤🖤'
                  ) : (
                    '🖤🖤🖤🖤'
                  )
                )
              )
            )}
          </span>
        </li>
        <li>Happiness: 
          <span className='hearts'>
            {props.tamagotchi.happiness > 75 ? (
              ' ❤️❤️❤️❤️'
            ) : (
              props.tamagotchi.happiness > 50 ? (
                ' ❤️❤️❤️🖤'
              ) : (
                props.tamagotchi.happiness > 25 ? (
                  ' ❤️❤️🖤🖤'
                ) : (
                  props.tamagotchi.happiness > 0 ? (
                    ' ❤️🖤🖤🖤'
                  ) : (
                    ' 🖤🖤🖤🖤'
                  )
                )
              )
            )}
          </span>
        </li>
        <li>Sleep Level: {props.tamagotchi.sleepLevel} / 100</li>
        <li>Behavior: 
          <span>
            {props.tamagotchi.disciplineLevel > 75 ? (
              ' Angelic'
            ) : (
              props.tamagotchi.disciplineLevel > 50 ? (
                ' Good'
              ) : (
                props.tamagotchi.disciplineLevel > 25 ? (
                  ' Fair'
                ) : (
                  ' Bad'
                )
              )
            )}
          </span>
        </li>
      </ul>
    </div>
  );
}

Stats.propTypes = {
  tamagotchi: PropTypes.object
};

export default Stats;
