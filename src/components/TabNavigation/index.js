import React, { useEffect, useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const TabNavigation = (props) => {
  const [borderType, setBorderType] = useState('none');
  const [fontType, setFontType] = useState(700);
  const history = useHistory();

  const goToPage = (page) => {
    history.push(`/${page}`);
  };

  useEffect(() => {
    if (props.isActive) {
      setBorderType('5px solid #E61B76');
      setFontType(900);
    } else {
      setBorderType('none');
      setFontType(700);
    }
  }, [props.isActive]);

  return (
    <section onClick={() => goToPage(props.page)} className="tabContainer" style={{ borderBottom: borderType }}>
      <p style={{ fontWeight: fontType }}>{props.title}</p>
    </section>
  );
};

TabNavigation.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
};

export default TabNavigation;
