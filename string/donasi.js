const chalk = require('chalk')
const fs = require('fs')
global.donasi = `

GOPAY : 087788617688
DANA : 087788617688
OVO : 087788617688
PULSA : 087788617688
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})