Of course. Here is the simplest, most modern, and robust way to create a classic layout with a navbar, sidebar, main area, and footer using **CSS Grid**.

This approach is highly recommended because the code is minimal, easy to understand, and responsive by default.

### Step 1: The HTML Structure (`index.html`)

First, create your `index.html` file. We will use semantic HTML tags (`<header>`, `<aside>`, `<main>`, `<footer>`) because they clearly define each part of the page.

HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Layout</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="page-header">
        Navbar
    </header>

    <aside class="page-sidebar">
        Sidebar
        <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
        </ul>
    </aside>

    <main class="page-main">
        <h1>Main Content Area</h1>
        <p>This is where the primary content of the page goes. It will stretch to fill the available space.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta.</p>
    </main>

    <footer class="page-footer">
        Footer
    </footer>

</body>
</html>
```

### Step 2: The CSS Layout (`style.css`)

Now, create the `style.css` file. We will use CSS Grid to arrange the semantic tags we just created. The comments explain each step.

CSS

```CSS
/* --- Basic Reset and Body Styles --- */
* {
    box-sizing: border-box; /* Makes working with padding and borders easier */
}

body {
    margin: 0; /* Removes default browser margin */
    font-family: system-ui, sans-serif;
    color: white;
    
    /* --- The Core Grid Layout --- */
    min-height: 100vh; /* Make the layout at least the full height of the screen */
    display: grid;

    /* Define the layout structure with named areas.
      This visually maps out our page.
    */
    grid-template-areas:
      "header  header"
      "sidebar main"
      "footer  footer";
    
    /* Define the column and row sizes.
      - First column (sidebar) is 240px wide.
      - Second column (main) takes up the "1 fractional unit" of remaining space.
      - First and third rows (header/footer) size to their content.
      - Second row (sidebar/main) takes up the "1 fractional unit" of remaining height.
    */
    grid-template-columns: 240px 1fr;
    grid-template-rows: 60px 1fr 60px;
}

/* --- Assigning HTML tags to Grid Areas --- */

.page-header {
    grid-area: header;
    background-color: #2c3e50;
}

.page-sidebar {
    grid-area: sidebar;
    background-color: #34495e;
}

.page-main {
    grid-area: main;
    background-color: #ecf0f1;
    color: #333; /* Darker text for light background */
}

.page-footer {
    grid-area: footer;
    background-color: #2c3e50;
}

/* --- Utility styles for presentation --- */
.page-header, .page-sidebar, .page-main, .page-footer {
    display: grid;
    align-items: center; /* Vertically center content */
    justify-content: center; /* Horizontally center content */
    padding: 20px;
}

/* --- Mobile Responsiveness --- */

/* On screens smaller than 768px, change the layout to a single column.
  This is a mobile-first approach.
*/
@media (max-width: 768px) {
    body {
        /* Redefine the layout for mobile */
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "footer";
        
        /* A single column that takes up the full width */
        grid-template-columns: 1fr;
        /* Rows now size automatically based on their content */
        grid-template-rows: auto;
    }
    
    /* Make the sidebar look more natural in a single-column layout */
    .page-sidebar {
      text-align: center;
    }
}
```

### How It Works:

1. **`display: grid`**: We turn the `<body>` element into a grid container.
    
2. **`grid-template-areas`**: This is the most intuitive part. We draw our desired layout with names. The `header` and `footer` span across both columns, while the `sidebar` and `main` sit next to each other.
    
3. **`grid-template-columns` and `grid-template-rows`**: We define the size of our tracks. The `1fr` unit is powerful; it means "take up one fraction of the available free space." This makes the main content area fluid.
    
4. **`grid-area`**: We assign each HTML element (like `<header>`) to its corresponding named area in the grid.
    
5. **`@media` query**: For screens smaller than `768px` (a common tablet/mobile breakpoint), we redefine the grid to be a simple single column, stacking the elements vertically for easy viewing on a phone.