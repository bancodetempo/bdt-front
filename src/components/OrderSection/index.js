import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const OrderSection = (props) => {
  return (
    <div>
      <div>
        <section id="title-container">
          {
            props.image &&
            <img
              className="icon-exchange"
              src={props.image}
              alt="Ícone de Troca"
            />
          }
          <span className="title-input">{props.title}</span>
        </section>
        <p className="subtitle-input">{props.text}</p>
        {props.slot}
      </div>
    </div>
  );
};

OrderSection.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.node,
  slot: PropTypes.node
};

export default OrderSection;
