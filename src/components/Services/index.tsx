import { Paper } from "@mui/material";
import { HeaderServices, MainServices, ServicesContainer, ServicesList } from "./styles";
import { Animated, Ref} from "../../styles/Animations/animations";
import { useAnimatedEntry } from "../../hooks/useAnimatedEntry";

export function Services() {
    const { ref, slideIn } = useAnimatedEntry();
    return (
        <Ref ref={ref}>
            <Animated style={slideIn}>
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
            </Animated>
        </Ref>
    )
}