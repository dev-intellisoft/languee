# text.js
It is a very simple way to translate texts.

It was created by the need I had to translate text by just type them directly without creating 
key with strange names like "lbl_username", "txt_username" or something like that.

I really get pain when I need to create keys. 


* INSTALLATION

`yarn add @dev-intellisoft/text.js` 
or 
`npm i @dev-intellisoft/text.js`

* PROJECT DIRECTORY

After the installation you need create a folder called 
"locales" and inside it you can create locales folders

For example:
 * en_US for United State English
 * pt_BR for Brazilian Portuguese
 * zh_CN for Chinese
 
Once all file structure was set you can create *.json files
for every locale.

For example:

```
//hello.json
{
    "Hello World":"Olá mundo!",
    "Hello {name}!":"Oi {name}!"
}
```

Once you get here you you might have a file structure 
like this:

```bash
src
├── index.js
└── locales 
    ├── en_US
    │   └── hello.json
    ├── pt_BR
    │   └── hello.json
    └── zh_CN
        └── hello.json

```


* USAGE

Now it is time to code...


The follow code will be necessary:
```
const { t } = require('@dev-intellisoft/text.js')
```
you also can import it like that
```
import { t } from '@dev-intellisoft/text.js'
```

to use it simply
```
console.log(t(`Hello World`)) // this will print "Olá mundo!" because my locale is pt_BR
```

You also can change my computer locale for another one simply 
calling "setLocale" function

For example:

```
const { t, setLocale } = require('@dev-intellisoft/text.js')
//now I can simply
setLocale(`zh_CN`)

console.log(t(`Hello World`)) //this should print 你好世界!
```

You alson can change the files have all the translations by
calling setFile function

For example:
```setFile(`hello`)```

Passing parameter
```
console.log(t(`Hello {name}!`, { name:"Wellington" })) // this should print "Hello Wellington!"
console.log(t(`Hello World`, {}, `zh_CN`)) // this should print "你好世界!" 
```

Full example:
```
const { t, setLocale, setFile } = require('@dev-intellisoft/text.js')

setLocale(`pt_BR`)
setFile(`hello`)

console.log(t(`Hello World`))

console.log(t(`Hello World`, {}, `zh_CN`))

console.log(t(`Hello {name}!`, { name:"Wellington" }))

console.log(t(`Hello my friend!`))
```



Any question please mail to wellington@programer.com.br ;)