# ![OrgChart JS](https://orgchartjs.balkan.app/favicon-32x32.png) OrgChart JS




**BALKAN OrgChart JS** is a powerful **JavaScript library** for building **interactive organizational charts and hierarchy diagrams**. Create responsive org charts for **company structures, HR systems, dashboards, and internal tools** with minimal code and full customization.

![OrgChart JS](https://balkan.app/Content/Img/oc.png)

## [Demos](https://balkan.app/OrgChartJS/Demos/BasicUsage)  &nbsp;&nbsp;&nbsp;&nbsp;  [Docs](https://balkan.app/OrgChartJS/Docs/GettingStarted)  &nbsp;&nbsp;&nbsp;&nbsp;  [Download](https://balkan.app/OrgChartJS/Download) &nbsp;&nbsp;&nbsp;&nbsp;  [Support](https://balkan.app/OrgChartJS/Support)


<br>

## Overview

**OrgChart JS** is FREE Trial, available under [EULA](https://balkan.app/OrgChartJS/Legal/EULA). 

<br>


## Installation

```bash
npm install balkan-orgchart-js
```

or with yarn:

```bash
yarn add balkan-orgchart-js
```

## Import it in your code

```javascript
import OrgChart from "balkan-orgchart-js";
```


## Usage

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

<br>

## Other Framework-Specific OrgChart JS Libraries 
- Community 
    - [balkan-orgchart-js-community](https://www.npmjs.com/package/balkan-orgchart-js-community) 
    - [balkan-orgchart-react-community](https://www.npmjs.com/package/balkan-orgchart-react-community) 
    - [balkan-orgchart-vue-community](https://www.npmjs.com/package/balkan-orgchart-vue-community) 
    - [balkan-orgchart-angular-community](https://www.npmjs.com/package/balkan-orgchart-angular-community) 
- Commercial - FREE Trial License
    - [balkan-orgchart-js](https://www.npmjs.com/package/balkan-orgchart-js) 
    - [balkan-orgchart-react](https://www.npmjs.com/package/balkan-orgchart-react)
    - [balkan-orgchart-vue](https://www.npmjs.com/package/balkan-orgchart-vue) 
    - [balkan-orgchart-angular](https://www.npmjs.com/package/balkan-orgchart-angular) 

<br>

## [Demos](https://balkan.app/OrgChartJS/Demos/BasicUsage)  &nbsp;&nbsp;&nbsp;&nbsp;  [Docs](https://balkan.app/OrgChartJS/Docs/GettingStarted)  &nbsp;&nbsp;&nbsp;&nbsp;  [Download](https://balkan.app/OrgChartJS/Download) &nbsp;&nbsp;&nbsp;&nbsp;  [Support](https://balkan.app/OrgChartJS/Support)




