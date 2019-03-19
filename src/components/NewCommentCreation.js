import React from 'react'
import { v4 } from 'uuid'
import Moment from 'moment'

function NewCommentCreation(props) {
    let _names = null
    let _message = null

    function handleNewComment(event) {
        event.preventDefault()
        props.newComment({ names: _names.value, message: _message.value, id: v4(), timePosted: new Moment() })
        _names.value = ''
        _message.value = ''
      }

      let background = {
        display: 'grid',
        backgroundColor: 'skyblue',
        height: 135,
        gridTemplateColumns: '1fr 4fr'
      }
      let input = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
      }
      let inputNameField = {
        margin: 5,
        width: 400,
        height: 25,
        fontSize: '14px',
        paddingLeft: '5px',
      }
    
      let inputMessageField = {
        margin: 5,
        width: 400,
        height: 45,
        fontSize: '14px',
        paddingLeft: '5px',
      }

      
      return (
        <div style={background}>
           <div style={input}>
            <div >
              <form onSubmit={handleNewComment}>
                <input style={inputNameField} type="text" placeholder="User Name" id='names' ref={(input) => { _names = input }} />
                <br />
                <input style={inputMessageField} type='text' id='message' placeholder='Message' ref={(input) => { _message = input }} />
                <button type="submit">Comment</button>
              </form>
            </div>
          </div>
        </div>  
  
        )
  }
  
  export default NewCommentCreation