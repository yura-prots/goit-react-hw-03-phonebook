import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Field = styled(FormikField)`
  padding: 4px 4px 4px 8px;
  width: 300px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
`;

export const Button = styled.button`
  display: block;
  padding: 8px;
  min-width: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 14px;
  border: 1px solid ${p => p.theme.colors.black};
  background: transparent;
  text-align: center;
  cursor: pointer;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${p => p.theme.colors.green};
    transform: scale(1.1);
  }
`;
