import React, { useState } from "react";
import List from '../List';

import addSvg from '../../assets/img/add.svg';
import './AddListButton.scss'

const AddListButton = ({colors}) => {
    const [state, setState] = useState(false);
    
    return (
        <div className="add-list">
            <List
            onClick={() => setState(true)}
            items={[
            {
                className: "list__add-button",
                icon: (<img src={addSvg} alt="List icon" />),
                name: 'Добавить список'
            }
        ]}
        />
            {state && <div className="add-list__popup">
                <input className="field" type="text" placeholder="Название списка" />
                <div className="add-list__popup0colors">
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    );
};

export default AddListButton;