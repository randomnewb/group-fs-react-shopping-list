**_Make sure you run a client and a server, run your database as well_**
The database is called: fs-react-shopping

-   [x] npm install (to grab dependencies)
-   [x] install axios
-   [x] import axios
-   [x] install material ui (see below)
-   [x] Setup database table with commands and example data
-   [x] Create our router

-   [x] Plan layout and containers

Router

-   /grocery

### Input Component - Input fields at the top of the page

App.jsx

-   [] POST

Router

-   [] POST

Fields

-   [x] Item
-   [x] Quantity
-   [x] Unit

Button

-   [] Save button

-   [] useEffect (on page load)

### Grocery Component - Main Shopping List functions

Router

-   [x] DELETE (all)
-   [x] PUT ('reset' all)

App.jsx

-   [x] DELETE (all)
-   [x] PUT ('reset' all)

Inside component

-   [x] Reset button (changes status of all items from purchased to not purchased)
-   [x] Clear button (deletes all items from database)

### Item Component (will have access to the id) - Add maxWidth attribute

Router

-   [x] GET
-   [] POST (by id)
-   [] DELETE (by id)

App.jsx

-   [x] GET
-   [] POST (by id)
-   [] DELETE (by id)

Component (map through)

-   [x] name label
-   [x] quantity and unit label
-   [x] buy button
-   [x] remove button

### Installation

https://mui.com/material-ui/getting-started/installation/

Install React via npm

```
npm install @mui/material @emotion/react @emotion/styled
```

Link the Robot font

```
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

Link the Font icons

```
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

Install SVG icons via npm

```
npm install @mui/icons-material
```

Delegating tasks

-   [] Input component [Nathan]
-   [] Grocery component [Jennifer]
-   [] Item component [Tu]
-   [] axios routes / grocery.router.js [Nathan]
-   [] useState, useEffect

Object name: 'grocery'
