import React, { Component } from 'react';


class GridItem extends Component {
    render() {
        return (
            <div className='grid-item'>
                <h1>{this.props.title}</h1>
                <img src={this.props.image} alt=''/>
                {this.props.caption}
            </div>
        )
    }
}

export default GridItem