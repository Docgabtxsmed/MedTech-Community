# Como Salvar e Versionar o Projeto MedTech Community no GitHub

Este guia traz o passo a passo completo para salvar a sua nova Landing Page e todo o projeto da MedTech Community em um repositório no GitHub.

## Passo 1: Criar um Repositório Vazio no GitHub (Site)

1. Acesse o site do [GitHub](https://github.com/) e faça login na sua conta.
2. No canto superior direito da página, clique no ícone **`+`** e selecione **"New repository"** (Novo repositório).
3. **Repository name**: Escolha um nome para o seu projeto, como `medtech-community` ou `medtech-hub`.
4. **Description** (Opcional): "Landing page e portal de ferramentas da MedTech Community."
5. **Visibilidade**: Escolha **Public** (para todo mundo ver e poder acessar como portfólio) ou **Private** (só para você e convidados).
6. **ATENÇÃO:** **Deixe desmarcadas** as opções de adicionar "README", ".gitignore" e "License" (já temos arquivos próprios que foram criados automaticamente com nosso projeto Vite/React).
7. Clique no botão verde **"Create repository"**.

## Passo 2: Preparar e Enviar o Código via Terminal (Local)

Com o repositório criado no site do GitHub, agora precisamos enviar o código que está no seu Mac para lá.

1. Abra o **Terminal** da sua IDE (Cursor/VSCode) ou o terminal do seu Mac apontando para a pasta do projeto (Desktop/medtech-community). Se você já roda o `npm run dev` aí, aperte `Ctrl + C` para parar temporariamente, ou abra uma nova aba de terminal.

2. Inicialize o controle de versão Git na pasta do seu projeto. (Muitas vezes o Vite já cria, mas por segurança execute o comando abaixo. Se disser que já existe, tudo bem):

   ```bash
   git init
   ```

3. Adicione todos os arquivos atuais para a "área de preparação" do pacote que será enviado:

   ```bash
   git add .
   ```

4. Crie um "Commit", que é basicamente o "Save Point" do seu projeto com uma mensagem explicando o que você fez:

   ```bash
   git commit -m "feat: Criação da Landing Page MedTech Community estilo Neon/CyberMedical e listagem de produtos"
   ```

5. O GitHub utiliza o ramo padrão com o nome `main`. Vamos ter certeza de que estamos na `main`:

   ```bash
   git branch -M main
   ```

6. Agora, volte na janela do GitHub (aquele que criamos no Passo 1) e copie a URL do repositório remoto. Em seguida, cole este comando no Terminal, substituindo `URL_DO_SEU_REPOSITORIO` pelo link copiado (algo como `https://github.com/seunome/medtech-community.git`):

   ```bash
   git remote add origin URL_DO_SEU_REPOSITORIO
   ```

7. Por fim, envie os arquivos da sua máquina (Local) para a Nuvem (GitHub):
   ```bash
   git push -u origin main
   ```

## Passo 3: Comemoração 🎉

Pronto! Se você atualizar a página do GitHub agora, verá todo o seu código da Landing Page bem protegido em formato online.

O Git agora rastreará qualquer mudança.

### Dica para o Futuro (Rotina de Atualizações)

Sempre que fizermos novas melhorias nos sites e bibliotecas (como ao criar a página "Trilhas Tech"), basta rodar esta **série de 3 comandos básicos** no terminal:

```bash
git add .
git commit -m "Descreva as melhorias feitas hoje"
git push
```

## Passo 4 (Extra): Fazer o Deploy Público Oficial da Plataforma

O seu código no GitHub é gratuito, e pode ser publicado usando ferramentas também gratuitas como a plataforma **Vercel** ou o **Netlify**:

1. Crie uma conta no site [Vercel](https://vercel.com).
2. Clique em **"Add New"** > **"Project"**.
3. Conecte sua conta do GitHub e clique em **"Import"** ao lado do repositório `medtech-community`.
4. A Vercel vai reconhecer magicamente que usamos o React/Vite. É só clicar em **"Deploy"**.
5. Em menos de um minuto, ela vai gerar um link online (como `https://medtech-community.vercel.app`) para você passar aos colegas da faculdade ou adicionar na bio do Instagram!
