import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  }

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={event => this.setState({ description: event.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={event => this.setState({ url: event.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          // Wrapping the button element as render prop function result with the Mutation component passing POST_MUTATION as a prop. 
          mutation={POST_MUTATION}
          // Passing description and url states as variables prop. 
          variables={{ description, url }}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateLink;