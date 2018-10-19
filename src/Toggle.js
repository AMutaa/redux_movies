import React from 'react';
import { connect } from 'react-redux';


const Toggle = ({ messageVisibility, dispatch }) => {
  return (
    <div>
      {messageVisibility && <p>You'll be seeing this if redux action is toggled</p>}
      <button onClick={() => {
        console.log('Button Clicked')
        console.log(messageVisibility)
        console.log(dispatch)
        dispatch({
          type: 'TOGGLE_MESSAGE'
        })
      }}>Toggle Me</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  messageVisibility: !state.message.messageVisibility,
});


export default connect(mapStateToProps)(Toggle);

