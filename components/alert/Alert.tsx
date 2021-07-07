import React, { ReactElement } from 'react'

interface Props {
    txt: string
}

export default function Alert({txt}: Props): ReactElement {
    return (
        <div>
            {txt }
        </div>
    )
}
