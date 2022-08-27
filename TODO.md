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

Input fields at the top of the page

-   [] Item
-   [] Quantity
-   [] Unit

-   [] useEffect (on page load)

Main Shopping List functions

-   [] Reset button (changes status of all items from purchased to not purchased)
-   [] Clear button (deletes all items from database)

Item component (will have access to the id) - Add maxWidth attribute

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
