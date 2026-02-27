/**
 * Este arquivo funciona como o nosso "Banco de Dados" local (Mock Data).
 * Em um aplicativo real, esses dados viriam de uma API (um servidor externo, como o Express/Node.js ou um CMS).
 * Aqui, vamos exportar uma constante (`tutorialData`) que é um Array de objetos do tipo `Module`.
 */

export interface ContentSection {
  type: 'text' | 'code' | 'table' | 'list' | 'info';
  content: string; // Conteúdo principal. Pode conter Markdown se quisermos interpretar depois.
  language?: string; // Linguagem para formatação de código (ex: 'bash', 'markdown')
  data?: any; // Para carregar dados brutos (arrays para tabelas, listas)
}

export interface Module {
  id: string; // Identificador único (ex: 'modulo-1') usado também nas rotas/URLs
  title: string;
  description: string;
  sections: ContentSection[]; // Um array contendo cada bloco do texto daquele módulo
}

// Uma constante exportada para ser utilizada por outros arquivos (ex: nossas páginas)
export const tutorialData: Module[] = [
  {
    id: 'fundamentos',
    title: 'Módulo 1 — Fundamentos: O que é o Ecossistema Claude?',
    description: 'Entenda como as peças se encaixam: Tools, Skills e Plugins.',
    sections: [
      {
        type: 'text',
        content: 'Antes de mergulhar nos detalhes, é importante entender como as três peças se encaixam. Pense assim:'
      },
      {
        type: 'list',
        content: '',
        data: [
          'Tools (Ferramentas via MCP) → São as mãos da Claude. Permitem que ela interaja com sistemas externos (GitHub, Slack, bancos de dados, APIs).',
          'Skills (Habilidades) → São o conhecimento especializado. Ensinam a Claude como fazer algo bem feito (criando regras).',
          'Plugins → São o kit completo. Empacotam Skills + Tools + configurações em um pacote distribuível, como um "app" que você instala.'
        ]
      },
      {
        type: 'info',
        content: 'Justificativa: Começar pela visão macro evita confusão. Essa analogia corpo/conhecimento/kit ajuda a fixar o conteúdo para quem está começando.'
      },
      {
        type: 'code',
        language: 'text',
        content: `┌─────────────────────────────────────┐
│           PLUGIN (Pacote)           │
│   Distribui e organiza tudo junto   │
└──────────┬──────────────────────────┘
           │
      Contém dentro de si
           │
   ┌───────┴───────┐
   ▼               ▼
┌──────────┐  ┌────────────┐
│  SKILLS  │  │   TOOLS    │
│ (Saber)  │  │  (Fazer)   │
│ SKILL.md │  │ MCP Server │
└──────────┘  └────────────┘
       │           │
       └─────┬─────┘
             ▼
    Claude usa ambos para
    completar sua tarefa`
      }
    ]
  },
  {
    id: 'tools',
    title: 'Módulo 2 — Tools (Ferramentas via MCP)',
    description: 'Como a Claude se conecta com o mundo através do Model Context Protocol.',
    sections: [
      {
        type: 'text',
        content: 'O MCP (Model Context Protocol) é um protocolo aberto criado pela Anthropic. Funciona como um "USB universal" — conecta a Claude a qualquer sistema externo, como banco de dados e APIs.'
      },
      {
        type: 'info',
        content: 'Analogia médica: Pense no MCP como o sistema nervoso — a Claude (cérebro) envia comandos via nervos (protocolo MCP) para os músculos (ferramentas externas).'
      },
      {
        type: 'text',
        content: 'Quais os 3 primitivos do MCP?'
      },
      {
        type: 'list',
        content: '',
        data: [
          'Tools: Funções que a Claude chama (Ação). Ex: "Criar issue no GitHub".',
          'Resources: Dados que a Claude lê (Leitura). Ex: "Ler conteúdo de um arquivo".',
          'Prompts: Templates pré-escritos.'
        ]
      },
      {
        type: 'text',
        content: 'Vamos tentar adicionar um MCP Server na prática pelo terminal local:'
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Exemplo: adicionar o servidor do GitHub
claude mcp add --transport http github https://api.githubcopilot.com/mcp/

# Listar servidores configurados
claude mcp list

# Remover um servidor
claude mcp remove github`
      }
    ]
  },
  {
    id: 'skills',
    title: 'Módulo 3 — Skills (Habilidades)',
    description: 'Criando "funções comportamentais" personalizadas sem precisar de servidores externos.',
    sections: [
      {
        type: 'text',
        content: 'Skills são pacotes de instruções que ensinam a Claude a fazer algo específico. É a forma mais simples de estender a Claude, pois não precisa de servidor externo, baseia-se num simples arquivo Markdown chamado SKILL.md.'
      },
      {
        type: 'code',
        language: 'markdown',
        content: `---
name: minha-skill
description: >
  Use esta skill quando o usuário pedir para [descreva aqui].
  Gatilhos: palavra-chave-1, palavra-chave-2.
---

# Instruções para a Claude

## Passo 1: Entender o pedido
Analise o que o usuário quer...

## Passo 2: Executar a tarefa
Faça X, Y, Z...
`
      },
      {
        type: 'info',
        content: 'Dica: Mantenha as diretrizes de prompt estruturadas num Markdown e teste exaustivamente na Claude.'
      }
    ]
  },
  {
    id: 'plugins',
    title: 'Módulo 4 — Plugins (Pacotes Distribuíveis)',
    description: 'Empacotando Skills e Tools num canivete suíço.',
    sections: [
      {
        type: 'text',
        content: 'Um Plugin é essencialmente a união de Skills, MCP Servers, Agents e Hooks. Eles permitem a distribuição do seu sistema especializado para o resto do time ou para a comunidade.'
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Buscar plugins no marketplace
/plugin marketplace add anthropics/claude-code

# Instalar um plugin específico
/plugin install commit-commands@anthropics-claude-code`
      }
    ]
  },
  {
    id: 'fluxo-completo',
    title: 'Módulo 5 e 6 — Fluxo Completo e Roteiro',
    description: 'Como orquestrar Hooks, agentes e ferramentas no dia a dia, validado por um guia prático em semanas.',
    sections: [
      {
        type: 'text',
        content: 'Ao aplicar o ecossistema no cenário prático, você consegue construir integrações formidáveis utilizando as camadas do Ecossistema.'
      },
      {
        type: 'list',
        content: '',
        data: [
          'Ensinar a Claude -> Skill',
          'Conectar sistemas -> Tool (MCP)',
          'Distribuir o produto -> Plugin'
        ]
      }
    ]
  }
];
