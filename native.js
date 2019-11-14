// const fs = require('fs')
// const path = require('path');

var locale = new Intl.DateTimeFormat().resolvedOptions().locale.replace(`-`, `_`)
var directory = `locales`
var file = `main`

const setLocale = ( l ) =>  locale = l
const setDirectory = ( d ) => directory = d
const setFile = ( f ) => file = f

const load = ( my_locale ) =>
{
    const translations = require('../../locales/index')
    return translations[`${my_locale || getLocale()}_${getFile()}`] || {}
}

const getDirectory = () => directory
const getFile = () => file
const getLocale = () => locale

const t = ( text, arr = {}, locale = null ) =>
{
    const translator = load(locale)

    text = translator[text] || text

    for ( let key in arr )
        text = text.replace(`{${key}}`, arr[key])

    return text
}

module.exports = {
    t, setLocale, setDirectory, setFile, getDirectory, getFile, getLocale
}