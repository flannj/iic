import { Component } from 'react'
import { ItemList } from './ItemList'
import { Check } from './Check'
import { AddItem } from './AddItem'
import { Whoops } from './Whoops404'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'

const matches = {
    potato: ['potatoes', 'potato'],
    corn: ['corn'],
    seafood: ['salmon', 'halibut', 'swordfish', 'mussels', 'clams'],
    dairy: ['milk', 'cream', 'dairy'],
    tomato: ['tomato', 'tomatoes'],
    blacklist: ['plums']
}
export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			itemList: [],
      updatedList: [],
      count: 0
		}
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
    this.submitList = this.submitList.bind(this);
    this.clearList = this.clearList.bind(this);
	}
	addItem(newItem) {
		this.setState({
			itemList: [newItem['item'], ...this.state.itemList]
		})
	}
	removeItem(index) {
		var item = this.state.itemList[index];
		var array = this.state.itemList
		array.splice(index, 1)
		this.setState({
			itemList: array
		})
	}
  submitList() {
    var i = this.state.count;
    this.setState({
      updatedList: this.state.itemList,
      count: i + 1
    })
  }
  clearList() {
    this.setState({
      itemList: [],
      updateList: []
    })
  }
	render() {
		return (
			<div className="app">
				<div className="page-content container">
					{(this.props.location.pathname === "/") ?
					<Grid>
            <h1>Is It Chowder?</h1>
						<Row>
							<Col md={6}>
                <h3>Recipe </h3>
							 	<AddItem onNewItem={this.addItem}/>
								<ItemList onNewItem={this.addItem} key={this.state.count} onRemoveItem={this.removeItem} itemList={this.state.itemList}/>
                <button className="btn btn-info check" onClick={this.submitList}>Run the Check</button>
                <button className="btn btn-default clear" onClick={this.clearList}> Clear List </button>
							</Col>
							<Col md={6}>
                <h3> Results </h3>
								<Check itemList={this.state.updatedList}/>
							</Col>
						</Row>
					</Grid>:

						<Whoops404/>
					}
			</div>
		</div>
		)
	}
}
