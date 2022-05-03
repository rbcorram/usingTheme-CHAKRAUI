import { Box } from "@chakra-ui/react";

function App() {
  /* 
  
- Criamos dentro de src uma arquivo thema com dois temas, mas poderiam ser mais. Um objeto com as cores e tudo q quiser colocar referente a tema. 

- No index.js exportamos esse tema e setamos uma constante currentTheme
para armazenar o tema atual

- A ideia é implementar uma forma de trocar esse tema atual com base no usuario, creio q seria uma dinamica parecida como trocar tema escuro e claro.

- Teriamos q ver como funcionaria essa dinamica, como armazenaria isso no banco pra gente puxar depois.
  
*/
  return (
    <div className="App">
      <Box bg="tertiary">Teste de tema</Box>
    </div>
  );
}

export default App;
