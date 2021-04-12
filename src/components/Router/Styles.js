import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import BackgroundImage from 'img/background.png';

export const Main = styled.section`
  background-image: url("${BackgroundImage}");
  background-color: #8FDFF4;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 81%;
  display: flex;
  align-items: center;
`;

export const CardOrder = withStyles({
  root: {
    width: '60vw',
    height: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  }
})(Card);
