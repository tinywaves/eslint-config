import { execSync } from 'node:child_process';

export function isGitClean() {
  try {
    execSync('git diff-index --quiet HEAD --');
    return true;
  } catch (error) {
    return false;
  }
}

export function getEslintConfigContent(
  mainConfig: string,
  additionalConfigs?: string[],
) {
  return `
import dhzh from '@dhzh/eslint-config'

export default dhzh({
${mainConfig}
}${additionalConfigs?.map((config) => `,{\n${config}\n}`)})
`.trimStart();
}
