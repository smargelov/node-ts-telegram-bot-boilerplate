/**
 * Disable debug
 * =====================
 * Check if configs/config.js has debug to off
 */
import * as fs from 'fs'
import * as shell from 'shelljs'
import { argv } from 'yargs'

declare const __dirname: string

const path = `${__dirname}/../src/configs/config.js`

if (fs.existsSync(path)) {
	if (argv.enable) {
		shell.sed('-i', '"debug": false', '"debug": true', path)
	} else {
		shell.sed('-i', '"debug": true', '"debug": false', path)
	}
}
