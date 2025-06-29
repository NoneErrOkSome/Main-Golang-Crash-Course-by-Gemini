In modern web development, the choice of CSS units has shifted towards creating responsive and accessible designs.1 While several units exist, a few are predominantly used in today's practice.

### **Relative Units: The Modern Standard**

Relative units are the cornerstone of flexible and scalable web design.2 They adjust to the user's browser settings and screen sizes, making them ideal for responsive layouts.3

- rem (Root em) 👑4
    
    This is arguably the most recommended and widely used unit in modern CSS. rem is relative to the font size of the root element (the <html> tag). This creates a consistent and predictable scale across your entire website. By changing the root font size, you can scale all rem-based properties proportionally, which is fantastic for accessibility and creating different layouts for various devices.5
    
    - **Common Use Cases:** Font sizes, margins, padding, and component sizes.6
        
- em
    
    The em unit is relative to the font size of its direct parent element.7 This can be powerful but also tricky to manage in complex, nested structures, as font sizes can cascade and compound unexpectedly.
    
    - **Common Use Cases:** Sizing elements that should scale relative to the font size of their immediate container, like the padding on a button or the margin on an icon within a text block.8
        
- % (Percentage)
    
    Percentages are always relative to a dimension of the parent element.9 For width, it's the parent's width; for height, it's the parent's height.
    
    - **Common Use Cases:** Creating fluid layouts, like setting the width of columns in a grid.
        

---

### **Viewport Units: For Screen-Relative Sizing**

Viewport units are essential for creating elements that scale directly with the size of the browser window.10

- vw (Viewport Width) and vh (Viewport Height) 🖼️11
    
    1vw is equal to 1% of the viewport's width, and 1vh is 1% of its height. These are incredibly useful for creating full-screen sections or elements that need to maintain a specific aspect ratio relative to the screen.
    
    - **Common Use Cases:** Hero sections that fill the entire screen (`height: 100vh;`), responsive typography that scales with the browser width.12
        

---

### **Absolute Units: For Fixed-Size Elements**

While less common for overall layout, absolute units still have their place for elements that require a fixed size regardless of the context.13

- px (Pixels) 픽셀14
    
    Pixels are a fixed unit, and while they offer precise control, they don't scale with user preferences for font size.15 In modern development, their use is more limited.
    
    - **Common Use Cases:** Borders (`border: 1px solid black;`), box-shadow offsets, and situations where you need a small, precise, and non-scalable value.