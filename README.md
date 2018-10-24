# ![OrgChart](https://balkangraph.com/content/img/icon-orgchart-js.png) OrgChart JS
OrgChart JS is a simple, flexible and highly customizable organization chart plugin for presenting the structure of your organization and the relationships in an elegant way.

![OrgChart](https://balkangraph.com/content/img/screenshot-orgchart-js-2.png)

## [Demos](https://balkangraph.com/OrgChartJS/Demos/BasicUsage)  &nbsp;&nbsp;&nbsp;&nbsp;  [Docs](https://balkangraph.com/OrgChartJS/Docs/GettingStarted)  &nbsp;&nbsp;&nbsp;&nbsp;  [Download](https://balkangraph.com/OrgChartJS/Download) &nbsp;&nbsp;&nbsp;&nbsp;  [Support](https://balkangraph.com/OrgChartJS/Support)

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

## Installation
Option 1 - [standalone build](https://balkangraph.com/OrgChartJS/Docs/GettingStarted)

Option 2 - NPM
```
npm i @balkangraph/orgchart.js
```

Option 3 - Bower
```
bower install orgchart.js
```

Option 4 - NuGet
```
Install-Package OrgChartJS 
```

## Usage
```
        <div id="tree"/>
        <script>
 
        var chart = new OrgChart(document.getElementById("tree"), {
            nodeBinding: {
                field_0: "name"
            },
            links: [
                { from: "2", to: "1" },
                { from: "3", to: "1" }
            ],
            nodes: [
                { id: "1", name: "Amber McKenzie" },
                { id: "2", name: "Ava Field" },
                { id: "3", name: "Peter Stevens" }
            ]
        });
        </script>
```

## 1 click to talk 2 us

[![OrgChart](https://balkangraph.com/content/img/phone-icon4.png)](https://webcall.me/BALKANGraph)

