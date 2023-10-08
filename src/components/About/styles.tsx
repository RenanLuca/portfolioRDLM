import styled from "styled-components";


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
`
export const AboutDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.375rem;
    width: 750px;
    margin-top: 3rem;
    color: var(--white);
    @media (max-width: 1024px) {
        width: auto;
    }
    & p {
        text-align: center;
        font-size: 1.125rem;
        padding: 0 1rem 1rem 1rem;
        line-height: 1.3;
          
        @media (max-width: 1024px) {
            font-size: 0.9rem;   
        }
    }
    & h2 {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        
        @media (max-width: 1024px) {
            font-size: 2rem;   
        }
    }
`
export const AboutSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap:6.75rem;
    @media (max-width: 1024px) {
        flex-direction:column;
        align-items: center;
        gap: 4rem;
    }
`
export const AboutBulletPoints = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.125rem;

    & img {
        max-width: 62px;
    }
`
export const BulletPointsContent = styled.div`
    color: var(--white);
    text-align: center;
    & a {
        text-decoration: none;
        color: var(--white);
    }
    & h3 {
        font-size: 1.125rem;
        font-weight: bold;
    }
    & span {
        font-size: 1.125rem;
        &:hover {
            color: var(--green);
        }
    }
`
