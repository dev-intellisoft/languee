const { t, setLocale, setFile, setMaps } = require('languee')


setMaps(`pt_BR`, [`pt_AO`, `pt_PT`, `pt_MO`])
setMaps(`en_US`, [`en_CA`, `en_HK`])
setMaps(`zh_CN`, [`zh_TW`, `zh_HK`, `zh_AO`])

setLocale(`pt_AO`)
setFile(`hello`)

console.log(t(`Hello World`))

console.log(t(`Hello World`, {}, `zh_CN`))

console.log(t(`Hello {name}!`, { name:"Wellington" }))

console.log(t(`Hello my friend!`))