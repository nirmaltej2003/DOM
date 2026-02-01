# DOM (Document Object Model) Overview

The **DOM (Document Object Model)** is a programming interface for web documents. It represents the page so that programs can change the **structure, style, and content** of a website dynamically.

## Key Features

- **Object-Oriented Representation:** HTML and XML documents are represented as objects and nodes.  
- **Dynamic Manipulation:** Allows adding, removing, or modifying elements on the webpage.  
- **Event Handling:** Enables interaction with users through events like clicks, keypresses, and mouse movements.  
- **Cross-Language Support:** Can be accessed using JavaScript, Python, Java, and other languages.  
- **Tree Structure:** The document is represented as a tree of nodes, including elements, attributes, and text.

## DOM Structure

- **Document:** The root node representing the entire HTML or XML document.  
- **Element Nodes:** Represent HTML elements like `<div>`, `<p>`, `<h1>`.  
- **Text Nodes:** Contain the text content of elements.  
- **Attribute Nodes:** Represent element attributes like `id`, `class`, `src`.  
- **Comment Nodes:** Represent HTML comments.  

### Example Tree Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1>Hello, DOM!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
