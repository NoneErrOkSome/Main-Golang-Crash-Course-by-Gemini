Here is a list of the most used CSS properties, units, and concepts in today's technologies to get things done and make them work, starting from the essentials.

### **Fundamental Concepts**

The foundation of CSS is built on a few key concepts that dictate how styles are applied to HTML elements.

- **Selectors:** These are patterns used to select the HTML elements you want to style. The most common selectors are:
    
    - **Type selectors:** Target elements by their tag name (e.g., `h1`, `p`, `div`).
        
    - **Class selectors:** Target elements with a specific class attribute (e.g., `.container`, `.button`).
        
    - **ID selectors:** Target a single element with a unique ID attribute (e.g., `#header`, `#main-content`).
        
- **The Box Model:** Every HTML element is treated as a rectangular box. The box model consists of four parts, from the inside out:
    
    - **`content`**: The actual content of the box, where text and images appear.
        
    - **`padding`**: The space between the content and the border.
        
    - **`border`**: A line that goes around the padding and content.
        
    - **`margin`**: The space outside the border, creating a gap between elements.
        
- **Cascade and Specificity:** The "Cascading" in CSS refers to the order in which conflicting style rules are applied. Specificity is the system browsers use to determine which CSS rule is the most relevant to an element and should be applied. Generally, more specific selectors (like an ID selector) will override less specific ones (like a type selector).
    

---

### **Essential Properties for Styling**

These properties are the bread and butter of styling web content.

- **`color`**: Sets the color of the text.
    
- **`background-color`**: Sets the background color of an element.
    
- **`font-family`**: Specifies the typeface for text. It's common to provide a list of fallback fonts.
    
- **`font-size`**: Controls the size of the text.
    
- **`font-weight`**: Sets the thickness of the text (e.g., `normal`, `bold`).
    
- **`text-align`**: Aligns the text within an element (e.g., `left`, `center`, `right`).
    
- **`width`** and **`height`**: Define the dimensions of an element.
    
- **`padding`**: Sets the space inside an element, around the content. You can set all four sides at once or individually (`padding-top`, `padding-right`, `padding-bottom`, `padding-left`).
    
- **`margin`**: Sets the space outside an element, creating distance from other elements. It can also be set for all four sides at once or individually (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`).
    
- **`border`**: Adds a line around an element. You can specify its `width`, `style` (e.g., `solid`, `dotted`), and `color`.
    
- **`display`**: This property is crucial for controlling the layout behavior of elements. Common values include:
    
    - **`block`**: The element starts on a new line and takes up the full width available.
        
    - **`inline`**: The element does not start on a new line and only takes up as much width as necessary.
        
    - **`none`**: The element is completely removed from the page.
        

---

### **Layout with Flexbox and Grid**

Modern layouts are predominantly built using Flexbox and Grid.

- #### **Flexbox (Flexible Box Layout)**
    
    Flexbox is a one-dimensional layout model that allows for easy alignment and distribution of space among items in a container.
    
    **Container Properties:**
    
    - **`display: flex;`**: Turns an element into a flex container.
        
    - **`flex-direction`**: Defines the main axis (e.g., `row`, `column`).
        
    - **`justify-content`**: Aligns items along the main axis (e.g., `center`, `space-between`).
        
    - **`align-items`**: Aligns items along the cross axis (e.g., `center`, `stretch`).
        
    - **`flex-wrap`**: Allows items to wrap onto multiple lines.
        
- #### **Grid Layout**
    
    Grid is a two-dimensional layout system, allowing for the creation of complex layouts with rows and columns.
    
    **Container Properties:**
    
    - **`display: grid;`**: Turns an element into a grid container.
        
    - **`grid-template-columns`** and **`grid-template-rows`**: Defines the number and size of columns and rows.
        
    - **`gap`**: Sets the space between grid items.
        

---

### **Responsive Design and Units**

Ensuring your website looks good on all screen sizes is essential.

- **`@media` Queries**: This is the cornerstone of responsive design. Media queries allow you to apply different CSS rules based on the device's characteristics, most commonly the viewport width.
    
- **Common Units**:
    
    - **`px`** (pixels): A fixed-size unit. While still used, it's less flexible for responsive designs.
        
    - **`%`** (percentage): A relative unit that is a percentage of the parent element's size.
        
    - **`em`**: A relative unit that is relative to the font-size of the parent element.
        
    - **`rem`** (root em): A relative unit that is relative to the font-size of the root element (`html`). This is a very common and recommended unit for creating scalable and responsive layouts.
        
    - **`vw`** (viewport width) and **`vh`** (viewport height): Units that are relative to the size of the viewport (the browser window). `1vw` is 1% of the viewport's width.