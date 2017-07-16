import React from 'react';
import PropTypes from 'prop-types';

import './EditableHeader.css';

export default class EditableHeader extends React.Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
        onChange: PropTypes.func
    };

    state = {
        editing: false
    };

    toggleEdit(value = !this.state.editing) {
        this.setState({ editing: value });
    }

    stopEditing() {
        const value = this.textInput.value;
        this.toggleEdit();

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(value);
        }
    }

    componentDidUpdate() {
        if (this.state.editing) {
            this.textInput.focus();
        }
    }

    render() {
        const {children} = this.props;
        const {editing: isEditing} = this.state;

        let className = "editableHeader";
        if (isEditing) {
            className += " editableHeader--is-editing"
        }

        return (
            <div className={className} onClick={this.toggleEdit.bind(this, true)}>
                {isEditing ?
                    <input type="text"
                           defaultValue={children}
                           ref={(input) => { this.textInput = input; }}
                           onBlur={this.stopEditing.bind(this)} /> :
                    children
                }
            </div>
        )
    }
}