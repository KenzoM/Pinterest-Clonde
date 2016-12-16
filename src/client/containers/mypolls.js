import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class MyPolls extends Component {
  componentDidMount(){
    let currentUserName = this.props.userName;
    this.props.fetchUserPosts(currentUserName)
  }
  renderCards({title, date, description, _id}){
    return(
      <div key={_id} className="col s12 m6 l4 center-align">
        <div className="card teal darken-1 hoverable">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <blockquote className="description ">{description}</blockquote>
          </div>
          <div className="card-action">
            <Link to={`poll/${_id}`}>Result</Link>
            <a href="#">{date}</a>
          </div>
        </div>
      </div>
    )
  }
  render(){
    const { userName } = this.props
    return(
      <main className="votes-container container">
        <div className="row welcome">
          <div className="col s12 center-align">
            <h3>{userName} Polls</h3>
            <p>Here are your list of polls that you've created!</p>
          </div>
        </div>
        <div className="row">
          {(this.props.voteData.vote).map(this.renderCards)}
        </div>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {
    voteData: state.voteData,
    userName: state.auth.userName
  };
}

export default connect(mapStateToProps, actions)(MyPolls)
