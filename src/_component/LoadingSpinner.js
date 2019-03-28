import React from 'react';
import Loader from 'react-loader-spinner';

export const LoadingSpinner = (props) => {
    if (props.show) {
        return (
            <Loader
                type="Oval"
                color="#00BFFF"
                height="100"
                width="100"
            />
        )
    }
    else {
        return null;
    }
};