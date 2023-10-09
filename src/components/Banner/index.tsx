import { Button } from "@mui/material";
import { BannerContainer, BannerContent, BannerImage, ContentActions, ContentPresentation } from "./styles";
import { Link } from "react-scroll";
import { useAnimatedEntry } from "../../hooks/useAnimatedEntry";
import { Animated, Ref } from "../../styles/Animations/animations";
export function Banner() {
    const { ref, slideIn } = useAnimatedEntry();
    return (
        <Ref ref={ref}>
            <Animated style={slideIn}>
                <BannerContainer>
                    <BannerContent>
                        <ContentPresentation>
                            <h1>Olá, Sou o Renan De Luca</h1>
                            <span>Frontend Developer</span>
                        </ContentPresentation>
                        <ContentActions>
                        <a 
                            href="assets\resume\CV_RenanDeLucaMachado.pdf" 
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                variant="outlined"  
                                sx={{
                                    bgcolor:'primary.main',
                                    color:'common.white',
                                    borderRadius: 0,
                                    padding:'0.75rem 1.7rem',
                                    border: '1px solid primary.main',
                                    fontSize: '0.875rem',
                                    textTransform: 'none',
                                    borderColor: 'primary.main',
                                    width:'150px',
                                    fontWeight: 500
                                }}    
                            >
                                Download CV
                            </Button>   
                        </a>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <Button 
                                    variant="outlined"
                                    sx={{
                                        color:'common.white'    ,
                                        borderColor:'grey.600',
                                        borderRadius: 0,
                                        padding:'0.75rem 1.7rem',
                                        fontSize: '0.875rem',
                                        textTransform: 'none',
                                        width:'150px',
                                        fontWeight: 500
                                    }}
                                    href="about"
                                >
                                    Leia Mais
                                </Button>  
                            </Link>
                        </ContentActions>
                    </BannerContent>
                    <BannerImage>
                        <img 
                            src="\assets\RenanDeLuca.jpg"
                            alt="Foto de Renan de Luca Machado,
                            um Homem, Branco, Cabelo Castanho Escuro,
                            Olhos Castanho Claro, Sentado em um Restaurante"
                            className={
                                /iPhone|iPad|iPod/.test(navigator.userAgent) ? 'safari-no-outline' : ''
                              }
                        />
                    </BannerImage>
                </BannerContainer>
            </Animated>
        </Ref>
    )
}