import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.75rem;
    @media (max-width:768px) {
        justify-content: center;
    }
`
export const NavLogo = styled.div`
    width: 200px;
    & img {
        font-size: 2.25rem;
        font-weight: bold;
        color: var(--white);
        width: 100%;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    @media (max-width: 768px) {
        display: none;
  }
`
export const NavItem = styled.span`
    color: var(--white);
    font-size: 1.125rem ;
    cursor: pointer;

    &:hover {
        color: var(--green);
    }
`


export const ScrollButton = styled.button`
  background: none;  
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`