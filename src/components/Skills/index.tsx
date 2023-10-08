import { Paper } from "@mui/material";
import { Skill, SkillsContainer } from "./styles";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
export function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4, 
      });
    
      const slideIn = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-100%) ',
      });
    return (
        <div ref={ref} id="skills">
            <animated.div style={slideIn}>
                <SkillsContainer>
                    <h2>Minhas Habilidades</h2>
                    <Paper sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '3.75rem 7.8rem',
                        backgroundColor: 'grey.700',
                        border: '1px solid',
                        borderColor: 'grey.500',
                        '@media (max-width: 1024px)' : {
                            flexDirection: 'column',
                            gap: '3rem',
                            width: 'auto',
                            padding: '3.5rem 4rem'
                            
                        }
                    }}>
                        <Skill>
                            <h3>30%</h3>
                            <span>HTML</span>
                        </Skill>
                        <Skill>
                            <h3>30%</h3>
                            <span>Css</span>
                        </Skill>
                        <Skill>
                            <h3>25%</h3>
                            <span>JavaScript</span>
                        </Skill>
                        <Skill>
                            <h3>15%</h3>
                            <span>ReactJs</span>
                        </Skill>
                    </Paper>
                </SkillsContainer>
            </animated.div>
        </div>
    )
}