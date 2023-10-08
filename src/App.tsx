import { ThemeProvider } from "@mui/material";
import { Banner } from "./components/Banner";
import { Nav } from "./components/Nav";
import { HomeContainer } from "./styles/App/styles";
import { theme } from "./styles/themes/DefaultTheme";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { ContactForm } from "./components/ContactForm";

export function App() {

  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <Nav />
        <Banner />
        <About />
        <Services />
        <Skills />
        <ContactForm />
      </HomeContainer>
    </ThemeProvider>
  )
}


