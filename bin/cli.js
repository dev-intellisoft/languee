#!/usr/bin/env node
const glob = require('glob');
const fs = require('fs')

glob('locales/**/*.json', {}, (err, files)=>
{
    var str = ``
    if ( err )
    {
        console.log(`Error: `, err)
        return
    }

    let exports = []

    for ( const [key, value] of Object.entries(files) )
    {
        const variable_name = value.replace(`locales/`, ``).replace(`.json`, ``).replace(/\//g,`_`)
        str  = `${str} const ${variable_name} = require('./${value.replace(`locales/`, ``)}');`

        exports.push(variable_name)
    }

    str  = `${str}module.exports =  { `
    for ( let i = 0; i < exports.length; i++ )
        str  = `${str} ${exports[i]},`
    str  = `${str}};`

    fs.writeFile(`locales/index.js`, str, (err) =>
    {
        if(err) return console.log(err)
    })
    console.log(str)
})