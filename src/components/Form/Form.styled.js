import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
    width: 320px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: 1px solid #31d0aa;
    border-radius: 16px;
`
export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;   
    color: #434455;
`

export const StyledField = styled(Field)`      
    padding: 8px 16px;    
    outline: transparent;
    border: 1px solid #8e8f99;
    border-radius: 8px;    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));   
`
export const StyledErrMessage = styled(ErrorMessage)`
    color: #d06a31;
    font-size: 12px;
`

export const AddContact = styled.button`
    font-weight: 500; 
    width: 150px;
    height: 26px;
    border: 1px solid #8e8f99;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #fff;
    background-color: #5ad9bb;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);        

    &:hover{
        background-color: #31d0aa;       
    }
`
