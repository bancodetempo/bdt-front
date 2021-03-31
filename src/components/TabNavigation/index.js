import React, { useEffect, useState } from 'react';
import './index.css';

const TabNavigation = (props) => {
  const [borderType, setBorderType] = useState('none');
  const [fontType, setFontType] = useState(700);

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
    <section className="tabContainer" style={{ borderBottom: borderType }}>
      <p style={{ fontWeight: fontType }}>{props.title}</p>
    </section>
  );
};

export default TabNavigation;
