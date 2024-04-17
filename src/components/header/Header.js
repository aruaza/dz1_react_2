import React from "react";
import './header.css'
import {Link} from "react-router-dom-v5-compat";
export default function Header() {
    return (
        <div className="header">
            <ul>
                <li>
                    <Link to={'/createCard'}>
                        CreateCard
                    </Link>
                </li>
                <li>
                    <Link to={'/card'}>
                        Card
                    </Link>
                </li>
            </ul>
        </div>
    );
}
