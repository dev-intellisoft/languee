#!/usr/bin/env node
const glob = require('glob');
const fs = require('fs')
const cliProgress = require('cli-progress')

const command = process.argv[2] || ``

console.clear()

switch ( command )
{
    case `create`:
    {
        const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
        const locale = process.argv[3] || `en_US`
        glob('src/**/*.js', {}, (err, files)=>
        {
            if ( err )
                return
            let start = 0
            let end = files.length - 1
            progress.start(end, start)

            if ( !fs.existsSync(`locales`) )
                fs.mkdirSync(`locales`)

            if ( !fs.existsSync(`locales/${locale}`) )
                fs.mkdirSync(`locales/${locale}`)

            files.map((file, index) =>
            {
                const content = fs.readFileSync(file, `utf8`)

                if ( content.includes(`languee`) )
                {
                    try
                    {
                        let set_file = content.match(/(setFile)\(.*\)/g)
                        const matches = content.match(/(t\(`.*`\)|t\('.*'\))|t\(".*"\)/g)
                        
                        if ( set_file !== null && set_file.length )
                            set_file = set_file[0].replace(/setFile\((`|"|')/, ``).replace(/(`|"|')\)/, ``)
                        else
                            set_file = `main`

                        if ( !fs.existsSync(`locales/${locale}/${set_file}.json`) )
                            fs.writeFileSync(`locales/${locale}/${set_file}.json`, `{}`)

                        let translation = fs.readFileSync(`locales/${locale}/${set_file}.json`, `utf8`)
                        translation = JSON.parse(translation)

                        matches.map(match => {
                            match = match.replace(/(t\(`|t\("|t\(')/, ``).replace(/(`\)|"\)|'\))/, ``)
                            translation[match] = match
                        })
                        fs.writeFileSync(`locales/${locale}/${set_file}.json`, JSON.stringify(translation, null, 2))

                    }
                    catch(e)
                    {
                        // console.log(`Error: `, e)
                    }
                }
                progress.update(index)
            })

            progress.stop()
            console.log(`Language project was successfully created!`)
        })
    }
    break
    case `assemble`:
    {
        const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
        glob('locales/**/*.json', {}, (err, files)=>
        {
            var str = ``
            if ( err )
            {
                console.log(`Error: `, err)
                return
            }

            let start = 0
            let end = files.length - 1
            progress.start(end, start)

            let exports = []

            for ( const [ key, value ] of Object.entries(files) )
            {
                const variable_name = value.replace(`locales/`, ``).replace(`.json`, ``).replace(/\//g,`_`)
                str  = `${str} const ${variable_name} = require('./${value.replace(`locales/`, ``)}');`

                exports.push(variable_name)
                progress.update(key)
            }

            str  = `${str}module.exports =  { `
            for ( let i = 0; i < exports.length; i++ )
                str  = `${str} ${exports[i]},`
            str  = `${str}};`

            fs.writeFileSync(`locales/index.js`, str)
            progress.stop()
            console.log(`Language project was successfully assembled!`)
        })
    }
    break
    default:
    {
        console.log(``)
        console.log(`LANGUEE USAGE:`)
        console.log(`   create [locale]- Create all files and directories according to mentioned key on you project`)
        console.log(`   assemble - Assemble all files and directories to you index js (this is a magic for react native)`)
        console.log(``)
    }
    break
}

