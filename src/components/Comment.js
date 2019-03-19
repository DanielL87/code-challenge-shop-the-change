import React from 'react';
import PropTypes from 'prop-types'

function Comment(props){

    let feedList = {
        display: 'grid',
        gridTemplateColumns: '1fr 6fr',
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: '1.5'
      }

      let text = {
        textAlign: 'left'
      }

      let userName = {
        fontWeight: 'bold'
      }

    return (
        <div style={feedList}>
           <h3 style={userName}>{props.names}</h3>
            <p style={text}><em>{props.message}</em></p>
            <h4>{props.formattedWaitTime}</h4>
        </div>
      );
    }
    
    export default Comment;
    
    Comment.propTypes = {
        names: PropTypes.string,
        message: PropTypes.string   
    }