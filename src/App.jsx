import { Header } from "./components/Header"
import Form from "./components/Form"
import Button from "./components/Button"
import { Container, Title, Row } from "./styles"

const App = () => {

  return (
    <Container>
        <Header />
        <Row>
        <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        <form action="">
        <Form />
        </form>
        </Row>
    </Container>
  )
}

export default App
