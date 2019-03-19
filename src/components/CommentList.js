import React from 'react';
import Comment from './Comment';
import NewCommentCreation from './NewCommentCreation';
import Moment from 'moment'

class CommentList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      masterCommentList: []
    }
    this.handleAddingNewCommentToList = this.handleAddingNewCommentToList.bind(this)  
}
componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePostElapsedWaitTime(),
    5000
    )
  }

  updatePostElapsedWaitTime() {
    let newMasterCommentList = this.state.masterCommentList.slice()
    newMasterCommentList.forEach((comment) =>
      comment.formattedWaitTime = (comment.timePosted).fromNow(true)
    )
    this.setState({masterCommentList: newMasterCommentList})
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer)
  }

  displayTimePosted(timePosted) {
    return timePosted.from(new Moment(), true)
  }

    handleAddingNewCommentToList(newComment) {
        console.log(newComment)
        let newMasterCommentList = this.state.masterCommentList.slice()
        newComment.formattedWaitTime = (newComment.timePosted).fromNow(true)
        newMasterCommentList.push(newComment)
        this.setState({ masterCommentList: newMasterCommentList })
    }

    render() {
        return (
          <div>
            <NewCommentCreation newComment={this.handleAddingNewCommentToList}/>
            {this.state.masterCommentList.map((post) =>
            <Comment 
            names={post.names}
            message={post.message}
            formattedWaitTime={post.formattedWaitTime}
            key={post.id}
            />
            )}
          </div>
        );
    }
}


export default CommentList