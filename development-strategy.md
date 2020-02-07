# Name of Project

## User story

As a user, I want to add/multiply/subtract/divide two numbers

## Wireframe

https://wireframe.cc/470XWa

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| input | id="value1" , id="value2" | takes numbers (1 and 2) given by user |
| select | id="operator" | gives an option for user to choose wanted operation |
| button | id="calculate" | runs calculation process, attached to handler and listener |
| div | id="result" | show end result for user on the page |

## Styling

| class name | description | role |
| --- | --- | --- |
| body | general style for the page | setting background, sizes and align elements |
| .container | style for thw whole area of calculator | setting sizes |
| .box | target style for elements inside of spans | displays it as block elements,color, sizes |
| #calculate | style for calculation button | style border, color |
| input | target style for values  | style border, color |
| #operator | style for operatoe and options in it | style border, color |
| button | style for other buttons | style border, color |
| result | style for container with results | sizes of container, align text to center, font size |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| Listener for event attached to 'click' | button id="calculate" | function calc() |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| function calc() | operation, a, b | boolean | pass a, b, operation as arguments to doMath |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| function doMath(operation , a, b) | operation, a, b | result of calculate, or invalid operation | runs code for calculate |
| const doMathTests | | returns number or a string invalid operation | runs test cases for doMath function |

