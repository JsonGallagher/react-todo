import React from 'react';

class Todos extends React.Component {
  render() {
    console.log(this.props.todos);
    
    return (
      <h1>Todos</h1>
    );
  }
}

export default Todos;
