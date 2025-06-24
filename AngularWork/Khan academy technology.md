As of late 2024 and early 2025, Khan Academy employs a sophisticated and modern technology stack that has evolved significantly over the years. Their platform is built using a variety of key libraries and technologies to deliver a free, world-class education to millions of users. The core of their web application is powered by React, while their backend has undergone a major transition to a services-oriented architecture using Go.

### Frontend Libraries

The user-facing portion of Khan Academy's website is a dynamic application that has transitioned from older technologies to a modern React-based architecture.

- **React:** This is the primary JavaScript library used for building the user interface. Khan Academy adopted React to create a more interactive and component-based frontend, moving away from legacy libraries.
- **Redux:** For managing complex application state, Khan Academy utilizes Redux. This is essential for maintaining a predictable state container for user progress, course information, and UI state.
- **Perseus:** This is Khan Academy's own open-source exercise and question framework. Perseus itself is built with **React**, and it is the core technology that renders and grades the interactive exercises on the platform.
- **Storybook:** Used in the development of their Perseus framework and their internal UI component library, **Wonder Blocks**, to build and test UI components in isolation.
- **Legacy Libraries:** While the main application is built on React, parts of the older codebase utilized **Backbone.js** and **jQuery**. These have been progressively replaced as the platform modernizes.

### Backend Technologies

Khan Academy has famously undertaken a massive architectural overhaul on its backend, migrating from a single monolithic application to a more scalable and efficient services-oriented architecture.

- **Go (Golang):** This is now the primary programming language for Khan Academy's backend services. They migrated from a large Python 2 monolith to Go to improve performance, concurrency, and long-term maintainability.
- **GraphQL:** Serving as the main API layer, GraphQL manages communication between the frontend clients and the backend Go services. This allows for efficient data fetching and a flexible API for their web and mobile applications.
- **Python:** While the core backend is now in Go, Python was the original language of the Khan Academy monolith. It is still used in various parts of their infrastructure, particularly for data analysis and pipeline orchestration.
- **Google Cloud Platform (GCP):** The entire platform is hosted on GCP, utilizing services like **Google App Engine** for running their Go services and **Google BigQuery** for large-scale data analysis.
- **Databases:** The primary database used is **PostgreSQL**, a powerful open-source relational database.

### Mobile App Libraries

Both the iOS and Android applications for Khan Academy have been completely rebuilt to provide a unified experience.

- **React Native:** Khan Academy has fully transitioned its mobile apps to React Native. This allows them to maintain a single JavaScript codebase for both their iOS and Android platforms, streamlining development and ensuring feature parity across devices.

### Testing and Development

To ensure the quality and stability of their platform, Khan Academy uses a suite of modern testing libraries.

- **Jest:** A popular JavaScript testing framework used for unit testing their code.
- **Cypress:** For end-to-end testing, ensuring that the application works as expected from a user's perspective.