import {TextField, styled } from "@mui/material";
import * as zod from 'zod'
export const FormInput = styled(TextField)(({ theme }) => ({
    '& .MuiInput-input': {
        paddingBottom: '0.6rem',
        color: 'white', // Defina o padding desejado aqui
      },
    '& label': {
      color: '#4F4F4F',
      fontWeight: 'bold'  
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#4F4F4F',
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
      '& fieldset': {
        borderColor: '#4F4F4F',
        height: '110px',
  
      },
    },
  }));


export const newMessageFormValidationSchema = zod.object({
    name:  zod.string().min(1,"Preencha o campo de Nome"),
    lastName: zod.string().min(1,"Preencha o campo de Sobrenome"),
    email: zod.string().email('Preencha um email válido'),
    phoneNumber: zod.string().min(1,"Preencha o campo de Telefone"),
    message: zod.string().min(1,"Preencha o campo de Mensagem")
  })


export const formContactInitialValues = {
    name: "",
    lastName:"",
    phoneNumber:'',
    email: '',
    message : '',
}
