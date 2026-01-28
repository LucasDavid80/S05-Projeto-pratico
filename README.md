# Inatel Moradia - Classificados Estudantis

Projeto de **Interação Humano-Computador (IHM)** focado na solução de um problema real da comunidade acadêmica: a dificuldade de encontrar moradia segura e acessível para novos alunos.

## 🎯 O Problema
A funcionalidade visa resolver uma das maiores dificuldades dos alunos de fora: encontrar acomodação. Atualmente, as ofertas são descentralizadas e difíceis de comparar.

## 💡 A Solução Proposta
Um módulo centralizado no aplicativo institucional que permite:
- Centralizar ofertas de repúblicas, pensões e aluguéis.
- Filtrar por faixa de preço (ex: "Até R$ 500") e proximidade.
- Contato direto com anunciantes via WhatsApp.

---

## 📚 Processo de Design

### 1. User Story (História de Usuário)
> "Como novo aluno vindo de outra cidade, eu quero buscar opções de repúblicas e aluguéis no aplicativo, para que eu possa encontrar uma moradia que caiba no meu orçamento antes das aulas começarem."

### 2. Análise Hierárquica de Tarefas (HTA)
Mapeamento completo do fluxo do usuário para atingir o objetivo "Conseguir Moradia":
1. Acessar Módulo -> 2. Definir Busca (Filtros) -> 3. Escolher Imóvel -> 4. Contatar Anunciante via WhatsApp.

![Fluxo de Tarefas HTA](caminho/para/sua/imagem-hta.png)

### 3. Fluxo de Informação (Arquitetura)
Modelagem dos dados necessários para o sistema funcionar, conectando as entidades **Aluno**, **Imóvel** e **Anunciante**.

- **Aluno:** Busca e filtra resultados.
- **Imóvel:** Possui atributos como valor, fotos, mobília e localização.
- **Anunciante:** Gerencia as publicações e responde aos chats.

![Diagrama de Classes](caminho/para/sua/imagem-classes.png)

---

## 🎨 Prototipagem

O projeto evoluiu de Wireframes de baixa fidelidade para um protótipo de alta fidelidade seguindo a identidade visual do Inatel.

### Wireframe (Baixa Fidelidade)
Esboço inicial da estrutura da listagem e dos cards de moradia.

![Wireframe](caminho/para/sua/imagem-wireframe.png)

### Interface Final (Alta Fidelidade)
Layout final com aplicação de cores, tipografia e hierarquia visual, destacando status de disponibilidade ("Vaga Nova", "Almoço Incluso").

![Interface Final](caminho/para/sua/imagem-final.png)

---
**Projeto Acadêmico - Inatel (Instituto Nacional de Telecomunicações)**
