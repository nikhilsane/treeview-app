import React, { Component } from 'react';
import Node from './node';
import { getProcessedBomElements } from '../service/fakeBOMService';

class Tree extends Component {
    // state = { 
    //     nodes: [
    //         {
    //             id: 1, 
    //             description: "node1", 
    //             isExpanded: false,
    //             level:1,
    //             children: [
    //                 {id: 11, description: "node1.1", children:[], isExpanded: false, level:2},
    //                 {id: 12, description: "node1.2", children:[], isExpanded: false, level:2}
    //             ]
    //         },
    //         {
    //             id: 2, 
    //             description: "node2", 
    //             isExpanded: false, 
    //             level:1,
    //             children: [
    //                 {id: 21, description: "node2.1", children:[], isExpanded: false, level:2},
    //                 {id: 22, description: "node2.2", children:[], isExpanded: false, level:2}
    //             ]
    //         },
    //         {id: 3, description: "node3", isExpanded: false, level:1, children:[]},
    //         {id: 4, description: "node4", isExpanded: false, level:1, children:[]},
    //     ]
    // };
    state = {
        nodes: getProcessedBomElements()
    };
    
    render() { 
        return ( 
            <ul>
                {
                this.state.nodes.map(node => 
                        <Node key={node.id} description={node.description} children={node.children} isExpanded={node.isExpanded} level={node.level}/>
                    )
                }
            </ul> 
        );
    }
}
 
export default Tree;