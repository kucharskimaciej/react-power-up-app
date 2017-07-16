import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";



Card.defaultProps = {
    title: ''
};

export default function Card({ title, id }) {
    return (
        <Link to={`/details/${id}`} className="card">
            <h4 className="card__title">{title}</h4>
        </Link>
    );
}