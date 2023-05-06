const chalk = require('chalk')
const fs = require('fs')
global.buypremium = `
harga
1 minggu: 10k
2 Minggu: 15k
3 minggu : 20k

Payment 

GOPAY : 087788617688
DANA : 087788617688
OVO : 087788617688
PULSA : 087788617688

Benefit?
unli Limit
bebas akses Feature prem
`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})