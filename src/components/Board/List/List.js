import React from 'react';
import Card from "../Card/Card";

import './styles.css';
import EditableHeader from "../../common/EditableHeader";

List.defaultProps = {
    title: '',
    cards: []
};

export default function List({ title, cards, onTitleChange }) {
    return (
        <div className="list">
            <h2 className="list__title">
                <EditableHeader onChange={onTitleChange}>{title}</EditableHeader>
            </h2>
            <div className="list__cards">
                {cards.map(card => <Card {...card} key={card.id} />)}
            </div>
        </div>
    );
}