import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

import { compress } from './compress'

const [filePath] = process.argv.slice(2)

if (fs.existsSync(filePath)) {
  const fileContent = fs.readFileSync(path.resolve(filePath), 'utf-8')

  console.log(
    [
      chalk.green.bold('✓ Texto comprimido com sucesso:'),
      compress(fileContent),
    ].join('\n'),
  )

  process.exit(0)
}

console.error(
  [
    chalk.red.bold(`Arquivo em '${filePath}' não existe ou não pode ser lido.`),
    'Verifique se o caminho está correto',
  ].join('\n'),
)

process.exit(1)
