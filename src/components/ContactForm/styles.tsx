import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7.5rem;
    gap: 5rem;
    align-items: center;
    & h2{
        color: var(--white);
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
    }
    & form { 
        margin-bottom:5rem;
    }
    & #Copyright {
        color:var(--gray-500);
        font-size: 0.875rem;
        margin-bottom: 6.3rem;
    }
`
export const Form = styled.form`
    
`
export const FormContainer = styled.div`

`


export const MessageSent = styled.span`
    text-align: center;
    display: block;
    margin-top: 1.5rem;
    color: var(--green);
    font-size: 1.2rem;
`