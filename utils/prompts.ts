export const generateOverviewPrompt = ({
  repositoryName,
  projectDescription
}: {
  repositoryName: string
  projectDescription: string
}) => {
  return `Craft an overview for ${repositoryName}.
${projectDescription !== '' ? `This project is described as ${projectDescription}.` : ''}
Ensure to keep your response under 150 characters.`
}

export const generateOverviewWithDependenciesPrompt = ({
  repositoryName,
  dependencies,
  projectDescription
}: {
  repositoryName: string
  dependencies: string
  projectDescription: string
}) => {
  return `Craft an overview for ${repositoryName}.
${projectDescription !== '' ? `This project is described as ${projectDescription}.` : ''} 
The project relies on various libraries and tools, including the following essential dependencies
${dependencies} 
Ensure to keep your response under 100 characters.`
}

export const generateTechStackPrompt = ({
  dependencies,
  language
}: {
  dependencies: string
  language: string
}) => {
  return `For the ${language} project, the following dependencies are utilized, covering crucial aspects like authentication, data fetching, 
state management, animations, styling, server-client communication, testing, and deployment:
${dependencies}

If the project has more than eight dependencies, please pick the eight most vital dependencies that cover the essential aspects mentioned above. 
For projects with fewer than eight dependencies, focus only on the provided ones.

Follow this format:
{
  name: NAME_DEPENDENCY, 
  link: LINK_RESOURCE, 
  description: Brief explanation (up to 100 characters) about the dependency's role.
}

Format the response as JSON array object with one key: "dependencies". Don't add backticks.`
}

export const generateSettingUpPrompt = ({ environmentVars }: { environmentVars: string }) => {
  return `${environmentVars}

For each environment variable mentioned above, provide a brief guide to generate its value. 
If any variables are unknown due to the limitations of the completion API's knowledge, 
please insert the message "Insert a guide" for those variables.

Follow this format:
{
  name: ENVIRONMENT VARIABLE NAME,
  steps: [Up to 5 bullet point instructions, each not exceeding 100 characters]
}

Format the response as JSON array object with one key: "data". Don't add backticks.`
}

export const generateProjectSummaryPrompt = ({
  directories,
  mainLanguage
}: {
  directories: string[]
  mainLanguage: string
}) => {
  return `Given the following directories from a ${mainLanguage} project:
${directories}

Craft a summary highlighting the top 8 essential directories of the project.
Follow this format:
{
  name: PATH,
  link: PATH,
  description: Brief summary of primary functionalities/components (up to 80 characters).
}

Format the response as JSON array object with one key: "data". Don't add backticks.`
}

export const generateMonorepoSummaryPrompt = ({
  repositoryName,
  monorepoStructure
}: {
  repositoryName: string
  monorepoStructure: string
}) => {
  return `The project named ${repositoryName} has a monorepo configuration represented by the following JSON structure:

  ${monorepoStructure}

  Each object in the above JSON represents a folder in the monorepo, where "name" denotes the folder's name, and "nested" contains its nested folders.
  Your task is to craft a summary with the following format:
  {
    workspace: path's name. Don't add "/" at the end.
    description: create a concise overview that outlines the primary purpose of this workspace. Utilize the nested folders to provide insight into the nature of this path (up to 70 words).
    paths: [
      {
        name: nested folder,
        description: create a brief summary emphasizing the main purpose and essential features of the nested folder (up to 70 words).
      }
    ]
  }

  Format the response as JSON array object with one key: "data". Don't add backticks.`
}
