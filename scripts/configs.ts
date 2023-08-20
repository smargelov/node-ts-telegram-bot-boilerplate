/**
 * Check configs.js
 * =====================
 * Check if configs/config.js exist, if don't exist rename .tpl
 */
import * as fs from 'fs'
import * as shell from 'shelljs'

declare const __dirname: string

const path = `${__dirname}/../src/configs/config.js`

if (!fs.existsSync(path)) {
	shell.cp('-Rf', `${__dirname}/../src/configs/config.js.tpl`, `${path}`)
}
