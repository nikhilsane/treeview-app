import React, {Component} from 'react';
import './App.css';
import Tree from './components/tree';

class App extends Component {
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
    // state = {
    //     nodes: getProcessedBomElements(),
    //     sortBy: this.props.sortBy,
    //     sortDirection: this.props.sortDirection
    // };
  constructor(props) {
    super(props);
    this.state = {
        'sortBy' : this.props.sortBy,
        'sortDirection' : this.props.sortDirection
    };
    
    if(this.state.sortBy !== undefined && this.state.sortBy !== "") {
        // requires sorting
        if(this.state.sortDirection === undefined || this.state.sortDirection === "") {
            this.state.sortDirection = "asc";
        } else {
            this.state.sortDirection = this.state.sortDirection.toLowerCase();
        }

        let sortBy = this.state.sortBy;
        let sortDirection = this.state.sortDirection;

        let compareFn = function(a, b) {
            let directionFactor = (sortDirection === "asc") ? 1 : -1;
            if(a[sortBy] < b[sortBy]) {
                return -1 * directionFactor;
            } else if (a[sortBy] > b[sortBy]) {
                return 1 * directionFactor;
            } else {
                return 0;
            }
        }

        let unsortedNodes = this.props.nodes;
        let rootNode = unsortedNodes[0];

        // in-place sorting of the whole tree
        this.sortSubTree(rootNode, compareFn);
        this.state.nodes = unsortedNodes;

        // build the id to node object map
        // idToNodeMap = {};
        // for(let i=0; i<this.state.nodes.length; i++) {
        //   this.processSubTree(this.state.nodes[i], idToNodeMap);
        // }
        // this.state.idToNodeMap = idToNodeMap;

    } else {
        // no sorting is required.
        this.state.nodes = this.props.nodes;
    }
  }

  sortSubTree(node, compareFn) {
      for(let i=0; i<node['children'].length; i++) {
          let currentNode = node['children'][i];
          if(currentNode['children'] !== undefined && currentNode['children'].length > 1) {
              this.sortSubTree(currentNode, compareFn);
          }
      }
      node['children'].sort(compareFn);
  }

  findAndUpdateInSubTree(node, idToSearch, delta) {
    for(let i=0; i<node['children'].length; i++) {
      let currentNode = node['children'][i];
      if(currentNode['id'] === idToSearch) {
        const newNode = {...currentNode};
        newNode['quantity'] = currentNode['quantity'] + delta;
        node['children'][i] = newNode;
        break;
      } else {
        this.findAndUpdateInSubTree(currentNode, idToSearch, delta);
      }
    }
  }


  handleIncrement = (data) => {
    const nodes = [...this.state.nodes];
    for(let i=0; i<nodes.length; i++) {
      let currentNode = nodes[i];
      if(currentNode['id'] === data['id']) {
        let newNode = {...currentNode};
        newNode['quantity'] = currentNode['quantity'] + 1;
        nodes[i] = newNode;
        break;
      } else {
        this.findAndUpdateInSubTree(currentNode, data['id'], 1);
      }
    }
    this.setState({nodes});
  };

  handleDecrement = (data) => {
    const nodes = [...this.state.nodes];
    for(let i=0; i<nodes.length; i++) {
      let currentNode = nodes[i];
      if(currentNode['id'] === data['id']) {
        let newNode = {...currentNode};
        newNode['quantity'] = currentNode['quantity'] - 1;
        nodes[i] = newNode;
        break;
      } else {
        this.findAndUpdateInSubTree(currentNode, data['id'], -1);
      }
    }
    this.setState({nodes});
  }

  render() { 
    return (
      <React.Fragment>
        <Tree nodes={this.state.nodes} sortBy="id" sortDirection="asc" 
        onQtyIncrement={ this.handleIncrement } 
        onQtyDecrement={ this.handleDecrement }/>
      </React.Fragment>
    );
  }
}
 
export default App;