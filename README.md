# 🔥 Fênix — Projeto Técnico React

Interface moderna desenvolvida para o **Projeto Fênix**, com o objetivo de recriar a experiência do operador do sistema Nortus utilizando tecnologias atuais, mantendo integração com a API legado (v1).

O foco principal da solução foi **performance percebida, fluidez e experiência do usuário**, mesmo diante das limitações de um backend monolítico antigo.

---

## 🚀 Deploy

🔗 **Aplicação:** [https://projeto-fenix-loomi.vercel.app/](https://projeto-fenix-loomi.vercel.app/)
🔗 **Repositório:** [[https://github.com/santoswillames/fenix](https://github.com/santoswillames/fenix)

---

## 🧠 Contexto do Desafio

O sistema original da Nortus apresenta problemas como:

* Telas lentas ao carregar grandes volumes de dados
* Falta de feedback visual em ações críticas
* Dados dessincronizados
* Experiência pouco responsiva

A missão do Projeto Fênix foi reconstruir a interface utilizando **React + Next.js**, garantindo:

* Sensação de rapidez
* Feedbacks claros ao usuário
* Melhor organização de estados
* Arquitetura escalável

---

## 🛠️ Stack Utilizada

* **Next.js (v12+)**
* **TypeScript**
* **TailwindCSS**
* **Zustand** (gerenciamento de estado)
* **Fetch** (requisições HTTP)
* **Zod** (validação de formulários)
* **Recharts** (gráficos)
* **OpenLayers** (mapas)
* **Sonner** (toasts e feedbacks)
* **ESLint + Prettier**
* **Cookies + LocalStorage** (autenticação fictícia)

---

## 🏗️ Arquitetura

A aplicação foi estruturada com foco em:

* Separação clara entre **camada de UI**, **serviços** e **estado global**
* Centralização de chamadas à API
* Componentização reutilizável
* Proteção de rotas privadas
* Estrutura escalável para crescimento futuro

```
src/
 ├── app/
 ├── components/
 ├── services/
 ├── stores/
 ├── hooks/
 ├── schemas/
 ├── utils/
```

---

## 🔐 Autenticação

Implementação fictícia conforme solicitado:

* Token armazenado em **cookies**
* Dados do usuário persistidos no **localStorage**
* Middleware para proteção de rotas privadas
* Redirecionamento automático para login se não autenticado

---

## 📊 Funcionalidades Implementadas

### ✅ Login

* Validação de email
* Toggle para visualizar senha
* Controle de autenticação
* Tratamento de erros da API

### ✅ Dashboard

* Gráficos de:

  * ARPU
  * Retenção
  * Churn
  * Conversão
* Mapa de clientes por região
* Indicadores visuais claros
* Estados de loading tratados

### ✅ Gestão de Tickets

* Listagem otimizada
* Criação de novo ticket
* Toast de sucesso
* Atualização de estado sem necessidade de F5

### ✅ Chat com Assistente Virtual

* Sugestões contextuais simuladas
* Ações rápidas:

  * Enviar proposta
  * Fazer ligação
  * Ver histórico
* Estrutura preparada para integração futura com IA real

### ✅ Simulador de Planos

* Planos: Básico, Intermediário e Premium
* Sliders interativos
* Atualização de valores em tempo real
* Lógica de cálculo desacoplada da UI

---

## ⚡ Estratégias para Melhorar Performance Percebida

* Skeleton loaders
* Estados intermediários bem definidos
* Atualizações otimistas
* Memoização de componentes estratégicos
* Separação de estados globais e locais
* Tratamento explícito de erros

---

## 🎨 Experiência do Usuário

* Interface fluida e moderna
* Feedback imediato para ações
* Loading states tratados
* Layout responsivo (>= 1000px)
* Organização visual fiel ao protótipo

---

## 🔄 Git Flow

Foi utilizado fluxo baseado em:

* Branch `develop`
* Branch por feature
* Commits descritivos
* Pull Requests para merge

Exemplo:

```
feat: implementação do simulador de planos
fix: correção de estado global no chat
refactor: separação da camada de serviços
```

---

## 🤖 Uso de IA no Projeto

Ferramentas utilizadas como apoio estratégico:

* ChatGPT
* Cloud

### Exemplos de uso:

* Sugestões de melhoria arquitetural
* Otimização de funções
* Discussão de boas práticas
* Ajustes finos em validações

Todo código foi revisado, adaptado e compreendido antes de ser incorporado.

A IA foi utilizada como **ferramenta de suporte**, não como autora da solução.

---

## 🚧 Principais Desafios

* Trabalhar com API legado mantendo UX fluida
* Organização de estado sem sobrecarregar o global
* Sincronização de dados sem necessidade de refresh manual
* Estruturação escalável em tempo reduzido

---

## 🔮 O que eu faria com mais tempo

Autenticação:

- Criar um `AuthProvider`
- Criar refresh automático
- Tratar expiração do JWT
- Adicionar logout

Dashboard:

- Mudar estratégia dos gráficos KPI’s, por que pode ser que os outros gráficos sejam de outro tipo

Geral:

- Testes automatizados
- Camada de API mais robusta
- Melhor abstração
- Melhor tratamento de erros
- Aplicaria alguns patterns, tanto de UI quanto de lógica
- Utilizar server actions
- BFF
- Tratamento de erros
- Criar alguns Helpers
- WebSockets para atualização em tempo real

---

## 📈 Pontos de Destaque

* Arquitetura escalável
* Código organizado
* Separação clara de responsabilidades
* Boa experiência do usuário
* Uso consciente de IA
* Foco em performance percebida

