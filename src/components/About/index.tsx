import { AboutBulletPoints, AboutContainer, AboutDescription, AboutSocials, BulletPointsContent } from "./styles";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
export function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3, 
    });
    
    const slideIn = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-100%) ',
    });
  
    return (
        <div ref={ref} id="about">
            <animated.div style={slideIn}>
                <AboutContainer >
                    <AboutDescription>
                        <h2>Sobre Mim</h2>
                        <p>
                            Olá! Sou o Renan, um apaixonado por tecnologia com formação técnica em informática e
                            atualmente estudante de Análise e Desenvolvimento de Sistemas na FACENS. Minha paixão é o
                            desenvolvimento web, minhas principais habilidades são React, NodeJs, TypeScript, MySQL e estilização
                            com Tailwind. Já tive a experiência de estágio no desenvolvimento de e-commerces com Magento.

                            Antes de retornar ao desenvolvimento, segui minha paixão como atleta profissional de eSports.
                            Agora, estou empolgado para combinar minha paixão por tecnologia com minhas experiências únicas.
                            Aberto a novas oportunidades e conexões, vamos construir algo incrível juntos!
                        </p>
                    </AboutDescription>
                    <AboutSocials>
                        <AboutBulletPoints>
                            <img src="/assets/aboutBulletPoints.svg" alt="Imagem com fundo preto e um ponto verde no meio" />
                            <BulletPointsContent>
                                <h3>Nome Completo</h3>
                                <span>Renan de Luca Machado</span>
                            </BulletPointsContent>
                        </AboutBulletPoints>
                        <AboutBulletPoints>
                            <img src="/assets/aboutBulletPoints.svg" alt="Imagem com fundo preto e um ponto verde no meio" />
                            <BulletPointsContent>
                                <h3>LinkedIn</h3>
                                <a 
                                    href="https://www.linkedin.com/in/renandeluca/"
                                     target="_blank"
                                >
                                    <span>Confira meu perfil!</span>
                                </a>
                            </BulletPointsContent>
                        </AboutBulletPoints>
                        <AboutBulletPoints>
                            <img src="/assets/aboutBulletPoints.svg" alt="Imagem com fundo preto e um ponto verde no meio" />
                            <BulletPointsContent>
                                <h3>Email</h3>
                                <a 
                                    href="mailto:renandelucamachado32@gmail.com"
                                    target="_blank"
                                >
                                    <span>renandeluca@gmail.com</span>
                                </a>
                            </BulletPointsContent>
                        </AboutBulletPoints>
                        <AboutBulletPoints>
                            <img src="/assets/aboutBulletPoints.svg" alt="Imagem com fundo preto e um ponto verde no meio" />
                            <BulletPointsContent>
                                <h3>Github</h3>
                                <a 
                                    href="https://github.com/RenanLuca"
                                    target="_blank"
                                >
                                    <span>Confira meus projetos!</span>
                                </a>
                            </BulletPointsContent>
                        </AboutBulletPoints>
                    </AboutSocials>
                </AboutContainer>
            </animated.div>
        </div>
    )
}