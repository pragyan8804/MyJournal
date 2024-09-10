import { NodeName } from '@/types/builder'
import { GitRepository } from '@/types/git'

import { INITIAL_BADGES } from './badges'
import { LANGUAGES_SETUP } from './constants'

const projectPrerequisites = LANGUAGES_SETUP.find((lang) => lang.languages.includes('TypeScript'))

export const DEFAULT_REPOSITORY_DATA: GitRepository = {
  urlRepository: 'https://github.com/xavimondev/easyreadme',
  repoName: 'easyreadme',
  owner: 'xavimondev',
  description:
    'Easyreadme helps you simplify README creation and generate visually stunning ones with the help of AI and elegant pre-designed templates.',
  language: 'TypeScript',
  branch: 'main'
}

export const DEFAULT_DATA_CACHED = {
  [NodeName.OVERVIEW]:
    'Easyreadme streamlines README creation, leveraging AI to craft visually appealing documentation with elegant templates. Simplify your project communication effortlessly.',
  [NodeName.LICENSE]: {
    name: 'MIT',
    url: 'https://github.com/xavimondev/easyreadme/blob/main/LICENSE'
  },
  [NodeName.PROJECT_SUMMARY]: {
    data: [
      {
        name: 'src',
        link: 'src',
        description: 'Main source code directory for the TypeScript project.'
      },
      {
        name: 'src/app',
        link: 'src/app',
        description: 'Application-specific code and functionalities.'
      },
      {
        name: 'src/components',
        link: 'src/components',
        description: 'Reusable UI components for the application.'
      },
      {
        name: 'src/services',
        link: 'src/services',
        description: 'Services providing specific functionalities to the application.'
      },
      {
        name: 'src/styles',
        link: 'src/styles',
        description: 'Styling configurations and global styles for the project.'
      },
      {
        name: 'public',
        link: 'public',
        description: 'Public assets and resources accessible from the application.'
      },
      {
        name: 'public/hero',
        link: 'public/hero',
        description: "Hero images or visuals for the project's landing or main page."
      },
      {
        name: 'src/utils',
        link: 'src/utils',
        description: 'Utility functions and helper modules for various tasks.'
      }
    ]
  },
  [NodeName.SETTING_UP]: {
    data: [
      {
        name: 'OPENAI_API_KEY',
        steps: [
          'Visit the OpenAI website and sign in to your account.',
          'Navigate to the API section in your account settings.',
          'Generate a new API key for access to the GPT models.',
          'Copy the generated API key and securely store it.'
        ]
      },
      {
        name: 'GITHUB_ACCESS_TOKEN',
        steps: [
          'Log in to your GitHub account.',
          "Go to 'Settings' and navigate to 'Developer settings'.",
          "Select 'Personal access tokens' and generate a new token.",
          "Choose the required scopes for the token, e.g., 'repo' for repository access.",
          'Copy the generated token and store it securely.'
        ]
      },
      {
        name: 'KV_REST_API_URL',
        steps: ['Insert a guide.']
      },
      {
        name: 'KV_REST_API_TOKEN',
        steps: ['Insert a guide.']
      }
    ]
  },
  [NodeName.TECH_STACK]: {
    dependencies: [
      {
        name: '@tiptap/core',
        link: 'https://www.tiptap.dev/',
        description: 'WYSIWYG editor framework for Vue.js and React.'
      },
      {
        name: 'swr',
        link: 'https://swr.vercel.app/',
        description: 'React Hooks library for data fetching.'
      },
      {
        name: 'zustand',
        link: 'https://zustand.surge.sh/',
        description: 'State management for React using Zustand.'
      },
      {
        name: 'tailwindcss',
        link: 'https://tailwindcss.com/',
        description: 'A utility-first CSS framework for rapid UI development.'
      },
      {
        name: 'next',
        link: 'https://nextjs.org/',
        description: 'React framework for building web applications with server-side rendering.'
      }
    ]
  },
  [NodeName.RUN_LOCALLY]: {
    mainLanguage: DEFAULT_REPOSITORY_DATA.language,
    repoName: DEFAULT_REPOSITORY_DATA.repoName,
    urlRepository: DEFAULT_REPOSITORY_DATA.urlRepository
  },
  [NodeName.BADGE]: {
    owner: DEFAULT_REPOSITORY_DATA.owner,
    repoName: DEFAULT_REPOSITORY_DATA.repoName,
    badges: INITIAL_BADGES
  },
  [NodeName.PREREQUISITES]: {
    rules: projectPrerequisites?.lockFiles?.find((lf) => lf.lockfile === 'bun.lockb'),
    runtime: projectPrerequisites?.runtimes?.find((runt) => runt.id === 'Node'),
    typescriptResource: projectPrerequisites?.typescriptResource
  },
  [NodeName.MONOREPO_SUMMARY]: {
    data: [
      {
        workspace: 'web',
        description: `Insert a brief description of your workspace.`,
        paths: [
          {
            name: 'ui',
            description: 'Insert a summary of your this package.'
          }
        ]
      }
    ]
  },
  [NodeName.CONTRIBUTORS]: {
    repository: DEFAULT_REPOSITORY_DATA.repoName,
    owner: DEFAULT_REPOSITORY_DATA.owner
  },
  [NodeName.PROJECT_STRUCTURE]: `
  ├── .env.example
  ├── LICENSE
  ├── README.md
  ├── bun.lockb
  ├── next.config.js
  ├── package.json
  ├── src
  │   ├── app
  │   │   ├── api
  │   │   │   ├── rate-limit
  │   │   │   │   └── route.ts
  │   │   │   └── remaining
  │   │   │       └── route.ts
  │   │   ├── builder
  │   │   │   └── page.tsx
  │   │   └── page.tsx
  │   ├── components
  │   │   ├── code-block.tsx
  │   │   ├── copy-button.tsx
  │   │   └── ui
  │   │       ├── button.tsx
  │   │       └── tabs.tsx
  │   └── utils
  │       ├── prompts.ts
  │       └── repository-template.ts
  ├── tailwind.config.ts
  └── tsconfig.json
`
}
