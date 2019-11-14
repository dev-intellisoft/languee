const { t, setLocale, setFile } = require('@dev-intellisoft/text.js')

setLocale(`pt_BR`)
setFile(`hello`)

console.log(t(`Hello World`))

console.log(t(`Hello World`, {}, `zh_CN`))

console.log(t(`Hello {name}!`, { name:"Wellington" }))

console.log(t(`Hello my friend!`))