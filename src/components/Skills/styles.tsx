import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-top: 7.5rem;

    & h2 {
        font-size: 3rem;
        color: var(--white);
        font-weight: bold;
        @media (max-width:768px) {
            font-size: 2rem;
        }
    }
`
export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
    cursor: default;
    &:hover {
        transform: scale(1.1)
    }
    & h3 {
        color: var(--gray-500);
        font-size: 4.5rem;
        font-weight: bold;
        text-align: center;
        opacity: 0.6;
    }
    & span {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--green);
        text-transform: uppercase;
    }
`

