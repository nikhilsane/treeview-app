import React, { Component } from 'react';
import './node.css'

class Node extends Component {
    state = { 
        parent : null,
        children: this.props.children,
        isExpanded: this.props.isExpanded,
        description: this.props.description,
        quantity: this.props.quantity
    };
    
    handleExpand = ()=> {
        this.setState({ isExpanded: true })
    };
    
    handleCollapse = ()=> {
        this.setState({ isExpanded: false});
    };

    handleQuantityChange = ()=> {
        console.log("quantity changed.");
    }

    renderNode() {
        if(this.state.children.length === 0) return (
            <li>
                <div className="row">
                    <div className="col-sm-4">
                        <i className="bi bi-dot"></i>
                        <span className="node">{this.state.description}</span>
                    </div>
                    {/* <div className="input-group mb-3 col-sm-2">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button">-</button>
                        </div>
                        <input type="text" className="form-control" value={this.state.quantity} onChange={this.handleCollapse}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">+</button>
                        </div>
                    </div> */}
                </div>
            </li>
            );

        if(!this.state.isExpanded) {
            return (
                <li>
                    <i className="bi bi-plus-square-dotted" onClick={this.handleExpand}></i>
                    <span className="node">{this.state.description}</span>
                    <ul className="nested">
                        { this.state.children.map(child => 
                                <Node key={child.id} children={child.children} isExpanded={child.isExpanded} 
                                    level={child.level} description={child.description} quantity={child.quantity}/> 
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
                                    level={child.level} description={child.description} quantity={child.quantity}/> 
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