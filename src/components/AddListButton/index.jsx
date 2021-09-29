import React, { useState } from "react";
import List from '../List';
import Badge from "../Badge";

import addSvg from '../../assets/img/add.svg';
import closeSvg from '../../assets/img/close.svg';

import './AddListButton.scss'

const AddListButton = ({colors}) => {
    const [state, setState] = useState(false);
    const [selectedColor, setSelectColor] = useState(colors[0].id);
    
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
                <img
                    onClick={() => setState(false)}
                    src={closeSvg}
                    alt="Close button"
                    className="add-list__popup-close-btn"
                />
                <input className="field" type="text" placeholder="Название списка" />
                <div className="add-list__popup-colors">
                    {
                        colors.map(color => (
                            <Badge
                                onClick={() => setSelectColor(color.id)}
                                key={color.id}
                                color={color.name}
                                className={selectedColor === color.id && 'active'}
                            />
                        ))
                    }
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    );
};

export default AddListButton;