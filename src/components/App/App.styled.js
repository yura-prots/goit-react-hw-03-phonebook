import styled from 'styled-components';

import bg from '../../images/bg.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  margin-top: 25px;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  display: block;
  font-weight: 700;
  font-size: 24px;
`;
