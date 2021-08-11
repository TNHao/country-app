import React, { Component } from 'react';

export default class LoadMoreButton extends Component {
    render() {
        return (
            <div className="load-more text-center mt-5">
                <button 
                    className="load-more-btn button-custom px-4 py-3 box-shadow"
                    onClick = {this.props.handleLoad}
                >
                    <strong>Load More</strong>
                </button>
            </div>
        )
    }
}
