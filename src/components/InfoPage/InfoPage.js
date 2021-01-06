import React from 'react';
import { connect } from 'react-redux';
import {Card} from '@material-ui/core';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>
//       Shelf Page
//     </p>
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like: hello


class InfoPage extends React.Component {
 state = {
   newItem: {
     description: '',
     image_url: '',
     id: `${this.props.reduxState.user.id}`
   }
 }
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_ITEM'})
  }
  handleChange = (propertyName, event) => {
    this.setState({
      newItem: {
          ...this.state.newItem,
          [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_ITEM', payload: this.state.newItem})
    
  }
  
  render() {
    return (
      <>
        <p>Info Page</p>
        <form>
          <label>Description</label>
          <input type="text" 
          value={this.state.newItem.description}
          onChange={(event) => this.handleChange('description', event)}/>

          <label>Image URL</label>
          <input type="text"
          value={this.state.newItem.image_url}
          onChange={(event) => this.handleChange('image_url', event)}/>

          <button onClick={this.handleSubmit}>Submit</button>
        </form> 

        <div>
        {this.props.reduxState.itemReducer.itemReducer.map((item) =>

          <Card key={item.id}>{item.description} <img src={item.image_url} alt="changing image"/></Card>
          
        )}
        </div>
      </>


    )
  }
}

const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(InfoPage);
