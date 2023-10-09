import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    gap: 10px;
    text-transform: capitalize;
`
export const DeleteBtn = styled.button`
    font-weight: 500;    
    letter-spacing: 0.04em;
    width: 100px;
    height: 26px;
    border: 1px solid #8e8f99;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #31d0aa;
    background-color: #fff;    
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);
     &:hover{ 
        color: #fff;
        background-color: #27a688; 
    } 
`