<<<<<<< HEAD
## Interactions and Transitions
=======
## Smörgåsbord

===

### Menu

* Deep dive on Homework 8
* CSS (and HTML) review
* Cross-browser support
* Real-world development environments
    * Transpiling and Babel
    * Webpack
    * ECMAScript 6
    * TypeScript
* Q & A
>>>>>>> upstream/master

===

## Review

<<<<<<< HEAD
[Assignment 7](materials/Week 7/Assignment)

Notes:

* Talk about small multiples
* (http://www.juiceanalytics.com/writing/better-know-visualization-small-multiples)

===

## Transitions

---

### What is a d3 transition?

* A way to animate changes to the elements on the page
* Commonly used to animate elements':
    * position
    * size
    * color
    * opacity
    * shape (`d`)

---

### Example

```javascript
// make circle
var myCircle = g
    .append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 25)
    .attr('fill', 'red');

// transition
myCircle
    .transition()
    .duration(1000) // time in milliseconds
    .attr('r', 100);
=======
[Assignment 8](materials/Week 8/Assignment)

Example

Notes:

* Getting radio button and input values
* Index-dependent delays
* Sorting transitions

===

## HTML and CSS

===

## HTML

---

### The core of the DOM

* Tags
* Attributes
* Text

```html
<div class="my-class">Hello world</div>
>>>>>>> upstream/master
```

---

<<<<<<< HEAD
### Anatomy

1. Call the `transition` method on any selection
2. Define a `duration` in milliseconds
3. Modify attributes to their end state

Notes:

* Show that you can chain transition to creation
* Show that you can transition multiple attributes

---

### Delays

```javascript
g
    .append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 25)
    .attr('fill', 'red')
    .transition()
    .duration(1000)
    .delay(3000)
    .attr('r', 100);
```

---

### Easing functions

* Easing functions define rate at which the transition occurs

```javascript
g
    .append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 25)
    .attr('fill', 'red')
    .transition()
    .duration(1000)
    .delay(3000)
    .ease(d3.easeBounce)
    .attr('r', 100);
```

---

### Easing functions (cont'd)

* [docs](https://github.com/d3/d3-ease)

    * `d3.easeLinear`
    * `d3.easeQuad`

* Please don't ever use `d3.easeBounce`
* [explorer](https://bl.ocks.org/mbostock/248bac3b8e354a9103c4)

---

### Transition chaining

* What if you want to do one thing and then another?

```javascript
g
    .append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 25)
    .attr('fill', 'red')
    .transition() // transition 1
    .duration(1000)
    .delay(3000)
    .attr('r', 100)
    .transition() // transition 2
    .duration(1000)
    .attr('fill', 'blue');
```

---

### Combining it all

```javascript
g
    .append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 25)
    .attr('fill', 'yellow')
    .transition()
    .duration(1000)
    .delay(3000)
    .attr('r', 100)
    .attr('fill', 'red')
    .transition()
    .duration(1000)
    .attr('r', 25)
    .attr('fill', 'yellow');
=======
### Common tags

```html
<h1>I'm a large heading</h1>

<p>I'm a paragraph</p>

<input type="radio|checkbox|text|..."/> <!-- I'm an input -->

<select> <!-- I'm a dropdown menu -->
    <option value="val1"></option>
</select>

<div>I'm a div. I hold things</div>
```

===

## CSS

---

<div style="font-size: 0.5em">Inline Styles</div>

```html
<div style="color:red">Hello world</div>
```

<div style="font-size: 0.5em">Internal Style Sheet</div>

```html
<style>
.my-class {
    color: red;
}
</style>
<div class="my-class">Hello world</div>
```

<div style="font-size: 0.5em">External Style Sheet</div>

```html
<link rel="styles.css">
<div class="my-class">Hello world</div>
```

```css
.my-class {
    color: red;
}
```

---

### CSS in D3

```javascript
g.selectAll('.text-label').style('font-size', 12);
```

vs

```css
.text-label {
    font-size: 12px;
}
```

---

### Common attributes

```css
p {
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
    text-decoration: underline;
    color: red;
}

div {
    padding: 0 5px 0 10px;
    margin: auto;
    width: 100px;
    height: 100px;
    background-color: black;
}
>>>>>>> upstream/master
```

---

<<<<<<< HEAD
### What can you transition?

* Numeric attributes and styles
* Colors
* Transforms
* SVG path shaped (`d` attribute)

===

## Event Handling

---

### What's event handling?

* Doing something when something else (an "event") happens
* Examples:
    * Change the size of a circle when user hovers
    * Change the data in a graph when a user selects an item in a dropdown menu

---

### How do we do it?

* In D3, we use the `.on()` method to handle events

```javascript
g
    .append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 25)
    .attr('fill', 'blue')
    .on('click', function() {
        d3
            .select(this)
            .transition()
            .duration(1000)
            .delay(3000)
            .attr('r', 100)
            .attr('fill', 'red');
    });
```

---

### What just happened?

* The `.on()` method takes two arguments
    1. A string indicating what event to listen for
    2. A function to run when the event occurs
        * The function takes the 3 usual arguments (`d`, `i`, `a`)
        * Inside the function, `this` is the element that the event was bound to

---

### Events to listen for

* `click`
* `mouseover`
* `mouseout`
* `input`
* [others](https://developer.mozilla.org/en-US/docs/Web/Events)

===

[Example](/materials/Week%208/Slides/examples/bar%20chart/)

===

Live Coding (if we have time)
=======
### More info and tutorials:

[Week 1/2 reading](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html)
[codecademy.com tutorials](https://www.codecademy.com/en/tracks/web)

===

## Browser support

---

### Common browsers

* Chrome
* FireFox
* Edge
* Safari
* Internet Explorer
    * 8, 9, 10, 11

Different browsers are different!

---

### How?

* Fonts, positioning
* Update frequency
    * Chrome, FireFox, Edge: frequent auto-updates
    * IE: major versions, no updates
* Specification implementation

---

### IE: The Black Sheep

* Bundled with Windows, opt-in updates
* Versions 8 and earlier don't support newer HTML, CSS, JS features
* Discontinued! (but still prevalent...)

===

## Real-world development

---

### Transpilation

* Translating your code into something that all browsers can understand
* Helps with (but does not guarantee!) browser support
* Babel
    * Translate modern JS into older syntax
* TypeScript
    * JS-like language with typing
    * Compiles to JS

---

### Webpack

* Packages up larger, multi-file JS applications
* Transpiles code
* Much, much more

===

## Q & A
>>>>>>> upstream/master

===

### Cool Tools

<<<<<<< HEAD
* [Observable](https://beta.observablehq.com/)

===

### Assignment 8

1. [Assignment 8](https://github.com/linusmarco/d3-training/blob/master/src/materials/Week%208/Assignment/Assignment%208.md)
2. Re-read [Interactive Data Visualization for the Web: Chapter 3](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html) (continued from week 1)
=======
* [codepen](https://codepen.io/)

===

### Assignment 9

Finish your final projects!!
>>>>>>> upstream/master
