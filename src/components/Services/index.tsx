import { Paper } from "@mui/material";
import { HeaderServices, MainServices, ServicesContainer, ServicesList } from "./styles";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
export function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, 
      });
    
      const slideIn = useSpring({
        transform: inView ? 'translatex(0%)' : 'translateX(-150%)',
      });
    return (
        <div ref={ref}>
            <animated.div style={slideIn}>
                <ServicesContainer id="services">
                    <h2>Serviços</h2>
                    <ServicesList>
                        <Paper sx={{
                            backgroundColor: 'grey.700',
                            padding: '1.5rem 2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            flexBasis: '350px',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: '1.875rem',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                'transform': 'scale(1.1)'
                            },
                            '@media (max-width: 1024px)' : {
                                width: '350px',
                                flexGrow: 0,
                                flexBasis: '250px'
                            }
                            
                        }}>
                            <HeaderServices>
                                <img 
                                    src="/assets/softwareDev.svg" 
                                    alt="Ícone relacionado ao desenvolvimento de software, uma hexágono com riscos dentro" 
                                />
                            </HeaderServices>
                            <MainServices>
                                <span>Software Development</span>
                            </MainServices>
                        </Paper>
                        <Paper sx={{
                            backgroundColor: 'grey.700',
                            padding: '1.5rem 2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            flexBasis: '350px',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: '1.875rem',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                'transform': 'scale(1.1)'
                            },
                            '@media (max-width: 1024px)' : {
                                width: '350px',
                                flexGrow: 0,
                                flexBasis: '250px'
                            }
                        }}>
                            <HeaderServices>
                                <img 
                                    src="/assets/webDev.svg" 
                                    alt="Ícone relacionado ao desenvolvimento web, quadrado verde escrito dev dentro" 
                                />
                            </HeaderServices>
                            <MainServices>
                                <span>Web Development</span>
                            </MainServices>
                        </Paper>
                        <Paper sx={{
                            backgroundColor: 'grey.700',
                            padding: '1.5rem 2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            flexBasis: '350px',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: '1.875rem',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                'transform': 'scale(1.1)'
                            },
                            '@media (max-width: 1024px)' : {
                                width: '350px',
                                flexGrow: 0,
                                flexBasis: '250px'
                            }

                        }}>
                            <HeaderServices>
                                <img 
                                    src="/assets/webDesign.svg" 
                                    alt="ícone relacionado ao Web Design, um cubo verde" 
                                />
                            </HeaderServices>
                            <MainServices>
                                <span>Web Design</span>
                            </MainServices>
                        </Paper>
                    </ServicesList>
                </ServicesContainer>
            </animated.div>
        </div>
    )
}