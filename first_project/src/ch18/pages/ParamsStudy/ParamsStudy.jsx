import React from 'react';
import { useParams } from 'react-router-dom';

function ParamsStudy(props) {
    const params = useParams();
    console.log(params.name);

    return (
        <div>
            
        </div>
    );
}

export default ParamsStudy;