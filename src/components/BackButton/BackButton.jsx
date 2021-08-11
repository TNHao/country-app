// import React, { Component } from 'react';
// import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
// import { useHistory } from 'react-router-dom';

// // const routeChange = () => {
// //     useHistory().goBack()
// // };
// export default class BackButton extends Component {
//     // let history = useHistory();

//     render() {
//         return (
//             <button 
//                 className="back-btn button-custom py-1 mt-5 box-shadow"
//                 onClick = {useHistory().goBack}
//             >
//                 <HiOutlineArrowNarrowLeft />
//                 Back
//             </button>
//         )
//     }
// }

import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

export default function BackButton() {
    return (
        <button
            className="back-btn button-custom py-1 mt-5 box-shadow"
            onClick={useHistory().goBack}
        >
            <HiOutlineArrowNarrowLeft />
            Back
        </button>
    )
}
