const fs = require('fs')
const path = require('path')

const { promisify } = require('util')
const fsAccess = promisify(fs.access)

const fileExists = async (filePath) =>
  fsAccess(filePath)
    .then(() => true)
    .catch(() => false)

const libPath = path.join(__dirname, '../lib')

async function writePackageJson () {
  const libExists = await fileExists(libPath)
  if (!libExists) {
    console.error('@BochilTeam/scraper:', 'Lib folder not found after compiling TypeScript')
    process.exit(1)
  }
  const libCjs = path.join(libPath, 'cjs')
  const libCjsExists = await fileExists(libCjs)
  if (libCjsExists) {
    const packageJson = JSON.stringify({ type: 'commonjs' }, null, 2)
    await fs.promises.writeFile(path.join(libCjs, 'package.json'), packageJson)
  } else console.warn('@BochilTeam/scraper:', 'CJS folder not found')
  const libEsm = path.join(libPath, 'esm')
  const libEsmExists = await fileExists(libEsm)
  if (libEsmExists) {
    const packageJson = JSON.stringify({ type: 'module' }, null, 2)
    await fs.promises.writeFile(path.join(libEsm, 'package.json'), packageJson)
  } else console.warn('@BochilTeam/scraper:', 'ESM folder not found')

  const typesPath = path.join(libPath, '@types')
  const typesExists = await fileExists(typesPath)

  if (!typesExists && !libEsmExists && !libCjsExists) {
    console.error('@BochilTeam/scraper:', 'No compiled TypeScript files found')
    process.exit(1)
  }
}

if (require.main === module) writePackageJson()
