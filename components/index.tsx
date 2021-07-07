import React, { ReactElement } from 'react'
import {Alert} from './alert'
interface Props {
    
}

export default function index({}: Props): ReactElement {
    return (
        <div>
            <Alert msg={{a:'ss'}} />
        </div>
    )
}
