import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

import { setSearchField } from '../actions';

//for Redux store
const mapStateToProps = state => {
    return {
        searchField: state.searchField 
    }
}

const mapDispatchToProps = (dispatch) => {
    //need to return an object
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

//create App componenent that will be the overall app and will contain the SearchBox and CardList components

//called a smart component because it has state
class App extends Component {
    //add state
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}));
        
    }
    
    render() {
        const { robots } = this.state;
        //now searchField is coming down as props from store
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
            return robots.length === 0 ? <h1>Loading</h1> : 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                    
                </div>
                
            );
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);