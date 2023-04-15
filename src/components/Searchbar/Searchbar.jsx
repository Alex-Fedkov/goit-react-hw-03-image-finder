import PropTypes from 'prop-types';
import { 
  Header,
  Form,
  Button,
  Span,
  Input,
  } from "./style.jsx";

const { Component } = require("react");

class Searchbar extends Component {
  state = {
    searchQuery: ""
  }

  onChange = event => {
    this.setState({ searchQuery: event.target.value });
  }

  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery.trim());
  }

  render () {
    return (
      <Header>
        <Form onSubmit={this.onSubmitForm}>
          <Button type="submit">
            <Span>Search</Span>
          </Button>

          <Input
            type="text"
            value={this.state.searchQuery}
            onChange={this.onChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,      
}

export default Searchbar;