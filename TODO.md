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

-   [] Item
-   [] Quantity
-   [] Unit

Button

-   [] Save button

-   [] useEffect (on page load)

### Grocery Component - Main Shopping List functions

Router

-   [] DELETE (all)
-   [] PUT ('reset' all)

App.jsx

-   DELETE (all)
-   PUT ('reset' all)

Inside component

-   [] Reset button (changes status of all items from purchased to not purchased)
-   [] Clear button (deletes all items from database)

### Item Component (will have access to the id) - Add maxWidth attribute

Router

-   [] GET
-   [] POST (by id)
-   [] DELETE (by id)

App.jsx

-   [] GET
-   [] POST (by id)
-   [] DELETE (by id)

Component (map through)

-   [] name label
-   [] quantity and unit label
-   [] buy button
-   [] remove button

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
