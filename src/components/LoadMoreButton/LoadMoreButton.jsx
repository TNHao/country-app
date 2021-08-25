import React from 'react';

export default function LoadMoreButton(props) {
    return (
        <div className="load-more text-center mt-5">
            <button
                className="load-more-btn button-custom px-4 py-3 box-shadow"
                onClick={props.handleLoad}
            >
                <strong>Load More</strong>
            </button>
        </div>
    )
}
