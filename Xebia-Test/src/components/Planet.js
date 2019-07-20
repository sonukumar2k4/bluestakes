import React from 'react';
const Planet = ({
    id,
    info,
    handleClick
  }) => {

    let fontSize = 100 + info.population_perc;

    return (
        <li
            style={{ fontSize: fontSize }}
            className={info.population === 'unknown' ? 'unknown' : 'known'}
            onClick={() => handleClick(info)}>
            {info.name}
        </li>
    )
}

export default Planet