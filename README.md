# ![BALKAN OrgChart JS](https://orgchartjs.balkan.app/favicon-32x32.png) BALKAN OrgChart JS



**BALKAN OrgChart JS** is a powerful **JavaScript library** for building **interactive organizational charts and hierarchy diagrams**. Create responsive org charts for **company structures, HR systems, dashboards, and internal tools** with minimal code and full customization.

![OrgChart JS](https://balkan.app/Content/Img/oc.png)

## [Demos](https://balkan.app/OrgChartJS/Demos/BasicUsage)  &nbsp;&nbsp;&nbsp;&nbsp;  [Docs](https://balkan.app/OrgChartJS/Docs/GettingStarted)  &nbsp;&nbsp;&nbsp;&nbsp;  [Download](https://balkan.app/OrgChartJS/Download) &nbsp;&nbsp;&nbsp;&nbsp;  [Support](https://balkan.app/OrgChartJS/Support)


<br>

## Overview

**OrgChart JS** is FREE Trial, available under [EULA](https://balkan.app/OrgChartJS/Legal/EULA). You have 3 options to install OrgChart JS, from NPM, form CDN or Standalone.

<br>

## NPM Installation and Usage

### Step 1 - Installation

```bash
npm install balkan‑orgchart‑js
```

or with yarn:

```bash
yarn add balkan‑orgchart‑js
```

### Step 2 - Import it in your code

```javascript
import OrgChart from "balkan‑orgchart‑js";
```

or with CommonJS:

```javascript
const { OrgChart } = require("balkan‑orgchart‑js");
```

### Step 3 - Usage

```javascript
const chart = new OrgChart(document.getElementById("tree"), {
  nodeBinding: {
    field_0: "name",
  }
});

chart.load([
    { id: 1, name: "CEO" },
    { id: 2, pid: 1, name: "Manager" },
    { id: 3, pid: 1, name: "Designer" }
  ]);
```

<br>

## CDN Installation and Usage

### Step 1 - Import it in your code

Add in your HTML page
```html
<script src="https://cdn.balkan.app/orgchart.js"></script>
<div id="tree"></div>
```

### Step 2 - Usage
Add in your javascipt page
```javascipt

const chart = new OrgChart(document.getElementById("tree"), {
  nodeBinding: {
    field_0: "name",
  }
});

chart.load([
    { id: 1, name: "CEO" },
    { id: 2, pid: 1, name: "Manager" },
    { id: 3, pid: 1, name: "Designer" }
  ]);
```

<br>

## Standalone Installation and Usage

### Step 1 - Installation

Download orgchart.zip file from here: https://balkan.app/OrgChartJS/Download

### Step 2 - Import it in your code

Unzip the file and add orgchart.js and orgchart.d.ts to your root directory and add the code below to your html page:
```html
<script src="orgchart.js"></script>
<div id="tree"></div>
```

### Step 3 - Usage

In your javascript file add:

```javascript
/// <reference path="OrgChart.d.ts" />

const chart = new OrgChart(document.getElementById("tree"), {
  nodeBinding: {
    field_0: "name",
  }
});

chart.load([
    { id: 1, name: "CEO" },
    { id: 2, pid: 1, name: "Manager" },
    { id: 3, pid: 1, name: "Designer" }
  ]);
```

OrgChart.d.ts is for intellisense (autocomplete)

<br>

## Other Framework-Specific OrgChart JS Libraries 
- Community - MIT License
    - [balkan-orgchart-js-community](https://www.npmjs.com/package/balkan-orgchart-js-community) 
    - [balkan-orgchart-react-community](https://www.npmjs.com/package/balkan-orgchart-react-community) 
    - [balkan-orgchart-vue-community](https://www.npmjs.com/package/balkan-orgchart-vue-community) 
    - [balkan-orgchart-angular-community](https://www.npmjs.com/package/balkan-orgchart-angular-community) 
- Commercial - FREE Trial License
    - [balkan-orgchart-react](https://www.npmjs.com/package/balkan-orgchart-react)
    - [balkan-orgchart-vue](https://www.npmjs.com/package/balkan-orgchart-vue) 
    - [balkan-orgchart-angular](https://www.npmjs.com/package/balkan-orgchart-angular) 

<br>

## [Demos](https://balkan.app/OrgChartJS/Demos/BasicUsage)  &nbsp;&nbsp;&nbsp;&nbsp;  [Docs](https://balkan.app/OrgChartJS/Docs/GettingStarted)  &nbsp;&nbsp;&nbsp;&nbsp;  [Download](https://balkan.app/OrgChartJS/Download) &nbsp;&nbsp;&nbsp;&nbsp;  [Support](https://balkan.app/OrgChartJS/Support)




