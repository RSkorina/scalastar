import { Switch } from '@mui/base/Switch';
import { ComponentClass, useState } from 'react';

import './BasicSwitch.css'

export const BasicSwitch = ({
        isOn,
        handleToggle,
        onColor='#000000',
        offColor='#FF0000'
    }: {
        isOn: boolean,
        handleToggle: (e: React.FormEvent<HTMLInputElement>) => void,
        onColor?: string,
        offColor?: string,
    }) => {
    const backgroundColor: string = isOn ? onColor : offColor 
    return (
        <>
        <input
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
        />
        <label
            style={{ background: backgroundColor}}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
            <span className={`react-switch-button`} />
        </label>
        </>
    );
};

