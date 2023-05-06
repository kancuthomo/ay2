const chalk = require('chalk')
const fs = require('fs')
global.fakey = "6286666666-1589321480@g.us"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})