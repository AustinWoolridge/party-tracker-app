import React from 'react';

const PartyComponent = (props) => {
    return (
        <div>
            <h3>Guests at the Party</h3>
            {props.guests.map((guest, index) => (
                <p key={index}>{guest}</p>
            ))}
        </div>
    );
};

export default PartyComponent;