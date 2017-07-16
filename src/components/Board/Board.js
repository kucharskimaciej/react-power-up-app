import React from 'react';
import {connect} from "react-redux";

import List from './List/List';
import './styles.css';
import {renameList} from "../../actions/lists";
import AddCard from "./AddCard/AddCard";
import {createCard} from "../../actions/card";

class Board extends React.Component {
    static defaultProps = {
        lists: []
    };

    handleRenameList(listId, title) {
        this.props.dispatch(renameList(listId, title));
    }

    handleAddCard(listId, title) {
        this.props.dispatch(createCard(listId, title));
    }

    render() {
        const {lists} = this.props;

        return (
            <div className="board">
                { lists.map(list =>
                    <div className="board__list" key={list.id}>
                        <List {...list}
                              onTitleChange={this.handleRenameList.bind(this, list.id)} />

                        <AddCard onAdd={this.handleAddCard.bind(this, list.id)} />
                    </div>
                ) }
            </div>
        );
    }
}


function mapStateToProps(state) {
    const listsWithCards = state.lists.map(list => {
        list.cards = state.cards.filter(card => card.list_id === list.id);
        return list;
    });

    return { lists: listsWithCards };
}

export default connect(mapStateToProps)(Board);