# iSchedule

iSchedule é um aplicativo de agendamento de tarefas desenvolvido com React Native. O objetivo deste aplicativo é fornecer uma interface intuitiva para listar, adicionar, editar, apagar e marcar tarefas como concluídas. Os dados são armazenados localmente usando o AsyncStorage.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

- **`src/`**: Contém o código-fonte do aplicativo.
  - **`assets/`**: Imagens, ícones e outros recursos estáticos.
  - **`components/`**: Componentes reutilizáveis, como BottomSheet e Modal.
  - **`screens/`**: Telas principais do aplicativo, como a tela de tarefas agendadas e concluídas.
  - **`services/`**: Serviços para manipulação de dados, incluindo persistência usando AsyncStorage.
  - **`hooks/`**: Hooks personalizados para encapsular lógica de estado e operações.
  - **`utils/`**: Funções utilitárias e constantes.
  - **`navigation/`**: Configuração de navegação, incluindo o bottom navigator.
  - **`context/`**: Contextos para gerenciamento de estado global.
  - **`types/`**: Definições de tipos TypeScript, se estiver usando.

## Tecnologias Usadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **React Navigation**: Biblioteca para navegação entre telas e gerenciamento de navegação.
- **React Native Bottom Sheet**: Biblioteca para criar bottom sheets interativos.
- **AsyncStorage**: Biblioteca para armazenamento local persistente de dados.
- **TypeScript**: Superset do JavaScript para uma melhor tipagem e desenvolvimento mais seguro.
- **Jest**: Framework de testes para garantir a qualidade do código.
- **ESLint e Prettier**: Ferramentas para linting e formatação de código.

## Comandos Disponíveis

- **`yarn android`**: Inicia o aplicativo no emulador ou dispositivo Android.
- **`yarn ios`**: Inicia o aplicativo no simulador iOS.
- **`yarn lint`**: Executa o linting do código fonte.
- **`yarn start`**: Inicia o servidor de desenvolvimento React Native.
- **`yarn test`**: Executa os testes com Jest.

## Configuração Inicial

1. **Instalar Dependências**:

   Após clonar o repositório, instale as dependências do projeto:

   ```bash
   yarn install
   ```

2. **Configuração do Ambiente**:

   Configure as variáveis de ambiente e as ferramentas necessárias, como o JDK e o Android SDK.

3. **Executar o Aplicativo**:

   Para iniciar o aplicativo no emulador ou dispositivo, use os comandos:

   ```bash
   yarn android
   ```

   ou

   ```bash
   yarn ios
   ```

## Estrutura de Pastas

- **`src/assets/`**: Recursos estáticos, como imagens e ícones.
- **`src/components/`**: Componentes reutilizáveis do aplicativo.
- **`src/screens/`**: Telas principais do aplicativo.
- **`src/services/`**: Manipulação de dados e serviços.
- **`src/hooks/`**: Hooks personalizados.
- **`src/utils/`**: Funções e constantes utilitárias.
- **`src/navigation/`**: Configuração de navegação.
- **`src/context/`**: Contextos para gerenciamento de estado.
- **`src/types/`**: Definições de tipos TypeScript.

## Contribuindo

Se você deseja contribuir para o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (`git checkout -b feature/your-feature`).
3. Faça commit das suas alterações (`git commit -am 'Add new feature'`).
4. Faça push para a branch (`git push origin feature/your-feature`).
5. Crie um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
