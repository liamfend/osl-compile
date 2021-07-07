import React, { ReactElement } from 'react'

export interface AlertProps {
    txt: string
}

export default function Alert({txt}: AlertProps): ReactElement {
    return (
        <div>
            {txt }
        </div>
    )
}
