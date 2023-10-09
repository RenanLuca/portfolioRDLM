import { Paper } from "@mui/material";
import { Skill, SkillsContainer } from "./styles";
import { Animated, Ref } from "../../styles/Animations/animations";
import { useAnimatedEntry } from "../../hooks/useAnimatedEntry";
export function Skills() {
    const { ref, slideIn } = useAnimatedEntry();
    return (
        <Ref ref={ref} id="skills">
            <Animated style={slideIn}>
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
            </Animated>
        </Ref>
    )
}