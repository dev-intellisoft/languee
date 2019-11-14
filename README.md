# languee
* DESCRIPTION

It is a very simple way to work with multi language projects.

It was created by the need I had to translate text by just typing them directly without creating 
key with weird names like "lbl_username", "txt_username" or something like that.

I always got in trouble when I need to create keys. 


* INSTALLATION

`yarn add languee` 
or 
`npm i languee`

* PROJECT DIRECTORY

After the installation, you need to create a folder called 
"locales" in the root of your project and inside it locales folders.

For example:
 * en_US for United State English
 * pt_BR for Brazilian Portuguese
 * zh_CN for Chinese
 
Once all file structure set, you can create *.json files
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
.
├── index.js
└── locales
    ├── en_US
    │   └── hello.json
    ├── pt_BR
    │   └── hello.json
    └── zh_CN
        └── hello.json
```

if you use mobile and/or web project you need assemble you locale files
by run `yarn run languee` or `npm run languee`

* USAGE

Now it is time to code...

The follow code will be necessary:
```
const { t } = require('languee')
```
you also can import it like that
```
import { t } from 'languee'
```

to use it simply
```
console.log(t(`Hello World`)) // this will print "Olá mundo!" because my locale is pt_BR
```

You can also change computer locale for another one simply 
calling "setLocale" function

For example:

```
const { t, setLocale } = require('languee')
//now I can simply
setLocale(`zh_CN`)

console.log(t(`Hello World`)) //this should print 你好世界!
```

You can also change the files have all the translations by
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
const { t, setLocale, setFile } = require('languee')

setLocale(`pt_BR`)
setFile(`hello`)

console.log(t(`Hello World`))

console.log(t(`Hello World`, {}, `zh_CN`))

console.log(t(`Hello {name}!`, { name:"Wellington" }))

console.log(t(`Hello my friend!`))
```



Any question please mail to wellington@programer.com.br ;)