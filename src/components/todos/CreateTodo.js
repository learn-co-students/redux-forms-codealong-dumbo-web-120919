import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  
  state = {
    todo: ""
  }
  
  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.todo} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: formData => dispatch({
      type: "ADD_TODO",
      payload: formData
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
