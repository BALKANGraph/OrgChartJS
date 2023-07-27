

declare class OrgChart extends OrgChartBase {
    nodes: { [key in any]: OrgChart.node };
    isVisible: boolean;
    visibleNodeIds: Array<number | string>;

    /**
     * @param element HTML element or string selector for example '#tree'
     * @param options configuration options
     */
    constructor(element: HTMLElement | string, options?: OrgChart.options);


    /**
     * Updates the node data
     * @param newData node data
     */
    update(newData: object): OrgChart;

    /**
     * Removes specified node from nodes collection
     * @param id identification number of the node
     */
    remove(id: string | number): OrgChart;
    /**
     * Adds new node to the nodes collection
     * @param data node data
     */
    add(data: object): OrgChart;
    /**
     * Gets node data.
     * @param id identification number of the node
     */
    get(id: string | number): OrgChart.node;
    /**
     * If specified node has assistant/s or partner/s as children will return false.
     * @param id identification number of the node
     */
    canRemove(id: string | number): boolean;
    /**
     * Expands specified nodes.
     * @param id  the id of the node that will not move during the animation 
     * @param ids node ids that will be expanded
     * @param callback called after the animation completes
     */
    expand(id: string | number, ids: Array<string | number>, callback?: () => void): void;
    /**
     * Collapses specified nodes.
     * @param id  the id of the node that will not move
     * @param ids node ids that will be collapsed
     * @param callback called after the animation completes
     */
    collapse(id: string | number, ids: Array<string | number>, callback?: () => void): void;
    /**
     * Expand/Collapse lists of nodes.
     * @param id the id of the node that will not move
     * @param expandIds expand all nodes with ids
     * @param collapseIds collpase all nodes with ids
     * @param callback called after the animation completes
     */
    expandCollapse(id: string | number, expandIds: Array<string | number>, collapseIds: Array<string | number>, callback?: () => void): void;
    /**
     * Changes roots order.
     * @param id id of a node that will not change is position, can be null
     * @param roots roots id array in the required order
     * @param callback called after the roots are changed and animation completes
     */
    changeRoots(id: string | number, roots: Array<string | number>, callback?: () => void): void;
    /**
     * Maximize the node. Without parameters maximize all nodes.
     * @param id the id of the node, if id is null, undefined ot empty string will maximize all nodes
     * @param horizontalCenter center horizontally 
     * @param verticalCenter center vertically 
     * @param callback called when the animation completes
     */
    maximize(id?: string | number, horizontalCenter?: boolean, verticalCenter?: boolean, callback?: () => void): void;
    /**
     * Minimize the node. Without parameters minimize all nodes.
     * @param id the id of the node, if id is null, undefined ot empty string will minimize all nodes
     * @param callback called when the animation completes
     */
    minimize(id?: string | number, callback?: () => void): void;
    /**
     * Load nodes data.
     * @param data node data array
     * @param callback function called after the load
     */
    load(data: Array<object>, callback?: () => void): OrgChart;

    /**
     * Updates the node data, redraws the chart and fires update event.
     * @param data node data
     * @param callback function called when the animation completes
     * @param fireEvent if it set to true the update event is called
     */
    updateNode(data: object, callback?: () => void, fireEvent?: boolean): void;

    /**
     * Loads nodes from xml.
     * @param xml Xml with node structure
     * @param callback function called after the load
     */
    loadXML(xml: string, callback?: () => void): OrgChart;
    /**
     * Gets nodes as xml.
     */
    getXML(): string;
    /**
     * Draws the chart.
     * @param action Action for example OrgChart.action.centerNode, default is OrgChart.action.update
     * @param actionParams parameters for the action
     * @param callback called when the animation completes
     */
    draw(action?: OrgChart.action, actionParams?: any, callback?: () => void): void;
    /**
     * Gets the width of the container.
     */
    width(): number;
    /**
     * Gets the height of the container.
     */
    height(): number;
    /**
     * Gets the view box attribute of the svg html element.
     */
    getViewBox(): Array<number>;
    /**
     * Sets the view box attribute of the svg html element.
     * @param viewBox 
     */
    setViewBox(viewBox: Array<number>): void;
    /**
     * Gets the current scale of the chart.
     * @param viewBox 
     */
    getScale(viewBox?: Array<number>): number;
    /**
     * Animates specified node with ripple animation - highlight the node.
     * @param id the id of the node
     * @param clientX x value of the ripple center in the node
     * @param clientY y value of the ripple center in the node
     */
    ripple(id: string | number, clientX?: number, clientY?: number): void;
    /**
     * Centers specified node on the screen.
     * @param nodeId the id of the node
     * @param options parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS, childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS, rippleId: rippleId, vertical: false, horizontal: false
     * @param callback called when the animation completes
     */
    center(nodeId: string | number, options?: {
        parentState: any,
        childrenState: any,
        rippleId: string | number,
        vertical: boolean,
        horizontal: boolean
    } | null, callback?: () => void): void;
    /**
     * Fits the content to the visible area.
     * @param callback called when the animation completes
     */
    fit(callback?: () => void): void;
    /**
     * Toggles full screen mode.
     */
    toggleFullScreen(): void;
    /**
     * Gets the node as {@link OrgChart.node} object.
     * @param nodeId 
     */
    getNode(nodeId: string | number): OrgChart.node;
    /**
     * Sets layout.
     * @param layout layout type
     * @param lcn lyout config name for the specified sub tree
     */

    /**
     * Adds new node to the nodes collection, redraws the chart and fires remove event
     * @param data node data
     * @param callback called at the end of animation
     * @param fireEvent indicates if the add event will be called or not
     */
    addNode(data: object, callback?: () => void, fireEvent?: boolean): void;  

    setLayout(layout: OrgChart.layout | number, lcn?: string): void;
    /**
     * Sets orientation.
     * @param orientation  orientation type
     * @param lcn lyout config name for the specified sub tree
     */
    setOrientation(orientation: OrgChart.orientation, lcn?: string): void;
    /**
     * Search in the chart.
     * @param value search for value
     * @param searchInFields search in field names
     * @param retrieveFields retrive data for fields
     * {@link https://balkan.app/OrgChartJS/Docs/Search | See doc...}            
     */
    search(value: string, searchInFields?: Array<string>, retrieveFields?: Array<string>): Array<{
        id: number | string,
        name: string,
        __score: number,
        __searchField: string,
        __searchMarks: string
    }>;
    /**
     * Gets collpased node ids of the specifeid node
     * @param node 
     */
    getCollapsedIds(node: OrgChart.node): Array<string | number>;
    /**
     * State to url.
     * {@link https://balkan.app/OrgChartJS/Docs/State | See doc...}  
     */
    stateToUrl(): string;
    /**
     * Genereates unique identification number that can be used for new nodes
     */
    generateId(): string;
    /**
     * Destroys the object.
     */
    destroy(): void;
    /**
     * Adds curved link.
     * @param from from node with id
     * @param to to node with id
     * @param label link label
     * @param template link template, for example 'orange'
     */
    addClink(from: string | number, to: string | number, label?: string, template?: string): OrgChart;
    /**
     * Removes curved link.
     * @param from from node with id
     * @param to to node with id
     */
    removeClink(from: string | number, to: string | number): OrgChart;
    /**
     * Adds second link.
     * @param from from node with id
     * @param to to node with id
     * @param label link label
     * @param template link template, for example 'orange'
     */    
    addSlink(from: string | number, to: string | number, label?: string, template?: string): OrgChart;
    /**
     * Removes second link.
     * @param from from node with id
     * @param to to node with id
     */    
    removeSlink(from: string | number, to: string | number): OrgChart;
    /**
     * Gets svg html element
     */
    getSvg(): SVGAElement;
    /**
     * Gets node html element
     * @param id node id
     */
    getNodeElement(id: string | number): HTMLElement;
    /**
     * Gets menu button html element
     */
    getMenuButton(): HTMLElement;
    /**
     * Exports the details form to PDF.
     * @param options export options
     * @param callback called when the export completes
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}        
     */
    exportPDFProfile(options: OrgChart.exportOptions, callback?: () => void): void;
    exportPDFPreview(options: OrgChart.exportOptions): void;
    /**
     * Exports the details form to PDF.
     * @param options export options
     * @param callback called when the export completes
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}        
     */
    exportPNGProfile(options: OrgChart.exportOptions, callback?: () => void): void;
    /**
     * Exports to CSV
     * @param filename The name of the exported file
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}            
     */
    exportCSV(filename: string | OrgChart.exportCSVXMLJSONOptions): void;
    /**
     * Exports to XML   
     * @param filename The name of the exported file
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}            
     */
    exportXML(filename: string | OrgChart.exportCSVXMLJSONOptions): void;
    /**
     * Exports to JSON   
     * @param filename The name of the exported file
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}            
     */
     exportJSON(filename: string | OrgChart.exportCSVXMLJSONOptions ): void;

    /**
     * Shares node data, uses build-in  device sharing functionallity.
     * @param id node id 
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}            
     */
    shareProfile(id: string | number): void;
    /**
     * Exports to PDF document
     * @param options export options
     * @param callback called when the export completes
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}       
     */
    exportPDF(options?: OrgChart.exportOptions, callback?: () => void): void;    
    /**
     * Exports to PNG document
     * @param options export options 
     * @param callback called when the export completes
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}       
     */
    exportPNG(options?: OrgChart.exportOptions, callback?: () => void): void;
    /**
     * Exports to SVG document
     * @param options export options 
     * @param callback called when the export completes
     * {@link https://balkan.app/OrgChartJS/Docs/Exporting | See doc...}       
     */    
    exportSVG(options?: OrgChart.exportOptions, callback?: () => void): void;
    /**
     * Imports CSV file.
     * {@link https://balkan.app/OrgChartJS/Docs/Importing | See doc...}       
     */
    importCSV(): void;
    /**
     * Imports XML file.
     * {@link https://balkan.app/OrgChartJS/Docs/Importing | See doc...}       
     */    
    importXML(): void;

    /**
     * Imports JSON file.
     * {@link https://balkan.app/OrgChartJS/Docs/Importing | See doc...}       
     */    
    importJSON(): void;

    /**
     * Zoom out or zoom in the chart.
     * @param delta true for zoom in, false for zoom out or scale number, if scale is > 1 it will zoom in and scale < 1 zoom out.
     * @param center array [x, y], where x is x percantege from the width and y is y percentage from the height.
     * @param shouldAnimate should animate 
     * @param callback called when the animation completes
     */
    zoom(delta: boolean | number, center?: Array<number>, shouldAnimate?: boolean, callback?: () => void): void;
    
    /**
     * Magnify(Zoom in) specific node in the chart.
     * @param id id of the node
     * @param scale scale to magnify
     * @param front show on front or back 
     * @param anim animation type
     */
     magnify(id: string | number, scale: number, front?: boolean, anim?: OrgChart.anim | null, callback?: () => void): void;     

    /**
     * Starts the move 
     * @param movePosition move position
     * @param tick callback function in each step
     * @param func the name of the animation function, for example OrgChart.anim.inSin
     * @param duration duration before going to 100 percent speed
     */
    moveStart(movePosition: OrgChart.move, tick?: () => void, func?: OrgChart.anim, duration?: number): void;
    
    /**
     * Ends the move
     */
    moveEnd(): void;

    /**
     * The onField() method of the OrgChart class sets up a function that will be called whenever the specified event is delivered to the target.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onField((args) => {
     *      //return false; to cancel
     * });
     * chart.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onField(listener: (this: OrgChart, args: { 
        /**
         * the node
         */
        node: OrgChart.node, 
        /**
         * node data json object
         */
        data: object, 
        /**
         * value of the filed, can be changed in the event
         */
        value: any, 
        /**
         * svg or html element of the filed, can be changed in the event
         */
        element: string, 
        /**
         * name of the field
         */
        name: string         
        /**
         * field template name
         */
        field: string 
    }) => void | boolean): OrgChart;

    /**
     * Occurs when the nodes in OrgChart has been created and loaded to the DOM.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onInit(() => {
     * });
     * chart.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onInit(listener: (this: OrgChart) => void): OrgChart;
    


    /**
     * The onRedraw event occurs when the chart is redrawed.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onRedraw(() => {
     * });
     * chart.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */        
    onRedraw(listener: (this: OrgChart) => void): OrgChart;

    /**
     * The onExpandCollpaseButtonClick event occurs when the chart is redrawed.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onExpandCollpaseButtonClick(() => {
     *  //return false; to cancel the operation
     * });
     * chart.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */         
    onExpandCollpaseButtonClick(listener: (this: OrgChart, args: {
        /**
         * Indicates id the operation is collaps or expand
         */
        collapsing: boolean,
        /**
         * the id of the clicked node
         */
        id: number | string,
        /**
         *  node ids that will be expanded or collapsed
         */
        ids: Array<number | string>
    }) => void): OrgChart;
    /**
     * Occurs in the beginning of the export. Extra css styles can be added to the exported document using this event listener or show loading image.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onExportStart(() => {
     *  args.styles += '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">';
     *  //return false; to cancel the operation
     * });
     * chart.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */             
    onExportStart(listener: (this: OrgChart, args: 
        {
        /**
         * the content to be exported
         * 
         * this property is initialized only for PDF/PNG/SVG exports
         */
        content: string,
        /**
         * export options
         * 
         * this property is initialized only for PDF/PNG/SVG exports
         */
        options: OrgChart.exportOptions,
        /**
         * add extra styles
         * 
         * this property is initialized only for PDF/PNG/SVG exports
         */
        styles: string,
        /**
         * an object that discribes pages to be exported
         * 
         * this property is initialized only for PDF/PNG exports
         */
        pages: any,
        /**
         * extension
         * 
         * this property is initialized only for CSV/XML
         */
        ext: string,
        /**
         * filename, you can change the filename here
         * 
         * this property is initialized only for CSV/XML exports
         */
        filename: string,
        /**
         * array of node objects
         * 
         * this property is initialized only for CSV/XML exports
         */
        nodes: Array<object>
    }) => void): OrgChart;
    /**
     * Occurs in the beginning of the export. Use this event listener to hide loading image or upload exported document to your server using ArrayBuffer argument.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onExportEnd(() => {
     *  //return false; to cancel the operation for example id you prefer the exported document to not download
     * });
     * chart.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */         
    onExportEnd(listener: (this: OrgChart, args: 
        /**
         * for PDF/PNG
         */
    {
        /**
         * the array buffer is the exported document, you can save it on a server or send it via email
         * 
         * this property is initialized only for PDF/PNG exports
         */
        ArrayBuffer: ArrayBuffer
        /**
         * extension
         * 
         * this property is initialized only for CSV/XML exports
         */
        ext: string,
        /**
         * filename, you can change the filename here
         * 
         * this property is initialized only for CSV/XML exports
         */
        filename: string,
        /**
         * an array of node objects
         * 
         * this property is initialized only for CSV/XML exports
         */
        nodes: Array<object>,
        /**
         * csv ot xml string
         * 
         * this property is initialized only for CSV/XML/SVG exports
         */
        content: string
        /**
         * export options
         * 
         * this property is initialized only for SVG exports
         */
        options: OrgChart.exportOptions,
        /**
         * add extra styles
         * 
         * this property is initialized only for SVG exports
         */
        styles: string,        
    }) => void): OrgChart;
    /**
     * On node click event listener.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onNodeClick(() => {
     *  //return false; to cancel the operation      
     * });
     * chart.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */   
    onNodeClick(listener: (this: OrgChart, args: {
        /**
         * node JSON object
         */
        node: OrgChart.node,
        /**
         * the browser event
         */
        event: any
    }) => void): OrgChart;
    /**
     * On node double click event listener.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onNodeDoubleClick(() => {
     *  //return false; to cancel the operation 
     * });
     * chart.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */       
    onNodeDoubleClick(listener: (this: OrgChart, args: {
        /**
         * clicked node data
         */
        data: object
    }) => void): OrgChart;

    element: HTMLElement;

    editUI: OrgChart.editUI;
    searchUI: OrgChart.searchUI;
    nodeMenuUI: OrgChart.menuUI;
    filterUI: OrgChart.filterUI;
    nodeCircleMenuUI: OrgChart.circleMenuUI;
    nodeContextMenuUI: OrgChart.menuUI;
    menuUI: OrgChart.menuUI;
    toolbarUI: OrgChart.toolbarUI;    
    config: OrgChart.options

    static fileUploadDialog(scallback: (file: any) => void): void;
    static isMobile(): boolean;
    /**
     * Checks if the used libraris is licnsed or not
     */
    static isTrial(): boolean;
    /**
     * Count all children nodes of the specified id.
     * @param chart OrgChart instance
     * @param node 
     * @param count 
     */
    static childrenCount(chart: OrgChart, node: OrgChart.node): number;
    static childrenTotalCount(chart: OrgChart, node: OrgChart.node): number;
    static collapsedChildrenCount(chart: OrgChart, node: OrgChart.node): number;
    static collapsedChildrenTotalCount(chart: OrgChart, node: OrgChart.node): number;
    static getRootOf(node: OrgChart.node): OrgChart.node;

    /**
     * is null, empty or undefined
     * @param val 
     */
    static isNEU(val: any): boolean;
    static gradientCircleForDefs(id: string | number, colors: Array<string> | string, r: number, strokeWidth: number): string;
    static convertCsvToNodes(text: string) : Array<Object>;
    static convertNodesToCsv(nodes: Array<Object>) : string;
    static wrapText(text: string, field: Object): string;
    /**
     * Shows/hides lloading image. Usefull when export large data to pdf. You can override and show your own loading image.
     */
    static loading: {
        show: (chart: OrgChart) => void,
        hide: (chart: OrgChart) => void
    }

    static clinkTemplates: {
        [key: string]: OrgChart.linkTemplate
    }

    static slinkTemplates: {
        [key: string]: OrgChart.linkTemplate
    }


    static templates :{ [key: string]: OrgChart.template} ;


    static scroll: {
        visible?: boolean,
        smooth?: number,
        speed?: number,
        safari?: { smooth?: number; speed?: number; },
        edge?: { smooth?: number; speed?: number; },
        chrome?: { smooth?: number; speed?: number; },
        firefox?: { smooth?: number; speed?: number; },
        opera?: { smooth?: number; speed?: number; }
    };
    

    static events: {
        /**
         * node-created and layout event listeners are obsolete use node-initialized or node-layout instead
         * @param type 
         * @param listener 
         */
        on(type: "node-created" | "layout", listener: (args: any, args1: any, args2: any) => void): void
    };
    static state: { clear(stateName: string): void };

    static animate(element: Object, attrStart?: Object, attrEnd?: Object, duration?: number, func?: OrgChart.anim, callback?: Function, tick?: boolean): void;

    static VERSION: string;
    /**
    * @ignore
    */
    static TEXT_THRESHOLD: number;
    /**
    * @ignore
    */
    static IMAGES_THRESHOLD: number;
    /**
    * @ignore
    */
    static LINKS_THRESHOLD: number;
    /**
    * @ignore
    */
    static BUTTONS_THRESHOLD: number;
    /**
    * @ignore
    */
    static ANIM_THRESHOLD: number;

    /**
    * @ignore
    */
    static IT_IS_LONELY_HERE: string;
    /**
    * @ignore
    */
    static RES: {
        /**
        * @ignore
        */
        IT_IS_LONELY_HERE_LINK: string
    };
    /**
    * @ignore
    */
    static FIRE_DRAG_NOT_CLICK_IF_MOVE: number;
    /**
    * @ignore
    */
    static STRING_TAGS: boolean;
    /**
     * Search placeholder
     */
    static SEARCH_PLACEHOLDER: string;
    /**
     * Search help symbol. 
     */
    static SEARCH_HELP_SYMBOL: string;

    /**
     * Close search result list by click outside list and clean search input 
     */
    static SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE: boolean;
    /**
    * @ignore
    */
    static IMPORT_MESSAGE: string;
    /**
    * @ignore
    */
    static FIXED_POSITION_ON_CLICK: boolean;
    /**
    * @ignore
    */
    static RENDER_LINKS_BEFORE_NODES: boolean;
    /**
    * @ignore
    */
    static MIXED_LAYOUT_ALL_NODES: boolean;
    /**
    * @ignore
    */
    static MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN: boolean;
    /**
    * Use mixed layout for example tree or treeLeftOffset if mumber of children is more then specified value
    */
    static MIXED_LAYOUT_IF_NUMBER_OF_CHILDREN_IS_MORE_THEN: boolean;
    /**
    * @ignore
    */
    static LINK_ROUNDED_CORNERS: number;
    /**
    * @ignore
    */
    static MOVE_STEP: number;
    /**
    * @ignore
    */
    static CLINK_CURVE: number;
    /**
    * @ignore
    */
    static SEARCH_RESULT_LIMIT: number;
    /**
    * @ignore
    */
    static MAX_DEPTH: number;
    /**
    * @ignore
    */
    static SCALE_FACTOR: number;
    /**
    * @ignore
    */
    static LAZY_LOADING_FACTOR: number;
    /**
     * Can be used to instruct the browser to defer loading of OrgChart that are off-screen until the user scrolls near them.
     * The init event listener will be called as soon as the OrgChart become visible.
     */
    static LAZY_LOADING: boolean;
   
    /**
     * Hides the Edit Form when the chart is moved with pan
     */
    static HIDE_EDIT_FORM_ON_PAN: boolean;
    static ARRAY_FIELDS: Array<string>;

    /**
     * Csv import and export delimiter/separator
     */
    static CSV_DELIMITER: string;

    /**
     * 
     */
    static EDITFORM_CLOSE_BTN: string;
    /**
     * Escape HTML to prevent Cross-site scripting (also known as XSS) attacks 
     */
    static ESCAPE_HTML: boolean;

    /**
     * Align children of assistant vertically 
     */
    static VERTICAL_CHILDREN_ASSISTANT: boolean;

    /**
    * @ignore
    */

    static randomId(): any;
    static searchUI: any;
    static attr: any;
    static toolbarUI: any;
    static elements: any;

    static expcollOpenTag: any;
    static upOpenTag: any;
    static grCloseTag: any;
}

declare namespace OrgChart {    
    /**
     * deprecated
     * @ignore
     */
    const none: number;

    /**
     * @ignore
     */    
    const COLLAPSE_PARENT_NEIGHBORS: number;
    
    /**
     * @ignore
     */
    const COLLAPSE_SUB_CHILDRENS: number;


    var template: object;

    interface node {
        /**
         * the same id you provided in the source node
         */
        id?: string | number,
        /**
         *  partner parent id, it is the partner parent node id of the partner node, it is the same ppid you provided in the source node, the default value is undefined.
         */
        ppid?: string | number,
        /**
         * a reference to the parent node, default value is null, if the nodes is collapse this proprty is not initalized and can be null even if pid is not null
         */
        parent?: node,
        /**
         * ub tree parent id, it is the parent node id of the root node of the sub tree, it is the same stpid you provided in the source node, the default value is null if not provided or if node with the same id does not exist.
         */
        stpid?: string | number,
        /**
         * - a reference to the parent node of a sub tree, default value is null, if the parent node is minimized this proprty is not initalized and can be null even if we have stpid
         */
        stParent?: node,
        isPartner?: boolean,
        partnerSeparation?: number,
        /**
         * array of ids, always initialized
         */
        childrenIds?: Array<string | number>,
        /**
         * array of children nodes, initialized on demand if all children are collpased it will be empty array
         */
        children?: Array<node>,
        /**
         * array of sub tree children root node ids, always initialized
         */
        stChildrenIds?: Array<string | number>,
        /**
         * array of sub tree children root nodes, initialized on demand if the node is minimized it will be empty array
         */
        stChildren?: Array<node>,
        /**
         * array of string values, the same array you provided in the source node
         */
        tags?: Array<string>,
        /**
         * template name, you can specify multiple templates with tags in one chart
         */
        templateName?: string,
        /**
         * a reference to the left node neighbor, the default value is undefined
         */
        leftNeighbor?: node | undefined,
        /**
         *  a reference to the right node neighbor, the default value is undefined
         */
        rightNeighbor?: node | undefined,
        /**
         * x position, default value undefined
         */
        x?: number | undefined,
        /**
         *  y position, default value undefined
         */
        y?: number | undefined,
        /**
         * width of the node, default value undefined
         */
        w?: number | undefined,
        /**
         * height of the node, default value undefined
         */
        h?: number | undefined,
        /**
         * if the node is assistant is true if not false if the node is not initialized is undefined
         */
        isAssistant?: boolean | undefined,
        /**
         * sub tree container nodes array, property only for the root node, default value undefined
         */
        stContainerNodes?: Array<node> | undefined,
        /**
         * it is set only if you define order option, default value undefined
         */
        order?: number | undefined,
        /**
         * true if the node is collpased, false if it is not and undefined if not initalized
         */
        collapsed?: boolean | undefined,
        /**
         * a level of the node starting from zero
         */
        level?: number,
        /**
         * true if the node is minimized, default value undefined
         */
        min?: boolean | undefined,
        /**
         * sub levels, default value undefined
         */
        subLevels?: number | undefined,
        /**
         * set only if the node contains sub trees and padding is defined in the template, default value undefined
         */
        padding?: number | undefined,
        /**
         * layout configuration name, default value undefined
         */
        lcn?: string | undefined,
        /**
         * for assistant nodes and mixed layout we create dynamic nodes called splits, default value undefined
         */
        isSplit?: boolean | undefined,
        /**
         * indicates if the node is child of partner node
         */
        isChildOfPartner?: boolean
    }


    interface template  
         {
            defs?: string,
            size?: Array<number>,
            expandCollapseSize?: number,
            linkAdjuster?: {
                fromX?: number,
                fromY?: number,
                toX?: number,
                toY?: number
            },
            ripple?: {
                radius?: number,
                color?: string,
                rect?: Array<number>
            },
            assistanseLink?: string,
            svg?: string,
            link?: string,
            pointer?: string,
            node?: string,
            plus?: string,
            minus?: string,
            nodeMenuButton?: string,
            menuButton?: string,
            img_0?: string,
            link_field_0?: string,
            editFormHeaderColor?: string,
            nodeCircleMenuButton?: object,
            min?: template,
            [name: string]: any
        }

    interface editUI {
        /**
         * Inits edit ui
         * @param obj 
         */
        init(obj: OrgChart): void;
        /**
         * The on() method of the editUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */
        on(type: "show" | "save" | "cancel" | "element-btn-click" | "button-click" | "hide", listener: (sender: editUI, args: any, args1: any, args2: any) => void | boolean): editUI;
        /**
         * Shows the edit form for the specified node id
         * @param id node id
         * @param detailsMode If true the edit form is in read only mode
         * @param dontAnim 
         */
        show(id: string | number, detailsMode?: boolean, dontAnim?: boolean): void;
        /**
         * Hides the edit form
         */
        hide(): void;
        content(id: string | number, detailsMode: boolean, dontAnim: boolean, width: string, dontRenderButtons: boolean): string;
        /**
         * Sets the avatar of the edit form
         * @param avatarUrl avatar url
         */
        setAvatar(avatarUrl?: string): void;
        // static renderHeaderContent(title: string, photo: string, node: OrgChart.node, data: object): string;        
    }

    interface searchUI {
        init(obj: OrgChart): void;
        /**
         * The on() method of the searchUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */        
        on(type: "searchclick", listener: (sender: OrgChart, args: any, args1: any, args2: any) => void | boolean): searchUI;
        /**
         * Hides the search grid
         */
        hide(): void;
        /**
         * Finds filed data by specified value
         * @param value search for value
         */
        find(value: string): void;
        createItem(img: string, id: string | number, first: string, second: string): string;
        helpView(): string;
        addMatchTag(id: string | number) : boolean;
        input: HTMLElement;
        searchTableWrapper: HTMLElement; 
        lastSearch: Array<object>;        
    }

    
    interface filterUI {
        init(instance: OrgChart): void;   
        update(): void;
        /**
         * Opens filter Tab 
         * @param filterTabName the name of the filter tab
         */
        show(filterTabName: string): void;
        /**
         * Hides the filter tabs
         */
        hide(): void;
        addFilterTag(data: object): boolean;
        filterBy?: any;
    }


    interface menuUI {
        init(obj: OrgChart, menu: { [key: string]: menu }): void;
        /**
         * The on() method of the menuUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */        
        on(type: "show", listener: (sender: menuUI, args: any, args1: any, args2: any) => void | boolean): menuUI;
        /**
         * Shows menu next to html element
         * @param stickToElement 
         * @param firstNodeId 
         * @param secondNodeId 
         * @param menu 
         */
        showStickIn(stickToElement: HTMLElement, firstNodeId: string | number, secondNodeId: string | number, menu: { [key: string]: menu }): void;
        /**
         * Returns true if the menu is visible
         */
        isVisible(): boolean;

        /**
         * Hieds the menu
         */
        hide(): void;
        /**
         * Shows menu by x,y position
         * @param x 
         * @param y 
         * @param firstNodeId 
         * @param secondNodeId 
         * @param menu 
         */
        show(x: number | HTMLElement, y?: number, firstNodeId?: string | number, secondNodeId?: string | number, menu?: { [key: string]: menu }): void;
    }

    interface circleMenuUI {
        /**
         * Inits circle menu instance
         * @param obj 
         * @param menu 
         */
        init(obj: OrgChart, menu: { [key: string]: menu }): void;
        /**
         * Shows circle menu 
         * @param nodeId 
         * @param menu 
         */
        show(nodeId: string | number, menu?: { [key: string]: menu }): void;
        /**
         * Hides circle menu 
         */
        hide(): void;
        /**
         * The on() method of the circleMenuUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */        
        on(type: "click" | "show" | "drag" | "drop" | "mouseenter" | "mouseout", listener: (sender: circleMenuUI, args: any, args1: any, args2: any) => void | boolean): circleMenuUI;
    }

    interface keyNavigation {
        /**
         * Set focus to specified id on initial load
         */
        focusId: number | string
    }

    interface toolbarUI {
        init(obj: OrgChart, toolbar: toolbar): void;
        showLayout(): void;
        hideLayout(): void;


        expandAllIcon?: string;
        fitIcon?: string;
        openFullScreenIcon?: string;
        closeFullScreenIcon?: string;
        zoomInIcon?: string;
        zoomOutIcon?: string;
        layoutIcon?: string;
    }



    interface toolbar  {
        layout?: boolean,
        zoom?: boolean,
        fit?: boolean,
        expandAll?: boolean,
        fullScreen?: boolean
    }

    interface miniMap  {
        colors?: Array<string>,
        selectorBackgroundColor?: string,
        backgroundColor?: string,
        focusStroke?: string,
        opacity?: Number,
        border?: string,
        width?: Number,
        height?: Number,
        padding?: Number,
        position?: OrgChart.position,
        draggable?: boolean
    }

    interface position  {
        top?: string,
        left?: string,
        right?: string,
        bottom?: string
    }

    interface exportOptions  {
        margin?: Array<number>,
        padding?: number,
        landscape?: boolean,
        filename?: string,
        scale?: "fit" | number,
        format?: "A1" | "A2" | "A3" | "A4" | "A5" | "A4" | "Letter" | "Legal",
        header?: string,
        footer?: string,
        openInNewTab?: boolean,
        expandChildren?: boolean,
        min?: boolean,
        nodeId? : number | string
    }

    interface exportCSVXMLJSONOptions  {
        filename?: string,
        expandChildren?: boolean,
        min?: boolean,
        nodeId? : number | string
    }

    interface linkTemplate {
        defs?: string,
        link?: string,
        label?: string,
        labelPosition?: string
    }
    interface menu  {
        [key: string]: {
            text: string,
            icon?: string,
            onClick?: Function
        }
    }
    interface circleMenu  {
        [key: string]: {
            text: string,
            icon?: string,
            color?: string,
            draggable?: boolean
        }
    }
    interface editFormElement {
        type?: string,
        label?: string,
        binding?: string,
        options?: Array<any>,
        btn?: string,
        vlidators?: { required?: string, email?: string }
    }
    interface link {
        from?: string | number,
        to?: string | number,
        template?: string,
        label?: string
    }
    interface dottedLine {
        from?: string | number,
        to?: string | number,
        tags?: Array<string>
    }
    interface orderBy {
        field?: string,
        desc?: boolean
    }
    interface move {
        left?: boolean,
        right?: boolean,
        up?: boolean,
        down?: boolean,
    }

    enum orientation {
        top,
        bottom,
        right,
        left,
        top_left,
        bottom_left,
        right_top,
        left_top
    }
    enum layout {
        normal,
        mixed,
        tree,
        treeLeftOffset,
        treeRightOffset
    }

    enum align {
        center,
        orientation
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
        inOutBack,
        impulse,
        expPulse
    }
    enum match {
        height,
        width,
        boundary
    }


    enum action {
        update,
        expand,
        collapse,
        exporting,
        init,
        centerNode,
        insert,
        maximize,
        minimize,
        edit,
        details,
        expandCollapse,
        pan,
        zoom,
        ctrlZoom,
        xScroll,
        yScroll,        
        scroll,
        none
    }

    

    interface options  {
        /**
         * Enables or disables the browser events handlers like click, pan, zoom, pinch, etc. Default value - *true*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      interactive: false
         * });
         * ```
         */
        interactive?: boolean,

        /**
         * Color mode. Default value - *light*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      mode: "dark"
         * });
         * ```
         */
        mode?: "dark" | "light",
        /**
         * Lazy loading is technique that defers loading of non-critical nodes at page load time. Instead, these non-critical nodes are loaded at the moment of need. Default value - *true*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      lazyLoading: false
         * });
         * ```
         */
        lazyLoading?: boolean,

 

        /**
         * Enables advanced search. Default value is true.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      enableSearch: false
         * });
         * ```
         */
        enableSearch?: boolean,
        
        /**
         * You can disable chart pan. Default value - *true*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      enablePan: false
         * });
         * ```
         */
        enablePan?: boolean,

        /**
         * Enable touch instead of mouse for particular devices with touchscreen/touchpad/trackpad. Default value - *false*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      enableTouch: true
         * });
         * ```
         */
        
        enableTouch?: boolean,
        /**
         * Enable keyboard navigation. Use "f" for find, arrows and space to navigate in the chart. Default value - *false*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      keyNavigation: true
         * });
         * var chart = new OrgChart('#tree', {
         *      keyNavigation: { focusId: 5 }
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/KeyNavigation | See doc...}
         */
         keyNavigation?: boolean | OrgChart.keyNavigation,
        /**
         * Shows mini map over the expanded tree. Default value - *false*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      miniMap: true
         * });
         * ```
         */
        miniMap?: boolean,
        /**
         * Enables edit, add, remove and other node operations. Also you can define your own node operation.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      nodeMenu:{
         *          details: {text:"Details"},
         *       	edit: {text:"Edit"},
         *          add: {text:"Add"},
         *    	    remove: {text:"Remove"},
         *          myMenuItem: {text:"My node menu Item", onClick: function {}}
         *      }
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Menus | See doc...}
         */
        nodeMenu?: OrgChart.menu;
        /**
         * With node circle menu you can add, edit, remove node or create clink/slink with drga and drop. Before setting this option make sure that you defined nodeCircleMenuButton in the ysed template.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *       nodeCircleMenu: {
         *           editNode: {
         *               icon: OrgChart.icon.edit(24, 24, '#aeaeae'),
         *               text: "Edit node",
         *               color: "white"
         *           }, 
         *           addClink: {
         *               icon: OrgChart.icon.link(24, 24, '#aeaeae'), 
         *               text: "Add C link",
         *               color: '#fff',
         *               draggable: true
         *           }
         *       }
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Menus | See doc...}
         */
        nodeCircleMenu?: OrgChart.circleMenu,
        /**
         * Customizable context menu. Also you can define your own node operation.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      nodeContextMenu:{
         *          details: {text:"Details"},
         *       	edit: {text:"Edit"},
         *          add: {text:"Add"},
         *          remove: {text:"Remove"}
         *          myMenuItem: {text:"My node menu Item", onClick: function {}}
         *      }
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Menus | See doc...}
         */
        nodeContextMenu?: OrgChart.menu,
        /**
         * Enables export to excel, export to svg and other OrgChart operations. Also you can define your own OrgChart operation.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      menu:{
         *          svg: { text: "Export SVG" },
         *          csv: { text: "Export CSV" }
         *          myMenuItem: {text:"My node menu Item", onClick: function {}}
         *      }
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Menus | See doc...}
         */
        menu?: OrgChart.menu,
        /**
         * With the toolbar enabled allows you to change the layout, zoom in/out, expand all nodes, etc.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      toolbar: {
         *          layout: true,
         *          zoom: true,
         *          fit: true,
         *          expandAll: false,
         *          fullScreen: true
         *      },
         * });
         * ```
         */
        toolbar?: OrgChart.toolbar,
        /**
         * Stops the chart locking to the top of the screen once you move it.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      sticky: false
         * });
         * ```
         */
        sticky?: boolean,
        /**
         * nodeMouseClick can accept the following values:
         * - OrgChart.action.edit - will open the edit view for the clicked node on the right hand side
         * - OrgChart.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only.
         * - OrgChart.action.expandCollapse - will expand or collapse the children nodes
         * - OrgChart.action.none - do nothing on node click event
         * - OrgChart.action.pan - allows you to move the chart in any direction
         * 
         * Default value - *OrgChart.action.details*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      nodeMouseClick: OrgChart.action.edit
         * });
         * ```
         */
        nodeMouseClick?: OrgChart.action,
        /**
         * nodeMouseDbClick can accept the following values:
         * - OrgChart.action.edit - will open the edit view for the clicked node on the right hand side
         * - OrgChart.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only
         * - OrgChart.action.expandCollapse - will expand or collapse the children nodes
         * - OrgChart.action.none - do nothing on node click event
         * 
         * Default value - *OrgChart.action.none*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      nodeMouseDbClick: OrgChart.action.edit
         * });
         * ```
         */
        nodeMouseDbClick?: OrgChart.action,
        /**
         * mouseScrool can accept the following values:
         * - OrgChart.action.zoom - will zoom in/out on mouse scroll
         * - OrgChart.action.ctrlZoom - will zoom in/out on mouse scroll and ctrl button is pressed
         * - OrgChart.action.xScroll - left/right move of the chart on mouse scroll
         * - OrgChart.action.yScroll - up/down move of the chart on mouse scroll
         * - OrgChart.action.none - do nothing on mouse scroll
         * 
         * Default value - *OrgChart.action.zoom*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      mouseScrool: OrgChart.action.ctrlZoom
         * });
         * ```
         */
        mouseScrool?: OrgChart.action,
        /**
         * Shows horizontal scrollbar. Default value - *false*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      showXScroll: true
         * });
         * ```
         */
        showXScroll?: boolean ,
        /**
         * Shows vertical scrollbar. Default value - *false*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      showYScroll: true
         * });
         * ```
         */
        showYScroll?: boolean ,
        /**
         * Set template if you want to change the appearance of the chart. Org Chart JS comes with number of build-in templates:
         * - ana
         * - ula
         * - olivia
         * - belinda
         * - rony
         * - mery
         * - polina
         * - mila
         * - diva
         * - base
         * - isla
         * - deborah
         * 
         * Default value - *ana*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      template: 'olivia'
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/PredefinedTemplates | See doc...}
         */
        template?: "ana" | "ula" | "olivia" | "belinda" | "rony" | "mery" | "polina" | "mila" | "diva" | "luba" | "isla" | "deborah" | "base" | "group" | "invisibleGroup" | string,
        /**
         * With tags option you can:
         * - Set a specific template for tagged node/s {@link https://balkan.app/OrgChartJS/Docs/MultipleTemplates | See doc...}
         * - Set node as assistant {@link https://balkan.app/OrgChartJS/Docs/Assistant | See doc...}
         * - Change node menu, circle menu and context menu items for tagged node/s {@link https://balkan.app/OrgChartJS/Docs/Menus | See doc...}
         * - Set the node level {@link https://balkan.app/OrgChartJS/Demos/SubLevels | See demo...}
         * - Set specific options for sub trees like layout templates etc {@link https://balkan.app/OrgChartJS/Docs/SubTrees | See doc...}          
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      tags: {
         *          myTag: {template: 'olivia'}
         *      },
         *      nodes: [{id: 1}, {id: 2, tags: ['myTag']}]
         * });
         * ```
         */
        tags?: {
            [key: string]: {
                template?: "ana" | "ula" | "olivia" | "belinda" | "rony" | "mery" | "polina" | "mila" | "diva" | "luba" | "isla" | "deborah" | "base" | "group" | "invisibleGroup" | string,
                subLevels?: number,
                nodeMenu?: OrgChart.menu,
                nodeCircleMenu?: OrgChart.circleMenu,
                nodeContextMenu?: OrgChart.menu,
                subTreeConfig?: {
                    orientation?: OrgChart.orientation,
                    levelSeparation?: number,
                    mixedHierarchyNodesSeparation?: number,
                    subtreeSeparation?: number,
                    siblingSeparation?: number,
                    layout?: OrgChart.layout | number,
                    columns?: number,
                    collapse?: {
                        level?: number,
                        allChildren?: boolean
                    }
                }
            };
        },
        /**
         * Minimize/Maximize node. The template has to have min defined. Default value - *false*.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *      min: true
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/MinMax | See doc...}
         */
        min?: boolean,
        /**
         * Node binding in Org Chart JS maps node data to node template parameters.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   nodeBinding: {
         *       field_0: "name"
         *   },
         *   nodes: [
         *       { id: 1, name: "Amber McKenzie" }
         *   ]
         * });
         * ```
         */
        nodeBinding?: { [key: string]: string },
        /**
         * Link binding in Org Chart JS maps node data to link template parameters.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   linkBinding: {
         *       link_field_0: "createdAt"
         *   },
         *   nodes: [
         *       { id: "1", name: "Amber McKenzie"  },
         *       { id: "2", pid: "1", createdAt: "Since 08/08/2018" },
         *       { id: "3", pid: "1", createdAt: "Since 05/04/2018" }
         *   ]
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Link | See doc...}
         */
        linkBinding?: { [key: string]: string },
        /**
         * Search by the fields defined in searchFields.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   searchFields: ["name", "title", etc...]
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Search | See doc...}
         */
        searchFields?: Array<string>,
        /**
         * Displays a field in the search result.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   searchDisplayField: "name"
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Search | See doc...}
         */
        searchDisplayField?: string,
        /**
         * Search by weight of the fields.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   searchFieldsWeight: {
         *       "Name": 100, //percent
         *       "Title": 20 //percent
         *   }
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Search | See doc...}
         */
        searchFieldsWeight?: { [key: string]: number },
    	/**
         * Search in field with abbreviation.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   searchFieldsAbbreviation: {
         *       "n": "name", 
         *       "a": "My Address" 
         *   }
         * });
         * ```
         * {@link https://balkan.app/OrgChartJS/Docs/Search | See doc...}
         */
         searchFieldsAbbreviation?: { [key: string]: string },
        /**
         * Array of node data JSON objects. nodes option is the data source of the chart. Node JSON objects could have unlimited number of properties, id, pid, ppid, stpid and tags are reserved node properties.
         * - id - unique identifier, it clould be integer or string
         * - pid - is the parent id
         * - stpid - subtree parent id
         * - ppid - parent partner id
         * - tags - array of strings
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   nodes: [
         *       { id: 1 },
         *       { id: 2, pid: 1, tags: ["Sales"] },
         *       { id: 3, stpid: 2  }
         *   ]
         * });
         * ```
         */
         nodes?: Array<Object>,
        /**
         * Adds curved link.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   clinks: [
         *       from: 4, to: 0, label: 'text'}, 
         *       {from: 4, to: 5, template: 'blue', label: '4 reports to 3' },
         *       {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' }
         *   ]
         * });
         * ```
         */
        clinks?: Array<OrgChart.link>,
        /**
         * Adds second link.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   slinks: [
         *       from: 4, to: 0, label: 'text'}, 
         *       {from: 4, to: 5, template: 'blue', label: '4 reports to 3' },
         *       {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' }
         *   ]
         * });
         * ```
         */
        slinks?: Array<OrgChart.link>,

         /**
         * Adds dotted line.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   dottedLines: [
         *       {from: 6, to: 1 }
         *   ]
         * });
         * ```
         */
        dottedLines?: Array<OrgChart.dottedLine>,

         /**
         * Adds group dotted line.
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   groupDottedLines: [
         *       {from: 6, to: 1 }
         *   ]
         * });
         * ```
         */
        groupDottedLines?: Array<OrgChart.dottedLine>,

        /**
         * The gap between each level. Default value - *60*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   levelSeparation: 50
         * });
         * ```
         */
        levelSeparation?: number,
        /**
         * The gap between nodes in a subtree. Default value - *20*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   siblingSeparation: 50
         * });
         * ```
         */
        siblingSeparation?: number,
        /**
         * The gap between subtrees. Default value - *40*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   subtreeSeparation: 50
         * });
         * ```
         */
        subtreeSeparation?: number,
        /**
         * The gap between nodes in vertical layout. Default value - *20*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   mixedHierarchyNodesSeparation: 5
         * });
         * ```
         */
        mixedHierarchyNodesSeparation?: number,
        /**
         * Set the assistant separation value. Default value - *100*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   assistantSeparation: 150
         * });
         * ```
         */
        assistantSeparation?: number,
        /**
         * Minimum gap between partner and node with partners. Default value - *50*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   minPartnerSeparation: 100
         * });
         * ```
         */
        minPartnerSeparation?: number,
        /**
         * Gap between partner links. Default value - *20*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   partnerChildrenSplitSeparation: 50
         * });
         * ```
         */
        partnerChildrenSplitSeparation?: number,
        /**
         * Gap between partners. Default value - *15*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   partnerNodeSeparation: 30
         * });
         * ```
         */
        partnerNodeSeparation?: number,
        /**
         * The number of colums if the chart has multiple root nodes. Default value - *10*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   columns: 1
         * });
         * ```
         */
        columns?: number,
        /**
         * The padding option sets the padding area on all four sides of the OrgChart. Default value - *30*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   padding: 20
         * });
         * ```
         */
        padding?: number,
        /**
         * Specifies the orientation of the Org Chart JS. could accept one of the following values:
         * - OrgChart.orientation.top
         * - OrgChart.orientation.bottom
         * - OrgChart.orientation.right
         * - OrgChart.orientation.left
         * - OrgChart.orientation.top_left
         * - OrgChart.orientation.bottom_left
         * - OrgChart.orientation.right_top
         * - OrgChart.orientation.left_top
         * 
         * Default value - *OrgChart.orientation.top*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   orientation: OrgChart.orientation.bottom
         * });
         * ```
         */
        orientation?: OrgChart.orientation,
        /**
         * Sets the layout algoritm:
         * - OrgChart.layout.normal
         * - OrgChart.layout.mixed
         * - OrgChart.layout.tree
         * - OrgChart.layout.treeLeftOffset
         * - OrgChart.layout.treeRightOffset
         * 
         * Default value - *OrgChart.layout.normal*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   layout: OrgChart.layout.mixed
         * });
         * ```          
         */
        layout?: OrgChart.layout | number,
        /**
         * The scale factor determines what fraction of the entire scale is visible at one time.
         * - OrgChart.match.height
         * - OrgChart.match.width
         * - OrgChart.match.boundary
         * - [number]
         * 
         * Default value - *1*
         * ```typescript     
         * var chart = new OrgChart('#tree', {
         *   scaleInitial: OrgChart.match.boundary
         * });
         * ```          
         * {@link https://balkan.app/OrgChartJS/Docs/Layout | See doc...}         
         */
        scaleInitial?: number | OrgChart.match,
        /**
         * Determines the minimum scale factor. Default value - *0.1*
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   scaleMin: 0.2
         * });
         * ```          
         */
        scaleMin?: number,
        /**
         * Determines the naximum scale factor. Default value - *5*
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   scaleMax: 10
         * });
         * ```          
         */
        scaleMax?: number,
        /**
          * The orderBy option is used to sort the nodes in ascending order by specified field. The default order is by nodes order in the nodes array. Default value - *null*
          * ```typescript       
          * var chart = new OrgChart('#tree', {
          *   orderBy: "orderId",
          *   nodes: [
          *       { id: 10, pid: 1, orderId: 2 },
          *       { id: 11, pid: 1, orderId: 1 }
          *   ]
          * });
          * ```    
          * ```typescript       
          * var chart = new OrgChart('#tree', {
          *   orderBy: {field: "orderId", desc: true},
          *   nodes: [
          *       { id: 10, pid: 1, orderId: 2 },
          *       { id: 11, pid: 1, orderId: 1 }
          *   ]
          * });
          * ```      
          */
        orderBy?: string | Array<OrgChart.orderBy>,
        /**
          * Filter the OrgChart by the specified fields.
          * ```typescript       
          * var chart = new OrgChart('#tree', {
          *   filterBy: 'all'
          * });
          * ```    
          * ```typescript       
          * var chart = new OrgChart('#tree', {
          *   filterBy: ['country', 'title']
          * });
          * ```      
          * ```typescript       
          * var chart = new OrgChart('#tree', {
          *   filterBy: {
          *         name: { 'name 2': { checked: false, text: 'My text 2'} },
          *         title: {}
          *   }
          * });
          * ```      
          */
        filterBy?: string | Array<string> | {[key: string]: { [key: string] : {
            checked: boolean,
            text?: string
        } }},
        /**
          * @ignore
          */
        editUI?: OrgChart.editUI,
        /**
          * @ignore
          */
        searchUI?: OrgChart.searchUI,
        /**
          * @ignore
          */
        filterUI?: OrgChart.filterUI,        
        /**
          * @ignore
          */
        xScrollUI?: any,
        /**
          * @ignore
          */
        yScrollUI?: any,
        /**
          * @ignore
          */
        nodeMenuUI?: OrgChart.menuUI,
        /**
          * @ignore
          */
        nodeCircleMenuUI?: OrgChart.circleMenuUI,
        /**
          * @ignore
          */
        nodeContextMenuUI?: OrgChart.menuUI,
        /**
          * @ignore
          */
        toolbarUI?: OrgChart.toolbarUI,
        /**
         * @ignore
         */
        notifierUI?: any,
        /**
         * @ignore
         */        
        menuUI?: OrgChart.menuUI,
        /**
         * @ignore
         */
         UI?: any,        
        /**
         * The URL to the export server. Default value - *https://balkan.app/export*
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   exportUrl: "https://balkan.app/export"
         * });
         * ```          
         */        
        exportUrl?: string,
        /**
         * Collapse specified level of the chart and its children if allChildren is true.
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   collapse: {level: 2, allChildren: true}
         * });
         * ```          
         */         
        collapse?: {
            level: number,
            allChildren?: boolean
        },
        /**
         * Expand specified node ids and its children if allChildren is true. The expand option works only if collapse is set.
         * 
         * In the example above the second level of the chart will be collapsed but node with id 155 and its children will be expanded.
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   collapse: {level: 2, allChildren: true},
         *   expand: {nodes: [155], allChildren: true}
         * });
         * ```          
         */         
        expand?: {
            nodes?: Array<string | number>,
            allChildren?: boolean
        },
        /**
         * The align option specifies the alignment of the nodes inside Org Chart JS.
         * - OrgChart.align.center - centered
         * - OrgChart.align.orientation - according to the orientation option
         * 
         * Default value - *OrgChart.align.center*
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   align: OrgChart.align.orientation
         * });
         * ```          
         */         
        align?: OrgChart.align | number,
        /**
         * Can be used to control the transition of the nodes on expand/collapse operation. Default value - *func: OrgChart.anim.outPow, duration: 200*
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   anim: {func: OrgChart.anim.outBack, duration: 500}
         * });
         * ```          
         */                 
        anim?: {
            /**
             * defines how long time an animation should take to complete
             */
            func?: OrgChart.anim,
            /**
             * Easing functions specify the speed at which an animation progresses at different points within the animation.
             */
            duration?: number
        },
        /**
         * Can be used to control the zooming sensitivity. Default value - *speed: 120, smooth: 12*
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   zoom: {speed: 130, smooth: 10}
         * });
         * ```          
         */          
        zoom?: {
            speed?: number,
            smooth?: number
        },
        /**
         * Define nodes as roots. Default value - *null*
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   roots: [2, 4]
         * });
         * ```          
         */           
        roots?: Array<string | number>,
        /**
         * Persist the state (scale, position, expanded/collapsed and min/max nodes) in the url or indexedDB. Default value - *null*
         * ```typescript       
         * var chart = new OrgChart('#tree', {
         *   state: {
         *       name: 'MyStateName',
         *       readFromLocalStorage: true,
         *       writeToLocalStorage: true,
         *       readFromIndexedDB: true,
         *       writeToIndexedDB: true,
         *       readFromUrlParams: true,                    
         *       writeToUrlParams: true
         *   }
         * });
         * ```          
         */          
        state?: {
            name?: string,
            readFromLocalStorage?: boolean,
            writeToLocalStorage?: boolean,
            readFromIndexedDB?: boolean,
            writeToIndexedDB?: boolean,
            readFromUrlParams?: boolean,
            writeToUrlParams?: boolean
        },
        /**
         * Configure the buildin edit form.
         * {@link https://balkan.app/OrgChartJS/Docs/Edit | See doc...}   
         */                
        editForm?: {
            readOnly?: boolean,
            titleBinding?: string,
            photoBinding?: string,            
            focusBinding?: string,
            addMore?: string,
            addMoreBtn?: string,
            addMoreFieldName?: string,
            saveAndCloseBtn?: string,
            cancelBtn?: string,
            generateElementsFromFields?: boolean,
            buttons?: {
                [key: string]: {
                    icon?: string,
                    text?: string,
                    hideIfEditMode?: boolean,
                    hideIfDetailsMode?: boolean
                } | null
            },
           // elements?: { [key: string]: OrgChart.editFormElement | Array<OrgChart.editFormElement> }
           elements?: Array<OrgChart.editFormElement | Array<OrgChart.editFormElement>>
        }
    }

    var ui: {
        defs(fromrender: string): string;
        lonely(config: Object): string;
        pointer(config: Object, action: OrgChart.action, scale: number): string;
        node(node: OrgChart.node, data: Object, animations: OrgChart.anim, config: Object, x: number | undefined, y: number | undefined, nodeBinding: Object | undefined, action: OrgChart.action, scale: number, sender: Object): string; 
        nodeBtns(config: Object, node: OrgChart.node, action: OrgChart.action, t: Object, sender: Object): string;
        expandCollapseBtn(chart: OrgChart, node: OrgChart.node, layoutConfigs: any, action: OrgChart.action, scale: number): string;
        link(node: OrgChart.node, obj: Object, scale: number, bordersByRootIdAndLevel: Object, nodes: Object, action: OrgChart.action): Array<string>;
        svg(width: number, height: number, viewBox: Array<number>, config: Object, content: string, scale: number): string;
        menuButton(config: Object): string;

    };

    var t: any;
}

declare class OrgChartBase {

    static icon: {
        png: (w: string| number, h: string | number, c: string) => string,
        pdf: (w: string | number| number, h: string | number, c: string) => string,
        svg: (w: string| number, h: string| number, c: string | number) => string,
        csv: (w: string| number, h: string| number, c: string| number) => string,
        excel: (w: string| number, h: string| number, c: string| number) => string,
        edit: (w: string| number, h: string| number, c: string| number) => string,
        details: (w: string| number, h: string| number, c: string| number) => string,
        remove: (w: string| number, h: string| number, c: string| number) => string,
        add: (w: string| number, h: string| number, c: string| number) => string,
        xml: (w: string| number, h: string| number, c: string| number) => string,
        link: (w: string| number, h: string| number, c: string| number) => string,
        happy: (w: string| number, h: string| number, c: string| number) => string,
        sad: (w: string| number, h: string| number, c: string| number) => string,
        share: (w: string| number, h: string| number, c: string| number, x?: string| number, y?: string| number) => string,
        user: (w: string| number, h: string| number, c: string| number, x?: string| number, y?: string| number) => string
    }


    /**
     * Can update link
     * @param id child id
     * @param pid parent id
     */
    canUpdateLink(id: string | number, pid: string | number): boolean;
    
    /**
     * Removes specified node from nodes collection, redraws the chart and fires remove event.
     * @param id identification number of the node
     * @param callback called at the end of animation
     * @param fireEvent indicates if the remove event will be called or not
     */
    removeNode(id: string | number, callback?: () => void, fireEvent?: boolean): void;



       

    /**
     * The on() method of the OrgChart class sets up a function that will be called whenever the specified event is delivered to the target.     * 
     * @category Event Listeners
     * @param type A case-sensitive string representing the event type to listen for.
     * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
     */
    on(type: "init" | "field" | "update" | "add" | "remove" | "renderbuttons" | "label" | "render-link" | "drag" | "drop" | "redraw" | "expcollclick" | "exportstart" | "exportend" | "click" | "dbclick" | "slink-click" | "clink-click" | "up-click" | "searchclick" | "import" | "adding" | "added" | "updated" | "key-down" | "visibility-change" | "renderdefs" | "render" | "prerender" | "screen-reader-text" | "removed" | "ready" | "ripple" | "node-initialized" | "nodes-initialized" | "node-layout", listener: (sender: OrgChart, args?: any, args1?: any, args2?: any) => void | boolean): OrgChart;

    /**
     * Occurs when the node data has been updated by updateNode method.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onUpdateNode((args) => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onUpdateNode(listener: (args: {
        /**
         * old node data
         */
        oldData: object,
        /**
         * new node data
         */
        newData: object
    }) => void): OrgChart;


    /**
     * Occurs when a node has been removed by removeNode method. 
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onRemoveNode((args) => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onRemoveNode(listener: (args: {
        /**
         * node id
         */
        id: number | string,
        /**
         * parent ids and sub tree parents ids that needs to be updated on the server. For example if you remove a node that has children all chilren nodes will change their pid to the parent node id of the removed node.
         */
        newPidsAndStpidsForIds: {
            newPidsForIds: { [key in any]: string | number },
            newStpidsForIds: { [key in any]: string | number }
        }
    }) => void): OrgChart;

    /**
     * Occurs when a node has been added by addNode method.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onAddNode((args) => {     
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onAddNode(listener: (args: {
        /**
         * new added data node
         */
        data: object
    }) => void): OrgChart;
    /**
     * The onDrag event occurs when a node is dragged. *enableDragDrop* option has to be turned on.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onDrag(() => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onDrag(listener: (args: {
        /**
         * dragged node id
         */
        dragId: string | number, 
        event: MouseEvent
    }) => void): OrgChart;
    /**
     * The onDrop event occurs when a node is dropped. *enableDragDrop* option has to be turned on.
     *  ```typescript     
     * var chart = new OrgChart('#tree', {});
     * chart.onDrop(() => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onDrop(listener: (args: {
        /**
         * dragged node id
         */
        dragId: string | number,
        /**
         * dropped node id
         */
        dropId: string | number,
        /**
         * draging element
         */
        dragNodeElement: HTMLElement
    }) => void): OrgChart;
}

declare namespace OrgChart {
    interface node {
        /**
         * same pid you provided in the source node, the default value is null if not provided or if node with the same id does not exist
         */
        pid?: string | number,
    }
    /**
     * deprecated, use OrgChart.align.center isntead
     * @ignore
     */
    const CENTER: number;
    /**
     * deprecated, use OrgChart.align.orientation isntead
     * @ignore
     */
    const ORIENTATION: number;


    /**
     * deprecated, use OrgChart.layout.normal isntead
     * @ignore
     */
    const normal: number;

    /**
     * deprecated, use OrgChart.layout.mixed isntead
     * @ignore
     */
    const mixed: number;
    /**
     * deprecated, use OrgChart.layout.tree isntead
     * @ignore
     */
    const tree: number;
    /**
     * deprecated, use OrgChart.layout.treeLeftOffset isntead
     * @ignore
     */
    const treeLeftOffset: any;
    /**
     * deprecated, use OrgChart.layout.treeRightOffset isntead
     * @ignore
     */
    const treeRightOffset: any;

    interface options {
        /**
 * With the drag and drop features enabled you can move nodes easily and change the tree structure. Default value - *false*.
 * ```typescript     
 * var chart = new OrgChart('#tree', {
 *      enableDragDrop: true
 * });
 * ```
 */
        enableDragDrop?: boolean,
    }
}
export default OrgChart