import { NavContainer, NavItem, NavLogo, NavMenu, ScrollButton } from "./styles";
import { Link, animateScroll as scroll } from 'react-scroll';
import {useEffect, useState} from 'react'
import { ArrowCircleUp } from "@mui/icons-material";
export function Nav() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Função para rolar até o topo
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Rolar suavemente
      });
    };
  
    // Listener para mostrar/ocultar o botão com base na posição da rolagem
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
  
    // Adicione um event listener para rolagem quando o componente montar
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <NavContainer>
            <NavLogo>
               <img src="public\assets\logo.png" alt="" />
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