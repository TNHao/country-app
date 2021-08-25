import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actSetCountryData, actSetError } from '../../store/actions/apiAction';

export default function NotFound() {
    const dispatch = useDispatch();

    return (
        <div className="not-found text-center">
            <h1 className="not-found-number">404</h1>
            <div className="not-found-text container">
                <h1>OOPS! PAGE NOT FOUND</h1>
                <p className="my-4">THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, <br className="d-block d-md-none" /> HAD ITS NAME CHANGED <br /> OR IS TEMPORARILY UNAVAILABLE.</p>
                <div className="py-2"></div>
                <Link to="/"
                    className="button-custom px-3 py-3 text-decoration-none"
                    onClick={() => {
                        // Set error and data to null
                        dispatch(actSetError(null));
                        dispatch(actSetCountryData(""));
                    }}
                >
                    Back to homepage
                </Link>
            </div>
        </div>
    )
}
