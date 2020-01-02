'use strict';

import { NativeModules } from 'react-native'

const { RNLanguages } = NativeModules;

var locale = RNLanguages?RNLanguages.language:`en_US`

if ( !locale.includes(`_`) || !locale.includes(`-`) )
    locale = `en_US`
if ( locale.includes(`-`) )
    locale = locale.replace(`-`, `_`)

var directory = `locales`
var file = `main`
var maps = []

const setLocale = ( l ) =>  locale = l
const setDirectory = ( d ) => directory = d
const setFile = ( f ) => file = f

const getDirectory = () => directory
const getFile = () => file
const getLocale = () => locale
const setMaps = ( main_locale,  locales = [] ) => maps.push({[main_locale]:[ ...locales]})

const map = ( l ) =>
{
    for ( let [okey, ovalue] of Object.entries(maps))
        for ( let [lkey, lvalue] of Object.entries(ovalue))
            if ( lvalue.indexOf(l) !== -1 )
                l = lkey

    return l
}


const load = ( my_locale ) =>
{
    let _locale = my_locale || getLocale()

    _locale = map(_locale)

    try
    {
        const translations = require('../../locales/index')
        return translations[`${_locale}_${getFile()}`] || {}
    }
    catch (e)
    {
        return {}
    }
}


const t = ( text, arr = {}, locale = null ) =>
{
    const translator = load(locale)

    text = translator[text] || text

    for ( let key in arr )
        text = text.replace(`{${key}}`, arr[key])

    return text
}

module.exports = { t, setLocale, setDirectory, setFile, getDirectory, getFile, getLocale, setMaps }