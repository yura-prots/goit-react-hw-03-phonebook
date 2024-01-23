import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DeleteBtn = styled.button`
  min-width: 40px;
  border: none;
  padding: 4px;
  cursor: pointer;
  background: transparent;
  border-radius: 18px;
  font-size: 14px;
  text-align: center;

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${p => p.theme.colors.tomato};
  }
`;
