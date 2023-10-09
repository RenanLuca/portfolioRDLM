import { Button, Grid } from "@mui/material";
import { ContactContainer, Form, MessageSent } from "./styles";
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { 
    FormInput, 
    formContactInitialValues, 
    newMessageFormValidationSchema, 
     
} 
from "../../utils/ContactForm";
type newMessageFormData = zod.infer<typeof newMessageFormValidationSchema>

export function ContactForm() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3, 
    });
    
    const slideIn = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-100%) ',
    });

    const newMessageForm = useForm<newMessageFormData>({
        resolver: zodResolver(newMessageFormValidationSchema),
        defaultValues: formContactInitialValues
    })
    
    const { handleSubmit, reset, register, formState } = newMessageForm
    const { errors } = formState
    const [messageSent, setMessageSent] = useState(false)

    function handleSendNewMessage() {
        event?.preventDefault()
        setMessageSent(true)
        reset()
    }
    console.log('oi')
    return (
        <div ref={ref}>
            <animated.div style={slideIn}>
                <ContactContainer id="contactForm">
                    <h2>Entre em contato</h2>
                    <Form onSubmit={handleSubmit(handleSendNewMessage)}>
                        <Grid container rowSpacing={5} columnSpacing={4} sx={{maxWidth: '47rem'}}>
                            <Grid item xs={6}>
                                <FormInput 
                                    {...register('name')}
                                    error={!!errors.name}
                                    variant="standard" 
                                    label="Nome"
                                    id="Name"
                                    sx={{ width: '100%'}}
                                    helperText={errors.name ? errors.name?.message : null }
                                />
                            </Grid> 
                            <Grid item xs={6}>
                                <FormInput 
                                    {...register('lastName')}
                                    error={!!errors.lastName}
                                    variant="standard" 
                                    label="Sobrenome"
                                    id="LastName"
                                    sx={{ width: '100%' }}
                                    helperText={errors.lastName ? errors.lastName?.message : null }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormInput 
                                    {...register('email')}
                                    error={!!errors.email}
                                    variant="standard" 
                                    inputMode="email"
                                    label="Email"
                                    id="Email"
                                    sx={{ width: '100%' }}
                                    helperText={errors.email ? errors.email?.message : null }
                                />
                            </Grid>
                            <Grid item xs={6}>      
                                <FormInput 
                                    {...register('phoneNumber')}
                                    error={!!errors.phoneNumber}
                                    variant="standard" 
                                    label="Telefone"
                                    id="Number"
                                    sx={{ 
                                        width: '100%',
                                        }}
                                    helperText={errors.phoneNumber ? errors.phoneNumber?.message : null }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInput 
                                    {...register('message')}
                                    error={!!errors.message}        
                                    variant="outlined" 
                                    label="Mensagem"
                                    id="Message"
                                    sx={{ 
                                        width: '100%',
                                        height: '110px',
                                    }}
                                    helperText={errors.message ? errors.message?.message : null }
                                />
                            </Grid>
                        </Grid> 
                        <Button 
                            type="submit"
                            variant="contained"
                            sx={{
                                color: 'white',
                                display: 'block',
                                fontFamily: 'DM Sans',
                                margin: '2rem auto 0',
                                height: '50px',
                                borderRadius: 0,
                                padding: '0.875rem 2rem',
                                textTransform: 'none',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border:'1px solid #27AE60'
                                },

                            }}
                        >
                            Enviar Agora
                        </Button> 
                        {
                        messageSent ? 
                            <MessageSent>Mensagem Enviada! Em Breve entaremos em contato.</MessageSent>
                        : null
                        } 
                    </Form>

                    <span id="Copyright">© Renan De Luca 2023</span>
                </ContactContainer>
            </animated.div>
        </div>
    )
}
