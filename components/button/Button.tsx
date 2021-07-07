import React, { ReactElement } from 'react'

interface Props {
    txt: string
}

export default function Button({txt}: Props): ReactElement {
    return (
        <div>
            {txt}
        </div>
    )
}
