import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

import { setSearchField, requestRobots } from '../actions';

//for Redux store - map the state of everything
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    //need to return an object
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //this will work since we are using redux thunk because it's going to catch the fact that this is going to return a function
        onRequestRobots: () => dispatch(requestRobots())
    }
}

//create App componenent that will be the overall app and will contain the SearchBox and CardList components

//don't need constructor anymore here with redux
class App extends Component {
   
    componentDidMount() {
        //no longer need fetch call here with Redux because have props
        this.props.onRequestRobots();
    }
    
    render() {
        
        //now searchField is coming down as props from store
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
            return isPending ?
                <h1>Loading</h1> : 
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