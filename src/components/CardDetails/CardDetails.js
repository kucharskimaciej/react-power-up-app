import React from 'react';
import {connect} from "react-redux";
import EditableHeader from "../common/EditableHeader";

import './styles.css';
import {moveCard, removeCard, updateCard} from "../../actions/card";

class CardDetails extends React.Component {
    close() {
        this.props.history.goBack();
    }

    onRemove() {
        this.props.dispatch(removeCard(this.props.card.id));
        this.close();
    }

    onRename(title) {
        this.props.dispatch(updateCard(this.props.card.id, { title }));
    }

    onMove(listId) {
        this.props.dispatch(moveCard(this.props.card.id, listId));
    }

    render() {
        const {card, list: currentList, lists} = this.props;

        if (!card) {
            return null;
        }

        return (
            <aside className="cardDetails">
                <section className="cardDetails__modal">
                    <div className="cardDetails__body">
                        <div className="cardDetails__details">
                            <h2 className="cardDetails__details__title">
                                <EditableHeader onChange={this.onRename.bind(this)}>{card.title}</EditableHeader>
                            </h2>
                            in list <strong>{currentList.title}</strong>
                        </div>

                        <aside className="cardDetails__actions">
                            <div className="cardDetails__move">
                                <strong>Move to: </strong>
                                <ul>
                                    {lists.filter(list => list.id !== currentList.id).map(targetList =>
                                        <li key={targetList.id}>
                                            <a onClick={this.onMove.bind(this, targetList.id)}>{targetList.title}</a>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <button className="button" onClick={this.onRemove.bind(this)}>
                                <i className="fa fa-trash" />
                                Remove card
                            </button>
                        </aside>
                    </div>

                    <span className="cardDetails__modal__close" onClick={this.close.bind(this)}>
                        <i className="fa fa-close" />
                    </span>
                </section>

                <div className="cardDetails__backdrop" onClick={this.close.bind(this)} />
            </aside>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const {match} = ownProps;
    const id = Number(match.params.id);
    let card;

    const list = state.lists.find(list => {
        card = list.cards.find(card => card.id === id);

        return !!card;
    });

    return { card, list, lists: state.lists };
}

export default connect(mapStateToProps)(CardDetails);