import React from 'react';
import PropTypes from 'prop-types';

function CreateForm(props) {
  let _newTamaName = null;

  function handleFormSubmit(event){
    event.preventDefault();

    props.onNewTama(_newTamaName.value);
    _newTamaName.value = '';
  }

  return(
    <div id='form-wrapper'>
      <style jsx>{`
        #form-wrapper input {
          margin: 10px;
        }
      `}</style>
      <form onSubmit={handleFormSubmit}>
        <input className='form-control' type="text" ref={(input)=>{_newTamaName=input;}}/>
        <button className='btn btn-success' type='submit'>Name your Tamagotchi!</button>
      </form>
    </div>
  );
}

CreateForm.propTypes = {
  onNewTama: PropTypes.func
};

export default CreateForm;