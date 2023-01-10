What is JSX?

JSX is a html like syntax. It is created by Facebook Developers.
It is used instead of React.createElement to increase the readability of code.
But behind the scenes, the code written in JSX read by babel converts to React.createElement.

SuperPowers of JSX

1. Readability
2. Easy to write
3. Clean code
4. Easy to maintain
5. Understandable

Role of type attribute in script tag? What options can i use there?

This attribute indicates the type of script represented. The value of this attribute will be one of the following:

Attribute is not set (default), an empty string, or a JavaScript MIME type

Indicates that the script is a "classic script", containing JavaScript code. Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type.

module

This value causes the code to be treated as a JavaScript module. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.

{TitleComponent} vs <TitleComponent/> vs <TitleComponent></TitleComponent> in JSX

All of above represent a component named as TitleComponent and you can use any of above term to include in your code.

