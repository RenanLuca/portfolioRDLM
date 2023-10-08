import styled from "styled-components";


export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    margin-top: 7.5rem;

    & h2 {
        color: var(--white);
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        @media (max-width: 1024px) {
            font-size: 2rem;
        }
    }
`
export const ServicesList = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3.75rem;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`
export const HeaderServices = styled.div`
    
`
export const MainServices = styled.div`

    & span {
        font-size: 2.25rem;
        font-weight: 500;
        color: var(--gray-400);
        display: block;
    }
`