import React, { Component } from 'react';
import Node from './node';

class Tree extends Component {
    
    render() {
        const self = this;
        return ( 
            <ul>
                {
                this.props.nodes.map(node => 
                        <Node key={node.id} 
                        isExpanded={node.isExpanded} 
                        level={node.level}
                        data = {node}
                        onQtyIncrement={self.props.onQtyIncrement}
                        onQtyDecrement={self.props.onQtyDecrement}/>
                    )
                }
            </ul> 
        );
    }
}
 
export default Tree;