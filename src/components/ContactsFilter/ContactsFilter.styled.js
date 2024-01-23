import styled from 'styled-components';

export const Filter = styled.input`
  width: 240px;
  padding: 4px 4px 4px 8px;
  border-radius: 4px;
  outline: none;
  border: none;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);

  &:focus {
    box-shadow: 1px 1px 4px 0px ${p => p.theme.colors.violet};
  }
`;
