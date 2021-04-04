import React, { useEffect, useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const TabNavigation = (props) => {
  const history = useHistory();
  const page = useSelector(state => state.currentPage);
  const [borderType, setBorderType] = useState('none');
  const [fontType, setFontType] = useState(700);

  const goToPage = (page) => {
    history.push(page);
  };

  useEffect(() => {
    if (page === props.path) {
      setBorderType('5px solid #E61B76');
      setFontType(900);
    } else {
      setBorderType('none');
      setFontType(700);
    }
  }, [page, props.path]);

  return (
    <section onClick={() => goToPage(props.path)} className="tabContainer" style={{ borderBottom: borderType }}>
      <p style={{ fontWeight: fontType }}>{props.title}</p>
    </section>
  );
};

TabNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default TabNavigation;
