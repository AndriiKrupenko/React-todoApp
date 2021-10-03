import React from 'react';
import editSvg from '../../assets/img/edit.svg'

import './Tasks.scss';

const Tasks = () => {
    return (
        <div className="tasks">
            <h2 className="tasks__title">
                Фронтенд
                <img src={editSvg} alt="Edit icon" />
            </h2>
            <div className="tasks__items">
                <label className="checkbox">
                    <input type="checkbox" />
                </label>
            </div>
        </div>
    )
}

export default Tasks;
