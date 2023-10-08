import styled from 'styled-components'

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7rem;
    margin-top: 8rem;
    @media (max-width: 768px) {
        margin-top: 5rem;
        flex-direction: column;
        gap: 3rem;
  }
`
export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.2rem;
    & h1 {
        color: var(--white);
        font-weight: bold;
        font-size: 3rem;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 2rem;
        }
    }
    & span {
        display: block;
        color: var(--gray-200);
        font-size: 1.125rem;
        margin-top: 0.625rem;
        font-weight: 500;
        @media (max-width: 768px) {
            text-align: center;
        }
    }
`
export const BannerImage = styled.div`
    height: 650px;
    flex-basis: 650px;
    flex-grow: 0;
    flex-shrink: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in-out;
    cursor: default;
    &:hover {
        transform: scale(1.1)
    }
    & img {
        width: 100%;
        border-radius: 999px;
        border: 20px solid var(--gray-900) ;
        outline: 1px solid rgba(79,79,79, 0.4);
        color: rgb(79, 79, 79);
    }
    @media (max-width: 768px) {
       width: 300px;
       flex: 0;
    }
`
export const ContentPresentation = styled.div`

`
export const ContentActions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.625rem ;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
  }
`


  