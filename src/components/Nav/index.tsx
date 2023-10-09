import { NavContainer, NavItem, NavLogo, NavMenu, ScrollButton } from "./styles";
import { Link } from 'react-scroll';
import {useEffect, useState} from 'react'
import { ArrowCircleUp } from "@mui/icons-material";
export function Nav() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <NavContainer>
            <NavLogo>
               <img src="\assets\logo.png" alt="Este é o logo escrito RDLM em verde, que significa Renan de Luca Machado" />
            </NavLogo>
            <NavMenu>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <NavItem>Sobre mim</NavItem>
                </Link>
                
                <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <NavItem>Serviços</NavItem>
                </Link>
               
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <NavItem>Habilidades</NavItem>
                </Link>
                <Link
                    activeClass="active"
                    to="contactForm"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <NavItem>Contato</NavItem>
                </Link>
            </NavMenu>
            {showScrollButton && (
                <ScrollButton onClick={scrollToTop}>
                    <ArrowCircleUp sx={{
                        color: 'var(--green)',
                        fontSize: '3.5rem'
                    }}/>
                </ScrollButton>
            )}
        </NavContainer>
    )
}