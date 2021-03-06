import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

// api
import StyleSheet from './modules/StyleSheet'

// components
import Image from './components/Image'
import ListView from './components/ListView'
import ScrollView from './components/ScrollView'
import Text from './components/Text'
import TextInput from './components/TextInput'
import Touchable from './components/Touchable'
import View from './components/View'

const renderStyle = () => {
  return `<style id='react-stylesheet'>${StyleSheet._renderToString()}</style>`
}

const render = (element, container, callback) => {
  const styleElement = document.getElementById('react-stylesheet')
  if (!styleElement) {
    const style = renderStyle()
    container.insertAdjacentHTML('beforebegin', style)
  }
  return ReactDOM.render(element, container, callback)
}

const renderToString = (element) => {
  const style = renderStyle()
  const html = ReactDOMServer.renderToString(element)
  return `${style}\n${html}`
}

const renderToStaticMarkup = (element) => {
  const style = renderStyle()
  const html = ReactDOMServer.renderToStaticMarkup(element)
  return `${style}\n${html}`
}

const ReactNative = {
  // apis
  StyleSheet,

  // components
  Image,
  ListView,
  ScrollView,
  Text,
  TextInput,
  Touchable,
  View,

  // React
  ...React,
  ...ReactDOM,
  ...ReactDOMServer,
  render,
  renderToString,
  renderToStaticMarkup
}

module.exports = ReactNative
