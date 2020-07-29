declare namespace OrgChart {
    
    enum orientation {
        top,
        left,
        right,
        bottom,
        top_left,
        bottom_left,
        right_top,
        left_top
    }
    enum action {
        /**
         * mouseScrool value
         */
        zoom,
        /**
         * mouseScrool value
         */
        scroll,
        /**
         * mouseScrool value
         */
        xScroll,
        /**
         * mouseScrool value 
         */
        yScroll,
        /**
         * nodeMouseClick value
         */
        edit, 
        /**
         * nodeMouseClick and nodeMouseDbClick value
         */
        details,
        /**
         * nodeMouseClick and nodeMouseDbClick value
         */
        expandCollapse, 
        /**
         * nodeMouseClick, nodeMouseDbClick and mouseScrool value
         */
        none,
        update,
        centerNode
    }
    enum scroll {
        visible,
    }

    enum match {
        height,
        width,
        boundary
    }

    enum anim {
        inPow,
        outPow,
        inOutPow,
        inSin,
        outSin,
        inOutSin,
        inExp,
        outExp,
        inOutExp,
        inCirc,
        outCirc,
        inOutCirc,
        rebound,
        inBack,
        outBack,
        inOutBack
    }


    const templates: any;

    const icon: any;

    const none: any;

    const CENTER: any;
    const ORIENTATION: any;
    
    const COLLAPSE: any;
    const EXPAND: any;

    const COLLAPSE_PARENT_NEIGHBORS: any;
    const COLLAPSE_SUB_CHILDRENS: any;

    const normal: any;  
    const mixed: any;
    const tree: any;
    const treeLeftOffset: any;
    const treeRightOffset: any;

    const slinkTemplates: any;
    
    const menuUI: any;
    
    const _guid: Function;
    const randomId: Function;

    var MINIMIZE: string;
    var MAXIMIZE: string;

}

interface NodeModel {
    id: string | number,
    pid: string | number,
    parent: NodeModel,
    stpid: string | number,
    stParent: NodeModel,
    childrenIds: Array<string | number>,
    children: Array<NodeModel>,
    stChildrenIds: Array<string | number>,
    stChildren: Array<NodeModel>,
    tags: Array<string>,
    templateName: string,
    leftNeighbor: NodeModel,
    rightNeighbor: NodeModel,
    x: number,
    y: number,
    w: number,
    h: number,
    isAssistant: boolean,
    stContainerNodes: Array<NodeModel>,
    order: number,
    collapsed: boolean,
    level: number,
    min: boolean,
    subLevels: number,
    padding: number,
    lcn: string,
    isSplit: boolean
}

interface Menu {
    add?: Object,
    edit?: Object,
    details?: Object,
    remove?: Object,
    svg?: Object,
    pdf?: Object,
    png?: Object,
    csv?: Object,
    addInGroup?: Object,
    addAsChild?: Object,
    [name: string]: Object,
}


interface Tags {
    [name: string]: Object,
}

interface OrgChartOptions {
    /**
     * Lazy loading is technique that defers loading of non-critical nodes at page load time. Instead, these non-critical nodes are loaded at the moment of need.
     * Default value: true

    Code example:
 ```
    var chart = new OrgChart(document.getElementById("tree"), {
        lazyLoading: true;
    });
    ```
     */
    lazyLoading?: boolean,
    /**
     * Enables advanced search.

        Default value: true

        Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: true,
    });
```
    */
    enableSearch?: boolean,
    /**
     * Specifies the orientation of the OrgChart JS. could accept one of the following values:

- OrgChart.orientation.top
- OrgChart.orientation.bottom
- OrgChart.orientation.right
- OrgChart.orientation.left
- OrgChart.orientation.top_left
- OrgChart.orientation.bottom_left
- OrgChart.orientation.right_top
- OrgChart.orientation.left_top
Default value: OrgChart.orientation.top

Code example:
``` 
        var chart = new OrgChart(document.getElementById("tree"), {
            ...
            orientation: OrgChart.orientation.bottom
        });  
   ``` 
     */
    orientation?: OrgChart.orientation,
    /**
     * mouseScrool can accept the following values:

    - OrgChart.action.zoom - will zoom in/out on mouse scroll

    - OrgChart.action.xScroll - left/right move of the chart on mouse scroll

    - OrgChart.action.yScroll - up/down move of the chart on mouse scroll

    - OrgChart.action.none - do nothing on mouse scroll

    Default value: OrgChart.action.zoom


    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       mouseScrool: OrgChart.action.zoom
    });
```
    */
    mouseScrool?: OrgChart.action,
    /**
     * Node binding in OrgChart JS maps node data to node template parameters.

Code example:
```
      var chart = new OrgChart(document.getElementById("orgchart"), {
            nodeBinding: {
                field_0: "name"
            },
            nodes: [
                { id: 1, name: "Amber McKenzie" },
                { id: 2, pid: 1, name: "Ava Field" },
                { id: 3, pid: 1, name: "Peter Stevens" }
            ]
        });
 ```   
In the example above the field name will be bount to field_0 from the template.

Also you can define your own field in the templae, for more information go to Fields page on our website.
     */
    nodeBinding?: Object,
    /**
     * With the drag and drop features of OrgChart, you can move nodes easily.
     * Default value: true

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
            enableDragDrop: true,
    });
```
    */
    enableDragDrop?: boolean,
    enableTouch?: boolean,
    /**
     * Enables edit, add, remove and other node operations. Also you can define your own node operation for more information see Node Menu Item

        Default value: null

        Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
	    nodeMenu:{
                details: {text:"Details"},
                edit: {text:"Edit"},
                add: {text:"Add"},
                remove: {text:"Remove"}       
            },
    });
```
     */
    nodeMenu?: Menu,
    /**
     * Context menu. Also you can define your own node operation for more information see Menu

Default value: null

Code example:
```
     var chart = new OrgChart(document.getElementById("tree"), {
	    nodeContextMenu:{
                details: {text:"Details"},
            	edit: {text:"Edit"},
            	add: {text:"Add"},
            	remove: {text:"Remove"}
            },
        ...
    });
 ```
    */
    nodeContextMenu?: Menu,
    /**
     * Use dragDropMenu with drag & drop and grouping feature.

    Default value: null

    Code example:
```
    var chart = new OrgChart(document.getElementById("tree"), {
	    dragDropMenu: {
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }
        },
    });
```
    */
    dragDropMenu?: Menu,
    /**
     * Enables export to excel, export to svg and other OrgChart operations. Also you can define your own OrgChart operation for more information see OrgChart.ImportFormCSV

    Default value: null

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       menu: {
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
       },
    });
```
    */
    menu?: Menu,
    /**
     * A toolbar is a set of icons or buttons.

Default value: null

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            toolbar: {
                layout: true,
                zoom: true,
                fit: true,
                expandAll: false
            },
            ...
        }); 
```    
     */
    toolbar?: Object,
    /**
     * Stop the org chart locking to the top of the screen once you move it.

Default value: true

Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
        sticky: false
        ...
    });
 ```    
     */
    sticky?: boolean,
    /**
     * nodeMouseClick can accept the following values:

    - OrgChart.action.edit - will open the edit view for the clicked node on the right hand side
    
    - OrgChart.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only.
     
    - OrgChart.action.expandCollapse - will expand or collapse the children nodes
     
    - OrgChart.action.none - do nothing on node click event
     
    Default value: OrgChart.action.details

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       nodeMouseClick: OrgChart.action.edit
    });
```    
     */
    nodeMouseClick?: OrgChart.action,



    /**
     * nodeMouseDbClick can accept the following values:

- OrgChart.action.edit - will open the edit view for the clicked node on the right hand side
- OrgChart.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only.
- OrgChart.action.expandCollapse - will expand or collapse the children nodes
- OrgChart.action.none - do nothing on node double click event

Default value: OrgChart.none

Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       nodeMouseDbClick: OrgChart.action.edit
        ...
    });
   ```  
     */
    nodeMouseDbClick?: OrgChart.action,
    /**
     * showXScroll can accept the following values:

    - OrgChart.none

    - OrgChart.scroll.visible - Will display horisontal scroll bar

    Default value: OrgChart.none

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       showXScroll: OrgChart.scroll.visible
    });
```
    */
    showXScroll?: OrgChart.scroll,
    /**
     * 
     * showYScroll can accept the following values:

    - OrgChart.none

    - OrgChart.scroll.visible - Will display vertical scroll bar

    Default value: OrgChart.none

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       showYScroll: OrgChart.scroll.visible
    });
```
    */
    showYScroll?: OrgChart.scroll,
    /**
    Set template if you want to change the appearance of the chart. OrgChart JS comes with number of build-in templates:

    - ana
    - ula  
    - olivia   
    - belinda
    - rony
    - mery
    - polina
    - mila
    - diva
    - luba
    - derek
    - base
    - deborah
    
    Also you can define your own template. For more information see Creating Custom Template

    Default value: ana

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       template: "derek"
    });
```
    */
    template?: string,
    /**
     * With tags option you can:

    - Set specific template for tagged nodes

    - Set the default state (expand/collapse) for tagged nodes

   - Define a group for tagged nodes

    - Set node as assistant for tagged nodes

    - Set node menu items for tagged nodes


    Set specific template for tagged nodes. See Multiple Templates in one chart for more details.

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
        tags: {
            Management: {
                template: "rony"
            }
        },     
        nodes: [
            { id: 1, tags: ["Management"] },        
        ]
    });
```
    Set the default state (expand/collapse) for tagged nodes. See Expand/Collapse for more details.

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
        tags: {
            hide: {
                state: OrgChart.COLLAPSE
            }
        },
        nodes: [
            { id: "1" },
            { id: "2", tags: ["hide"] },
            { id: "3" }
        ]
    });
```    

    Define a group for tagged nodes. See Grouping for more details.

    Code example:
```
     var chart = new OrgChart(document.getElementById("tree"), {
        tags: {
            HRs: {
                group: true,
                groupName: "HR Team",
                groupState: OrgChart.EXPAND,
                template: "group_grey"
            }
        },
        nodes: [
            { id: 1, tags: ["HRs"] }
        ]
    });     
```    
    Set node as assistant for tagged nodes. See Assistant for more details.

    Code example:
```
     var chart = new OrgChart(document.getElementById("tree"), {
        tags: {
            assistant: {
                template: "mery"
            }
        },
        nodes: [
            { id: 1, tags: ["assistant"] }
        ]
    });     
```    

    Set node menu items for tagged nodes. See Node Menu Item for more details.

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
        tags: 
            customMenuItems: {
                nodeMenu: {
                    add: { text: "Add New" }
                }
            }
          },
    });
```
     */
    tags?: Tags,
    /**
     * Link binding in OrgChart JS maps node data to link template parameters.

Code example:
```
        var chart = new OrgChart(document.getElementById("tree"), {
            linkBinding: {
                link_field_0: "createdAt"
            },
            nodes: [
                { id: "1", name: "Amber McKenzie"  },
                { id: "2", pid: "1", createdAt: "Since 08/08/2018" },
                { id: "3", pid: "1", createdAt: "Since 05/04/2018" }
            ]
        }); 
```
        */
    linkBinding?: Object,
    /**
     * Search by the fields defined in searchFields.

Default value: Empty array

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            searchFields: ["name", "title", etc...],
            ...
        }); 
 ```
        */
    searchFields?: Array<string>,
    /**
     * Array of node data JSON objects. nodes option is the data source of the chart.

Code example:
``` 
        var chart = new OrgChart(document.getElementById("tree"), {
            ...
            nodes: [
                { id: "1" },
                { id: "2", pid: "1" },
                { id: "3", pid: "1", tags: ["Sales"] }
            ]
        }); 
    ```
Node JSON objects could have unlimited number of properties, id, pid and tags are reserved node properties.

- id - unique identifier, it clould be integer or string
- pid - is the parent id
- tags - array of strings

     */
    nodes?: Array<Object>,
    /**
     *  Add C link.

Default value: null

Code example:
```
    var chart = new OrgChart(document.getElementById('tree'), {
            clinks: [
                {from: 4, to: 0, label: 'text'}, 
                {from: 4, to: 5, template: 'blue', label: '4 reports to 5' },
                {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
            ]   
            ...
    });
 ```  
     */
    clinks?: Array<Object>,
    /**
     *  Add S link.

Default value: null

Code example:
``` 
     var chart = new OrgChart(document.getElementById('tree'), {
            slinks: [
                {from: 4, to: 0, label: 'text'}, 
                {from: 4, to: 5, template: 'blue', label: 'reports to' },
                {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
            ]   
            ...
        });
   ``` 
     */
    slinks?: Array<Object>,
    /**
     * The gap between each level.

Default value: 60

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            levelSeparation: 50
        });
 ```
        */
    levelSeparation?: number,
    /**
     * The gap between nodes in a subtree.

Default value: 20

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            siblingSeparation: 50
        });  
 ```   
     */
    siblingSeparation?: number,
    /**
     * The gap between subtrees.

Default value: 40

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            subtreeSeparation: 50
        }); 
 ```
        */
    subtreeSeparation?: number,
    /**
     * The gap between nodes in vertical layout.

Default value: 20

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            mixedHierarchyNodesSeparation: 5
        }); 
 ```
        */
    mixedHierarchyNodesSeparation?: number,
    /**
     * The padding option sets the padding area on all four sides of the OrgChart.

Default value: 30

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            padding: 20
        });  
 ```   
     */
    padding?: number,
    /**
     * The layout of the OrgChart

- OrgChart.normal
- OrgChart.mixed
- OrgChart.tree
- OrgChart.treeLeftOffset
- OrgChart.treeRightOffset
Default value: OrgChart.normal

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            layout: OrgChart.mixed
        });  
 ```   
     */
    layout?: OrgChart,
    /**
     * The scale factor determines what fraction of the entire scale is visible at one time.

- OrgChart.match.height
- OrgChart.match.width
- OrgChart.match.boundary
- [float]

Default value: 1

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            scaleInitial: 0.5
        });  
 ```
        For more information go to Layout page on our website.
     */
    scaleInitial?: OrgChart.match | number,
    /**
     * Determines the minimum scale factor.

Default value: 0.1

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            scaleMin: 0.2
        });  
 ```
        */
    scaleMin?: number,
    /**
     * Determines the naximum scale factor.

Default value: 5

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            scaleMax: 10
        });  
 ```
        */
    scaleMax?: number,
    /**
     * The orderBy option is used to sort the nodes in ascending order by specified field. The default order is by nodes order in the nodes array.

Default value: null

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            orderBy: "orderId",
            nodes: [
                ...
                { id: 10, pid: 1, orderId: 2 },
                { id: 11, pid: 1, orderId: 1 }
                ...
            ]
        }); 
```
In the example above node with id 11 will be before node with id 10. orderBy can be set to any property from the node JSON object, string or integer.


     */
    orderBy?: string,
    editUI?: Object,
    searchUI?: Object,
    xScrollUI?: Object,
    yScrollUI?: Object,
    nodeMenuUI?: Object,
    nodeContextMenuUI?: Object,
    toolbarUI?: Object,
    notifierUI?: Object,
    //dragDropMenuUI?: Object, // removed
    menuUI?: Object,
    /**
     * The URL to the export server.

Default value: https://balkangraph.com/export

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            exportUrl: "https://balkangraph.com/export",
            ...
        }); 
 ```
        */
    exportUrl?: string,
    /**
     * Collapse specified level of the chart and its children if allChildren is true.

Code example:
```
        var chart = new OrgChart(document.getElementById("tree"), { 
            collapse: {
                level: 2,
                allChildren: true
            },
            ...
        });
   ``` 
     */
    collapse?: Object,
    /**
     * Expand specified node ids and its children if allChildren is true.

The expand option works only if collapse is set.

In the example above the second level of the chart will be collapsed but node with id 155 and its children will be expanded.

Code example:
```
        var chart = new OrgChart(document.getElementById("tree"), { 
            collapse: {
                level: 2,
                allChildren: true
            },
            expand:{
                nodes: [155],
                allChildren: true
            }
            ...
        });
   ``` 
     */
    expand?: Object,
    /**
     *  The align option specifies the alignment of the nodes inside OrgChart JS.

Default value: OrgChart.CENTER

- OrgChart.CENTER - centered
- OrgChart.ORIENTATION - according to the orientation option

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            align: OrgChart.ORIENTATION,
            ...
        }); 
 ```   
     */
    align?: OrgChart,
    UI?: OrgChart,
    /**
     *Can be used to control the transition of the nodes on expand/collapse operation.

Default value: func: OrgChart.anim.outPow, duration: 200

duration: defines how long time an animation should take to complete

func: Easing functions specify the speed at which an animation progresses at different points within the animation. Can accept one of the following values:

- OrgChart.anim.inPow
- OrgChart.anim.outPow
- OrgChart.anim.inOutPow
- OrgChart.anim.inSin
- OrgChart.anim.outSin
- OrgChart.anim.inOutSin
- OrgChart.anim.inExp
- OrgChart.anim.outExp
- OrgChart.anim.inOutExp
- OrgChart.anim.inCirc
- OrgChart.anim.outCirc
- OrgChart.anim.inOutCirc
- OrgChart.anim.rebound
- OrgChart.anim.inBack
- OrgChart.anim.outBack
- OrgChart.anim.inOutBack

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            anim: {
                func: OrgChart.anim.outBack,
                duration: 500
            },
            ...
        });  
 ```
        */
    anim?: Object,
    /**
     * Can be used to control the zooming sensitivity.

Default value: speed: 120, smooth: 12

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            zoom: {
                speed: 130,
                smooth: 10
            },
            ...
        }); 
 ```   
     */
    zoom?: Object,
    roots?: Array<number>,
    onUpdate?: string,
    onRemove?: string,
    onAdd?: string,
    onRedraw?: string,
    onImageUploaded?: string,
    onClick?: string,
    onDbClick?: string,
    onExpCollClick?: string | Function,
    onExportStart?: string | Function,
    onExportEnd?: string | Function,
    onSearchClick?: string | Function,
    onReady?: string | Function,
    assistantSeparation?: number,
    columns?: number

}



declare class OrgChart {
    constructor(element: HTMLElement, options: OrgChartOptions);


    /** 
     * Returns the node data for given node id
     * 
     Signature:
     ```
     chart.get(nodeId);
 ```
     Code example:
```
        var node = chart.get(5);
 ```   
     * @param nodeId

     * Returns JSON data */

    get(nodeId: string | number) : Object;

    /**
     * Updates the node JSON object.
     * 
      * Signature:
        ``` 
         chart.updateNode(nodeJSONdata, callback, fireEvent);
         ```   
      * Parameters:
      * @param nodeJSONdata - node json data
      * @param callback - (optional) callback function cakked when the animation colpletes
      * @param fireEvent - (optional) if it set to true the update event is called
      * 
      * Code example:
        ```
        chart.updateNode({ id: 4, pid: 2, name: "Updated Name", title: "Updated Title" });
        ```   
        Will update the node with id 4 and will redraw the chart.
      */
     
    updateNode(nodeJSONdata: Object, callback?: Function, fireEvent?: boolean) : void;

     /**
      * Updates the node JSON object.
      * 
      * Signature:
        ``` 
        chart.update(nodeJSONdata);
        ``` 
      * 
      Parameters:
      * @param nodeJSONdata - node json data
      *
      Code example:
        ```
         chart.update({ id: 4, pid: 2, name: "Updated Name", title: "Updated Title" });
        ```   
        Will find the node with id 4 but it will not redraw the chart, you can use this method when you need to update two or more nodes, then call the draw function. Returns the chart object.
      */
    update(nodeJSONdata: Object) : Object;
 
     /**
      * Removes specified node from nodes collection.
      * 
      *  Signature:
        ```
        chart.removeNode(nodeId, callback, fireEvent);        
        ```   
      * Parameters: 
      * @param nodeId - id of the node
      * @param callback - (optional) callback function will be called at the end of animation
      * @param fireEvent - (optional) indicates if the remove event will be called or not
      * 
      * Code example:
        ``` 
        chart.removeNode(5);
        ```   
        Will remove node with id 5 and will redraw the chart.
      */
     
    removeNode(nodeId: string | number, callback?: Function, fireEvent?: boolean): void;    

    /**
     *Removes specified node from nodes collection.

        Signature:
        ``` 
        chart.remove(nodeId);
        ```       
        Parameters:

     * @param nodeId - id of the node
     *
     Code example:
        ```
        chart.remove(5);
        ```   
    Will remove node with id 5 but it will not redraw the chart, you can use this method when you need to remove two ore more nodes, then call the draw function. Returns the chart object. 
     */
    remove(nodeId: string | number): Object;   

    /**
     * * Adds new node to the nodes collection.
     * 
     * Signature:
        ```
         chart.addNode(nodeJSONdata, callback, fireEvent);
        ```   
     * 
     Parameters:
     * @param nodeJSONdata - node JSON data
     * @param callback - (optional) callback function will be called at the end of animation
     * @param fireEvent - (optional) indicates if the add event will be called or not
     * 
     * Code example:
        ```
        chart.addNode({ id: 4, pid: 2, name: "Name 1", title: "Title 1" });
        ```    
     */

    addNode(nodeJSONdata: Object, callback?: Function, fireEvent?: boolean);

    /**
     * Adds new node to the nodes collection.

    Signature:
    ```
            chart.add(nodeJSONdata);
    ```   
    Parameters:

    * @param nodeJSONdata - node JSON data
    *
    Code example:
    ```
            chart.add({ id: 4, pid: 2, name: "Name 1", title: "Title 1" });
    ```   
   Will add new node but it will not redraw the chart, you can use this method when you need add two or more nodes, then call the draw function. Returns the chart object.
     */
    add(nodeJSONdata: Object) : Object;

    /**
     * Adds a link between two nodes.

Signature:
```
         chart.link(fromNodeId, toNodeId);
 ```

Parameters:

- fromNodeId - the id of the child node
- toNodeId - the id of the parent node

Code example:
```
         chart.link(5, 6);
```
It will create a link from node 5 to node 6.
     * @param fromNodeId 
     * @param toNodeId 
     */
    link(fromNodeId: string | number, toNodeId: string | number): void;

    /**
     * Adds a link between two nodes.

Signature:
```
         chart.linkNode(fromNodeId, toNodeId);
 ```   
Parameters:

- fromNodeId - the id of the child node
- toNodeId - the id of the parent node

Code example:
```
         chart.linkNode(5, 6);
 ```   
It will create a link from node 5 to node 6 and will redraw the chart.
     * @param fromNodeId 
     * @param toNodeId 
     */
    linkNode(fromNodeId: string | number, toNodeId: string | number) : void;

    /**
     * Center specified node on the screen.

Signature:
```
         chart.center(nodeId, options);
 ```   
Parameters:

- nodeId - the id of the node
- options - { parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS, childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS, rippleId: rippleId, vertical: false, horizontal: false });

Code example:
```
         chart.center(5,     {
                parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
                childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
                rippleId: 1,
                vertical: true,
                horizontal: false
            }););
 ```   
     * @param nodeId 
     * @param options 
     */
    center(nodeId: string | number, options: Object) : void;

    /**
     * Animate specified node with ripple animation - highlight the node.

Signature:
```
         chart.ripple(nodeId);
```
Parameters:

- nodeId - the id of the node

Code example:
```
        chart.ripple(5);
```
        * @param nodeId 
     */
    ripple(nodeId: string | number) : void;

    /**
     * Gets the current scale of the chart.

Signature:
``` 
        chart.getScale();
   ``` 
Code example:
``` 
        var scale = chart.getScale();
   ```
        */
    getScale() : number;

    /**
     * Zoom out or zoom in the chart.

Signature:
``` 
        chart.zoom(delta, center, anim);
   ``` 
Parameters:

- delta - True for zoom in, false for zoom out or scale number, if scale is > 1 it will zoom in and scale < 1 zoom out.
- center - Array [x, y], where x is x percantege from the width and y is y percentage from the height. (optional)
- anim - true, false (optional)

Code example:
```
         chart.zoom(2, [20,20]);
 ```
         * @param delta 
     * @param center 
     * @param [anim] 
     */
    zoom(delta: boolean | number, center: Array<number>, anim? : boolean) : void;

    /**
     * Exports the chart to svg file.

Signature:
``` 
        chart.exportSVG(filename, expandChildren, nodeId);
   ``` 
Parameters:

- filename - (optional) file name
- expandChildren - (optional) true/false, expands all children of root node if it set to true
- nodeId - (optional) root node id

Code example:
``` 
        chart.exportSVG("MyOrgChart.svg", true, 4);
   ```
        * @param filename 
     * @param expandChildren 
     * @param nodeId 
     */
    exportSVG(filename: string, expandChildren: boolean, nodeId: string | number ) : void;

    /**
     * Exports the chart to png file.

Signature:
```
         chart.exportPNG(options);
 ```   
Parameters:

- options - export options

Code example:
```
        chart.exportPNG({
            filename: "MyOrgChart.png", 
            nodeId: 5, 
            expandChildren: true, 
            margin: [10,20,10,20],
            header: 'My header',
            footer: 'Page {current-page} of {total-pages}',
        });
 ```
        * @param options 
     */
    exportPNG(options: Object) : void;

    /**
     * Exports the chart to pdf file.

Signature:
``` 
        chart.exportPDF(options);
  ```  
Parameters:

- options - export options

Code example:
``` 
        chart.exportPDF({
            landscape: true, //false
            format: "A4", //fit, fit2Levels, A42Levels
            filename: "MyOrgChart.pdf", 
            nodeId: 5, 
            expandChildren: true, 
            margin: [10,20,10,20],
            header: 'My header',
            footer: 'Page {current-page} of {total-pages}',
            scale: 'fit' //100
        });
   ``` 
     * @param options 
     */
    exportPDF(options: Object) : void;

    /**
     * Exports the chart to CSV file.

Signature:
```
         chart.exportCSV(options);
 ```   
Parameters:

- options - export options

Code example:
``` 
        chart.exportCSV({
            filename: "MyOrgChart.svg", 
            nodeId: 5, 
            expandChildren: true
        });
   ```
        * @param options 
     */
    exportCSV(options: Object) : void;

        /**
     * Exports the chart to XML file.

Signature:
``` 
        chart.exportXML(filename);
   ``` 
Parameters:

- filename - the name of the file

Code example:
``` 
        chart.exportXML("MyOrgChart.svg");
   ```
        * @param filename 
     */
    exportXML(filename: string) : void;

    /**
     * Draws the chart.

Signature:
``` 
        chart.draw(action);
   ``` 
Parameters:

- action - (optional) OrgChart.action.expandCollapse, OrgChart.action.update and OrgChart.action.centerNode

Code example:
```
         chart.draw();
 ```
         * @param [action] 
     */

    /**
     * Import CSV file.

Signature:
``` 
        chart.importCSV();
   ``` 
Code example:
```
         chart.importCSV();
 ```
         */
    importCSV() : void;

    /**
     * Import XML file.

Signature:
``` 
        chart.importXML();
   ``` 
Code example:
``` 
        chart.importXML();
   ```
        */
    importXML() : void;

    /**
     * Draws the chart.

Signature:
``` 
        chart.draw(action);
   ``` 
Parameters:

- action - (optional) OrgChart.action.expandCollapse, OrgChart.action.update and OrgChart.action.centerNode

Code example:
``` 
        chart.draw();
   ```
        * @param [action] 
     */
    draw(action? : OrgChart.action) : void;

    /**
     * Expand specified nodes.

Signature:
```
         chart.expand(id, ids, callback);
 ```   
Parameters:

- id - the id of the node that will not move
- ids - node ids that will be expanded
- callback - (optional) called after the animation completes

Code example:
``` 
        chart.expand(5, [155]);
   ```
        * @param id 
     * @param ids 
     * @param [callback] 
     */
    expand(id: string | number, ids: Array<string | number>, callback?: Function) : void;

    /**
     * Collapse specified nodes.

Signature:
``` 
        chart.collapse(id, ids, callback);
   ```
Parameters:

- id - the id of the node that will not move
- ids - node ids that will be collapsed
- callback - (optional) called after the animation completes

Code example:
```
         chart.collapse(5, [155]);
 ```
         * @param id 
     * @param ids 
     * @param [callback] 
     */
    collapse(id: string | number, ids: Array<string | number>, callback?: Function) : void;

    /**
     * Fits the content to the visible area.

Signature:
```
         chart.fit();
 ```   
Code example:
``` 
        chart.fit();
   ```
        */
    fit(): void;

    /**
     * Finds node from the nodes collection.

Signature:
```
        chart.find(value);
   ``` 
Parameters:

- value - search by definded value

Code example:
```
         chart.find("John");
 ```
         * @param value 
     */
    find(value: string | number) : void;

    /**
     * Load nodes.

Signature:
``` 
        chart.load(nodesJsonArray);
   ``` 
Code example:
```
         chart.load([{id: 1}]);
 ```
     * @param jsonArray 
     */
    load(jsonArray: Array<Object>) : void;

    /**
     *Load nodes from xml.

Signature:
```
         chart.loadXML(xmlAsText);
 ```   
Code example:
``` 
        chart.loadXML('<?xml version="1.0" encoding="utf-8" ?><nodes><node id="1" name="plamen"/><node id="2" pid="1" name="ivan"/></nodes>');
   ```
        * @param xmlAsText 
     */
    loadXML(xmlAsText: string) : void;

    /**
     * Gets nodes as xml.

Signature:
```
 
        chart.getXML();
    
Code example:

 
        var xml = chart.getXML();
    
     * @returns xml 
     */
    getXML() : string;

    /**
     * Adds clink.

Signature:
```
         chart.addClink(fromId, toId, label, template);
 ```   
Code example:
```
         chart.addClink(5, 1, 'lorem ipsum', 'blue');
 ```
 Predefined templates:
  - orange
  - blue
  - yellow
         * @param fromId 
     * @param toId 
     * @param label 
     * @param template 
     */
    addClink(fromId: string | number, toId: string | number, label: string, template: string) : void;

    /**
     * Removes clink.

Signature:
``` 
        chart.removeClink(fromId, toId);
   ``` 
Code example:
``` 
        chart.removeClink(5, 1);
   ```
        * @param fromId 
     * @param toId 
     */
    removeClink(fromId: string | number, toId: string | Number): void;

    /**
     * Expand/Collapse to level.

Signature:
``` 
        chart.expandCollapseToLevel(id, collapse, expand, callback);
   ``` 
Code example:
```
         chart.expandCollapseToLevel({
                level: 2
            }, {
                nodes: [155]
            }, function(){
                console.log('callback')
            });
 ```
            * @param id 
     * @param collapse 
     * @param expand 
     * @param callback 
     */
    expandCollapseToLevel(id: string | number, collapse: Object, expand: Object, callback: Function) : void; // How works this one ?


    /**
     * Destroys the object.

Signature:
``` 
        chart.destroy();
   ```
        */
    destroy(): void;

    /**
     * Adds slink.

Signature:
``` 
        chart.addSlink(fromId, toId, label, template);
   ``` 
Code example:
``` 
        chart.addSlink(5, 1, 'lorem ipsum', 'blue');
   ```
        * @param fromId 
     * @param toId 
     * @param label 
     * @param template 
     */
    addSlink(fromId: string | number, toId: string | number, label: string, template: string) : void;


    /**
     * Removes slink.

Signature:
``` 
        chart.removeSlink(fromId, toId);
   ``` 
Code example:
``` 
        chart.removeSlink(5, 1);
   ```
        * @param fromId 
     * @param toId 
     */
    removeSlink(fromId: string | number, toId: string | number) : void;

    on(action: string, fun: Function): void;
    getNode(id: string | number): NodeModel;

    /**
     * Maximize the node.
     * 
      Signature:
     * ```
     * chart.maximize(id, horizontalCenter, verticalCenter, callback);
     * ```
     * @param id - the id of the node
     * @param horizontalCenter - (optional) center horizontally (true,false)
     * @param verticalCenter  - (optional) center vertically (true,false)
     * @param callback - (optional) callback function is called when the animation completes
     *
     Code example:
     * ```
     * chart.maximize(5);
     * ``` 
     */
    maximize(id: string | number, horizontalCenter?: boolean, verticalCenter?: boolean, callback?: Function) : void;
 
       /**
     * Minimize  the node.
     * 
      Signature:
     * ```
     * chart.minimize(id, callback);
     * ```
     * @param id - the id of the node
     * @param callback - (optional) callback function is called when the animation completes
     *
     Code example:
     * ```
     * chart.minimize(5);
     * ``` 
     */
    minimize(id: string | number, callback?: Function) : void;

    /**
     * Set orientation.
     * 
     * Signature:
     * ```
     * chart.setOrientation(orientation, lyoutConfigName);
     * ```
     * 
     * Parameters:
     * @param orientation  - orientation type, OrgChart.orientation.top, OrgChart.orientation.bottom, OrgChart.orientation.right, OrgChart.orientation.left, OrgChart.orientation.top_left, OrgChart.orientation.bottom_left, OrgChart.orientation.right_top and OrgChart.orientation.left_top
     * @param lyoutConfigName  - (optional) lyout config name for the specified sub tree
     *
     Code example:
     ```
     chart.setOrientation(OrgChart.orientation.bottom);
     ```   
     */
    setOrientation(orientation: OrgChart.orientation, lyoutConfigName?: string) : void;

    /**
     * Set layout.
     * 
     * Signature:
     * ```
     * chart.setLayout(layout, lyoutConfigName);
     * ```
     * Parameters:
     * @param layout - layout type, OrgChart.normal, OrgChart.mixed, OrgChart.tree, OrgChart.treeLeftOffset and OrgChart.treeRightOffset
     * @param lyoutConfigName - (optional) lyout config name for the specified sub tree
     *
     * Code example:
     * ```
     * chart.setLayout(OrgChart.tree);
     * ```     
     */
    setLayout(layout: OrgChart, lyoutConfigName?: string) : void;
}