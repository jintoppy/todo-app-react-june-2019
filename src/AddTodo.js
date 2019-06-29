import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';


class AddTodo extends Component {
    constructor(props){
        super(props);
        this.myInput = createRef();
    }
    onBtnClick = () => {
        this.props.addFn(this.myInput.current.value);
    }
    render(){
        return (
            <div>
                <input ref={this.myInput} />
                <button onClick={this.onBtnClick}>Add the Item </button>
            </div>
        )
    }
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFn: (text) => {
            dispatch({
                type: 'add_todo',
                payload: text
            });
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);