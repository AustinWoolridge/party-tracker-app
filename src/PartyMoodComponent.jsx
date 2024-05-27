import React, { useState } from 'react';

const PartyMoodComponent = () => {
    const [moodLevel, setMoodLevel] = useState(5);

    const haveFun = () => {
        setMoodLevel(moodLevel + 1);
    };

    return (
        <div>
            <h2>Party Mood Level</h2>
            <p>Mood Level : {moodLevel}</p>
            <button onClick={haveFun}>Fun buttoni</button>
        </div>
    );
};

export default PartyMoodComponent;