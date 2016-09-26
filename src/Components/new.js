import React from 'react';
import TextInput from './TextInput';
import * as articleActions from '../../actions/articleActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import '../../styles/header.scss';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: '',
    };
    this.updateSearchState = this.updateSearchState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    browserHistory.push(`/articles/${this.state.search}`);
  }

  updateSearchState(event) {
    const search = event.target.value;
    return this.setState({ search });
  }

  render() {
    return (
      <div className="header">
        <form className="form-inline" onSubmit={this.onSubmit}>
          <TextInput
            name="searchBy"
            label="Enter a Search Term"
            onChange={this.updateSearchState}
            placeholder="Donald Trump"
          />
          <div className="form-group">
            <a className="btn btn-default">
              {/*  eslint-disable max-len  */}
              {/*  eslint-enable max-len  */}
            </a>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
