<h1 align="center">
  <a href="https://github.com/dev-intellisoft/languee">
    languee
  </a>
</h1>
<h5>DESCRIPTION</h5>

<p align="center">
    <strong>It is a very simple and scalable way to work with multi language projects.</strong><br>
    It works with node js, react, react native, vue and we think should work with the project you are building just now ; ) !
</p>

<p align="center">
    <a href="https://github.com/dev-intellisoft/languee/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="languee is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/languee">
      <img src="https://badge.fury.io/js/languee.svg" alt="Current npm package version." />
    </a>
</p>


<h5>INTRODUCTION</h5>
<article align="center">
<p>
    It was created by the need I had to work with multi language projects 
</p>

<p>
    Every time I need to type "txt_username" or "lbl_password" it was pain.
</p>
</article>


<h5>INSTALLATION</h5>

`yarn add languee` 
or 
`npm i languee`

<h5>PROJECT DIRECTORY</h5>
<article align="center">

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
</article>

<h5>USAGE</h5>
<article align="center">

First of all you need to instantiate **languee**
<br>
You can do that by typing ...
```
const { t } = require('languee')
```
you can also import it like this ...
```
import { t } from 'languee'
```

<h6>TIPS</h6>

\*** <i>If you are using it for web or mobile application you may need assemble locales folder by execute the follow command</i>
`yarn run languee` or `npm run languee`

Please react and react native programmers don't forget the tip
<br>


\* <i>If you are using React Native</i>

```
const { t } = require('languee/native')
```

you can also import it like that
```
import { t } from 'languee/native'
```

<h5>CODING</h5>
Now it is time to code...
To use it simply
```
console.log(t(`Hello World`)) // this will print "Olá mundo!" because my locale is pt_BR
```

You can also change computer locale to another locale by simply 
calling "setLocale" function.

For example:

```
const { t, setLocale } = require('languee')
//now I can simply
setLocale(`zh_CN`)

console.log(t(`Hello World`)) //this should print 你好世界!
```

You can also change the file bears all the translations by
calling setFile function

For example:
```setFile(`hello`)```

<h5>PARAMETERS</h5>

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

</article>

<h5>FUNCTIONS DESCRIPTION</h5>
<p align="center">

 * t - This is the function you are going to use everywhere it can take till three arguments
 the first will be text you want to display:
 
 
 For example:
 `t('Hello!')// will print "Hello!"`
 
 The second argument of "t" function will be a object the can be converted to binds strings to the function:
 
 For example:
 `t('Hello, {name}!', { name:"Wellington" }) // will print "Hello, Wellington!`
 
 The third one is the locale that override the chose locale.
 
 For example:
 
 `t('Hello, {name}!', { name:"Wellington" }, 'zh_CN')//will print "你好， Wellington!"` 
 
 <i> * Donit worry if if you locales folder was not correctly set "t" function will return exactly the text you typed.</i> 
</p>
<p align="center">

  * setLocale - It will overried any previously set locale and use it system wide.
  
</p>

<p align="center">

   * setDirectory - This function will change the directory from "locales" to another directory you want.
</p>
<p align="center">

 * setFile - The default locale *.json file which bears the translations is "main.json"
 but if you want to set another file you can use this function.

</p>
<p align="center">
 * setMaps - This will map some location to another for example if you are create a project in Brazilian Portuguese or Chinese 
 and you want to display every locale from Portuguese(Portugal, Angolan, Macau, ...) or Chinese(Taiwanese, Hong Kongers) to a default locale you can use this function.
 
 For example:
 
 `setMaps('pt_BR', ['pt_PT', 'pt_AO', ... ])`
 
 `setMaps('zh_CN', ['zh_TW', 'zh_HK', ..... ])`
 
</p>

Any question please mail to wellington@programer.com.br ;)

