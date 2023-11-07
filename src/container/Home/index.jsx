import { useState } from "react"
import { Container, Infor } from "./style"
import { FiSearch } from "react-icons/fi"
import api from "../../services/api"

function Home() {
  
  const [modalLocation, setLocation] = useState(false)
  const [input, setInput] = useState('')
  const [cep,setCep] = useState({})

  async function handleSearche(){
    if(input === ''){
      alert("Opa!, você esqueceu de coloca o cep, por favor preencha para podemos localizar")
      return
    }
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    }

    catch{
      alert("Opa, alguma coisa deu errrada :(")
      setInput('')
    }
  }

  return(

  <> 
    <Container>
        <div>
          <h1>Buscador de Cep</h1>
        </div>

        <div className="containerInput">
          <input type='text' 
          placeholder="Digite seu cep"
          value={input}
          onChange={(e) => setInput(e.target.value) }
          />

          <button onClick={handleSearche} >
            <FiSearch size="25" color="#000" />
          </button>
        </div>

    {Object.keys(cep).length > 0 && (
         <Infor>
         <h2>CEP :{cep.cep}</h2>
   
         <span>{cep.logradouro}</span>
         <span>{cep.complimento }</span>
         <span>{cep.bairro}</span>
         <span>{cep.localidade}</span>
         <span>{cep.uf}</span>
         <span>{cep.ddd}</span>
       </Infor>
    )}
   
    </Container>
    </>   
  )
}

export default Home