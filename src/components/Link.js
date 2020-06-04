import React, { Component } from 'react';

// Renderering a single link. 
class Link extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          {this.props.link.description} {this.props.link.url} {this.props.link.createdAt}
        </div>
      </div>
    )
  }
}

export default Link;