import React, { Component } from 'react';
import './node.css'

class Node extends Component {
    state = { 
        isExpanded: this.props.isExpanded,
    };
    
    handleExpand = ()=> {
        this.setState({ isExpanded: true })
    };
    
    handleCollapse = ()=> {
        this.setState({ isExpanded: false});
    };

    renderNode() {
        const self = this;
        if(this.props.data.children.length === 0) return (
            <li>
                <div className="row">
                    <div className="col-sm-4">
                        <i className="bi bi-dot"></i>
                        <span className="node">{this.props.data.description}</span>
                    </div>
                    { <div className="input-group mb-3 col-sm-2">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" onClick={()=>{this.props.onQtyDecrement(this.props.data)}} type="button">-</button>
                        </div>
                        <input type="text" className="form-control" value={this.props.data.quantity} onChange={this.handleCollapse}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" onClick={()=>{this.props.onQtyIncrement(this.props.data)}} type="button">+</button>
                        </div>
                    </div>}
                </div>
            </li>
            );

        if(!this.state.isExpanded) {
            return (
                <li>
                    <i className="bi bi-plus-square-dotted" onClick={this.handleExpand}></i>
                    <span className="node">{this.props.data.description}</span>
                    <ul className="nested">
                        { this.props.data.children.map(child => 
                                <Node key={child.id} isExpanded={child.isExpanded} 
                                    level={child.level} 
                                    data={child} onQtyIncrement={self.props.onQtyIncrement} onQtyDecrement={self.props.onQtyDecrement}/> 
                            ) 
                        }
                    </ul>
                </li>
            )
        } else {
            return (
                <li>
                    <i className="bi bi-dash-square-dotted" onClick={this.handleCollapse}></i>
                    <span className="node">{this.props.data.description}</span>
                    <ul className="active">
                        { this.props.data.children.map(child => 
                                <Node key={child.id} isExpanded={child.isExpanded} 
                                    level={child.level} 
                                    data={child} onQtyIncrement={self.props.onQtyIncrement} onQtyDecrement={self.props.onQtyDecrement}/> 
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