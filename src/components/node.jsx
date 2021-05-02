import React, { Component } from 'react';
import './node.css'

class Node extends Component {
    state = { 
        parent : null,
        children: this.props.children,
        isExpanded: this.props.isExpanded,
        description: this.props.description
    };
    
    handleExpand = ()=> {
        this.setState({ isExpanded: true })
    };
    
    handleCollapse = ()=> {
        this.setState({ isExpanded: false});
    };

    renderNode() {
        if(this.state.children.length === 0) return <li><i className="bi bi-dot"></i><span className="node">{this.state.description}</span></li>;

        if(!this.state.isExpanded) {
            return (
                <li>
                    <i className="bi bi-plus-square-dotted" onClick={this.handleExpand}></i>
                    <span className="node">{this.state.description}</span>
                    <ul className="nested">
                        { this.state.children.map(child => 
                                <Node key={child.id} children={child.children} isExpanded={child.isExpanded} 
                                    level={child.level} description={child.description}/> 
                            ) 
                        }
                    </ul>
                </li>
            )
        } else {
            return (
                <li>
                    <i className="bi bi-dash-square-dotted" onClick={this.handleCollapse}></i>
                    <span className="node">{this.state.description}</span>
                    <ul className="active">
                        { this.state.children.map(child => 
                                <Node key={child.id} children={child.children} isExpanded={child.isExpanded} 
                                    level={child.level} description={child.description}/> 
                            ) 
                        }
                    </ul>
                </li>
            )
        }
    };
    render() { 
        return ( 
            <div>
                {this.renderNode()}
            </div>
        );
    }
}
 
export default Node;