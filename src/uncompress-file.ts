import fs from 'fs'
import path from 'path'

import { uncompress } from './uncompress'

const [filePath] = process.argv.slice(2)

if (fs.existsSync(filePath)) {
  const fileContent = fs.readFileSync(path.resolve(filePath), 'utf-8')

  console.log('Texto descomprimido:', uncompress(fileContent))

  process.exit(0)
}

console.error(
  [
    `Arquivo em ${filePath} não existe ou não pode ser lido.`,
    'Verifique se o caminho está correto',
  ].join('\n'),
)

process.exit(1)
