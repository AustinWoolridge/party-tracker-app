import React from 'react';
import PartyComponent from './PartyComponent';

const ParentComponent = () => {
    const guestList = ["Batuhan", "Berkhan", "Alihan", "Recep"];

    return (
        <div>
            <h2>Guest List</h2>
            <PartyComponent guests={guestList} />
        </div>
    );
};

export default ParentComponent;