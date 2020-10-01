import React from 'react';
import './index.css';

import Autocomplete from 'components/Autocomplete/AsyncAutocomplete';
import InputOrder from 'components/Input/index';

const OrderSection = (props) => {

  return(
    <div>
      {props.inputType === "autocomplete"?
        <div>
          <p className="title-input">{props.title}</p>
          <p className="subtitle-input">Insira o nome de quem <b>{props.text}</b> o serviço</p>
          <Autocomplete
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
        </div>
      :
        <div>
          <section id="title-container">
            <img className="icon-exchange" src={props.image} className="icon-exchange" alt="Ícone de Troca" />
            <span className="title-input">{props.title}</span>
          </section>
          <p className="subtitle-input">{props.text}</p>
          <InputOrder
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      }
    </div>
  )
}

export default OrderSection;