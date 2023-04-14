# ai.js
ChatGPT4 developed JS front-end framework.
This is a basic implementation of a toy JavaScript framework called "ai.js" that adheres to the requirements below and provides the requested features. This example is quite minimal and can be expanded further to better match the principles and add more functionality. All code has been copied verbatim from ChatGPT window.

Requirements.
- Allows easy DOM manipulation, as well as event handling.
- Can do AJAX GET and POST requests  without extra libraries.
- Is implemented in pure Javascript, compatible with all major browsers (Chrome, Firefox, Safari, Edge)
- contained in a single file under 2000 lines long

```
// Usage examples
// DOM manipulation and event handling
ai('#myElement').html('Hello, World!');
ai('button').on('click', function () {
  alert('Button clicked!');
});

// AJAX GET request
ai().ajax({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  success: function (response) {
    console.log('Success:', response);
  },
  error: function (status, statusText) {
    console.error('Error:', status, statusText);
  },
});

// AJAX POST request
ai().ajax({
  method: 'POST',
  url: 'https://jsonplaceholder.typicode.com/posts',
  data: 'title=MyTitle&body=MyBody&userId=1',
  success: function (response) {
    console.log('Success:', response);
  },
  error: function (status, statusText) {
    console.error('Error:', status, statusText);
  },
});
```
