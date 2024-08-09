import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styles from '../Button.module.css';

function Button ({text}) {
    return <button className={styles.Btn}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;