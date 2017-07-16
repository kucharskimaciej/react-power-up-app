import * as React from "react";
import PropTypes from 'prop-types';

import './styles.css';

export default class AddCard extends React.Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };

    state = {
        title: '',
        adding: false
    };

    handleTitleChange() {
        this.setState({
            title: this.input.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.title);
        this.reset();
    }

    reset() {
        this.setState({
            title: '',
            adding: false
        });
    }

    toggleForm() {
        this.setState({ adding: !this.state.adding });
    }

    componentDidUpdate() {
        if (this.state.adding) {
            this.input.focus();
        }
    }

    render() {
        const content = this.state.adding ?
            <form className="addCard__form" onSubmit={this.handleSubmit.bind(this)}>
                    <textarea className="addCard__input"
                              value={this.state.title}
                              onChange={this.handleTitleChange.bind(this)}
                              ref={(i) => this.input = i } />

                <footer className="addCard__footer">
                    <button className="button button--success">
                        Add
                    </button>
                    <button type="button"
                            className="button"
                            onClick={this.reset.bind(this)}>
                        <i className="fa fa-close"></i>
                    </button>
                </footer>
            </form> :
            <div className="addCard__prompt" onClick={this.toggleForm.bind(this)}>
                <p>
                    <i className="fa fa-plus"></i> Add a card
                </p>
            </div>;

        return (
            <div className="addCard">
                {content}
            </div>
        );
    }
}