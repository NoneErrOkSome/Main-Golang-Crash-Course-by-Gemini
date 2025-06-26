### Starting with a Solid Foundation: Essential Default CSS Settings

Before you write a single line of project-specific CSS, establishing a solid and consistent foundation is crucial for a smooth and predictable development process. These default settings, often referred to as a "CSS reset" or "normalize," are the first things you should put in your stylesheet. They help to eliminate browser inconsistencies, create a more intuitive sizing model, and set sensible defaults for typography and other elements.1

Here's a breakdown of the essential default settings you should use in your CSS, starting with the most modern and widely recommended approach.

---

### 1. The Modern CSS Reset: A Smarter Start

Traditional CSS resets were aggressive, stripping all default styling from every element. Modern resets are more nuanced, aiming to correct inconsistencies and set sensible defaults without being overly destructive.2 This approach is generally preferred today.

Place the following code at the very top of your main CSS file.

CSS

```CSS
/* 1. Use a more intuitive box-sizing model on all elements. */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin and padding on the body and other elements. */
* {
  margin: 0;
  padding: 0;
}

/* 3. Set core root defaults for font size and line height. */
html {
  /* Set base font size to 10px for easier rem calculations */
  font-size: 62.5%;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

/* 4. Set core body defaults. */
body {
  min-height: 100vh;
  line-height: 1.5;
  font-family: 'Your Chosen Font', sans-serif; /* Add your preferred font */
  font-size: 1.6rem; /* Equivalent to 16px */
}

/* 5. Make images and videos responsive by default. */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 6. Inherit fonts for form elements for consistency. */
input, button, textarea, select {
  font: inherit;
}

/* 7. Remove list styles on ul, ol elements with a list role, which suggests they'll be styled differently anyway. */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 9. Accessibility: Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### Why These Settings are Essential: A Deeper Dive

#### **`box-sizing: border-box;`**

- **What it does:** This is arguably the most critical default setting. It changes the CSS box model so that the `width` and `height` properties you set for an element include its `padding` and `border`, but not its `margin`.
- **Why it's essential:** By default, CSS adds padding and borders _on top of_ an element's specified width. This makes layout calculations unintuitive and difficult. With `border-box`, if you set an element's width to `200px`, it will always be `200px` wide, regardless of its padding or border thickness. This makes creating responsive and predictable layouts significantly easier.

#### **Removing Default Margins and Padding (`* { margin: 0; padding: 0; }`)**

- **What it does:** Different browsers have their own default `margin` and `padding` values for elements like headings, paragraphs, and lists.3 This rule removes all of them, providing a clean slate.
    
- **Why it's essential:** This prevents unexpected spacing issues caused by browser-specific defaults, giving you complete control over the layout from the start.4
    

#### **Root and Body Defaults**

- **`html { font-size: 62.5%; }`**: This clever trick sets the base font size to `10px` (`16px * 0.625 = 10px`). This makes using `rem` units for responsive typography incredibly easy, as `1.6rem` now equals a familiar `16px`.
- **`body { min-height: 100vh; }`**: This ensures that the body takes up at least the full height of the viewport, which is useful for footer placement and full-page layouts, even on pages with little content.5
    
- **`line-height: 1.5;`**: A unitless `line-height` is the recommended best practice for readability and scalability.6 It's a multiplier of the element's font size.
    

#### **Responsive Media (`max-width: 100%;`)**

- **What it does:** This rule prevents images, videos, and other media elements from overflowing their parent containers. If the container becomes narrower than the image's actual width, the image will scale down proportionally.
- **Why it's essential:** This is a fundamental aspect of building responsive websites that look good on all screen sizes.

#### **Form Element Font Inheritance**

- **What it does:** By default, form elements like `<input>`, `<button>`, and `<textarea>` do not inherit the body's font styles. This rule forces them to, ensuring a consistent typographic scale across your entire site.

#### **Accessibility (`prefers-reduced-motion`)**

- **What it does:** This media query detects if the user has requested the system to minimize the amount of non-essential motion it uses. If so, it effectively disables CSS animations, transitions, and smooth scrolling.
- **Why it's essential:** This is a critical accessibility feature for users with vestibular motion disorders, preventing animations that can cause dizziness or other physical reactions.

By starting every project with this set of default CSS rules, you create a more predictable, maintainable, and accessible foundation, allowing you to focus on the unique styling of your website rather than fighting with browser inconsistencies.