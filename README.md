# ![Org Chart JS](https://balkangraph.com/content/img/icon-orgchart-js.png) Org Chart JS
Build organizational chart app with BALKAN OrgChartJS JavaScript library. Org Chart JS is a simple, flexible and highly customizable organization chart plugin for presenting the structure of your organization and the relationships in an elegant way.

![Org Chart JS](https://cdn.balkan.app/OrgChartJS/OrgChartJS.jpg?v=1)

## [Demos](https://balkan.app/OrgChartJS/Demos/BasicUsage)  &nbsp;&nbsp;&nbsp;&nbsp;  [Docs](https://balkan.app/OrgChartJS/Docs/GettingStarted)  &nbsp;&nbsp;&nbsp;&nbsp;  [Download](https://balkan.app/OrgChartJS/Download) &nbsp;&nbsp;&nbsp;&nbsp;  [Support](https://balkan.app/OrgChartJS/Support)

## Features
- Supports both local data and remote data (JSON)
- Smooth expand/collapse effects
- Align the chart in 8 orientations
- Allows user to change orgchart structure by drag/drop nodes
- Supports pan and zoom
- Edit Form
- Node Customization
- Search
- Scroll Bars
- Lazy Loading
- Mixed Hierarchy
- Exporting
- Assistant
- Partners
- Sub Trees
- Family Tree

## Installation
Option 1 - [standalone build](https://balkan.app/OrgChartJS/Docs/GettingStarted)

Option 2 - NPM
```
npm i @balkangraph/orgchart.js
```

Option 3 - Bower
```
bower install orgchart.js
```


## Usage
```
    <script src="https://balkan.app/js/orgchart.js"></script>
    <div id="tree"/>
    <script> 
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "name"
        },
        nodes: [
            { id: 1, name: "Amber McKenzie" },
            { id: 2, pid: 1, name: "Ava Field" },
            { id: 3, pid: 1, name: "Peter Stevens" }
        ]
    });
    </script>
```

## 1 click to talk 2 us

[![OrgChart](https://balkangraph.com/content/img/phone-icon4.png)](https://webcall.me/BALKANGraph)


