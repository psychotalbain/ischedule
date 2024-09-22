# iSchedule

iSchedule é um aplicativo de agendamento de tarefas desenvolvido com React Native. O objetivo do app é fornecer uma interface intuitiva para listar, adicionar, editar, apagar e marcar tarefas como concluídas, com os dados armazenados localmente usando AsyncStorage.

## Funcionalidades

- Listar tarefas agendadas e concluídas.
- Adicionar, editar e remover tarefas.
- Marcar tarefas como concluídas.
- Persistência de dados usando AsyncStorage.
- Interface responsiva e amigável com React Native Paper.
- Suporte a temas claros e escuros.
- Suporte a internacionalização com i18next.
- Notificações de status usando Toast Messages.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

- **`src/`**: Contém o código-fonte do aplicativo.
  - **`assets/`**: Imagens, ícones e outros recursos estáticos.
  - **`components/`**: Componentes reutilizáveis, como BottomSheet e Modal.
  - **`screens/`**: Telas principais do aplicativo, como tarefas agendadas e concluídas.
  - **`services/`**: Serviços para manipulação de dados, incluindo persistência com AsyncStorage.
  - **`hooks/`**: Hooks personalizados para encapsular lógica de estado e operações.
  - **`utils/`**: Funções utilitárias e constantes.
  - **`navigation/`**: Configuração de navegação, incluindo o Bottom Navigator.
  - **`context/`**: Contextos para gerenciamento de estado global.
  - **`types/`**: Definições de tipos TypeScript.

## Bibliotecas Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **React Navigation**: Navegação entre telas e gerenciamento de navegação.
- **React Native Bottom Sheet**: Criação de bottom sheets interativos.
- **AsyncStorage**: Armazenamento local persistente de dados.
- **TypeScript**: Tipagem estática para um desenvolvimento mais seguro.
- **React Native Paper**: Componentes UI estilizados e consistentes.
- **Styled-components**: Estilização com suporte a temas.
- **i18next & react-i18next**: Internacionalização e localização.
- **React Native Localize**: Gerenciamento de localização.
- **Moment.js**: Manipulação de datas e horários.
- **React Native Toast Message**: Exibição de mensagens de notificação.

## Comandos Disponíveis

- **`yarn android`**: Inicia o aplicativo no emulador ou dispositivo Android.
- **`yarn ios`**: Inicia o aplicativo no simulador iOS.
- **`yarn lint`**: Executa o linting do código.
- **`yarn start`**: Inicia o servidor de desenvolvimento React Native.
- **`yarn test`**: Executa os testes com Jest.

## Configuração Inicial

1. **Instalar Dependências**:

   Após clonar o repositório, instale as dependências:

   ```bash
   yarn install
   ```

2. **Configuração do Ambiente**:

   Configure as variáveis de ambiente e as ferramentas necessárias, como JDK e Android SDK.

3. **Executar o Aplicativo**:

   Para iniciar o aplicativo no emulador ou dispositivo, use os comandos:

   ```bash
   yarn android
   ```

   ou

   ```bash
   yarn ios
   ```

## Prints do Aplicativo

Abaixo estão as capturas de tela do iSchedule para ilustrar o funcionamento e a interface do aplicativo:

<details>
  <summary>Ver capturas de tela</summary>

  <p float="left">
    <img src="src/assets/screenshots/print-01.png" width="200" />
    <img src="src/assets/screenshots/print-02.png" width="200" />
    <img src="src/assets/screenshots/print-03.png" width="200" />
    <img src="src/assets/screenshots/print-04.png" width="200" />
    <img src="src/assets/screenshots/print-05.png" width="200" />
    <img src="src/assets/screenshots/print-06.png" width="200" />
    <img src="src/assets/screenshots/print-07.png" width="200" />
    <img src="src/assets/screenshots/print-08.png" width="200" />
    <img src="src/assets/screenshots/print-09.png" width="200" />
    <img src="src/assets/screenshots/print-10.png" width="200" />
    <img src="src/assets/screenshots/print-11.png" width="200" />
    <img src="src/assets/screenshots/print-12.png" width="200" />
    <img src="src/assets/screenshots/print-13.png" width="200" />
    <img src="src/assets/screenshots/print-14.png" width="200" />
  </p>

</details>

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
