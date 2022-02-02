import { createGlobalStyle } from "styled-components";

const normalize = `
/* modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`

const GlobalStyles = createGlobalStyle`
  ${ normalize }

  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.color.body};
    font-size: 16px;
    font-family: ${props => props.theme.font.primary};
    background-color: #f3f3f3;
    margin: 0;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.color.black};
  }

  h1, h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }

  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
  }

  a,
  a:hover,
  a:focus,
  a:visited {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input,
  select {
    width: 100%;
    display: block;
    padding: 8px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #ebebeb;
  }

  svg {
    fill: currentColor;
    width: 1em;
    height: 1em
  }
`

export default GlobalStyles
