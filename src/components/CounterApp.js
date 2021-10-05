import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const sumar = () =>{
        setCounter( counter + 1 );
    }

    const resetear = () =>{
        setCounter( value );
    }

    const restar = () =>{
        setCounter( counter - 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ sumar } >Sumar +1</button>
            <button onClick={ resetear } >Resetear</button>
            <button onClick={ restar } >Restar -1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 2021
}

export default CounterApp
