import React from 'react'
import { ItemCount } from './itemCount/ItemCount'

export const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className='titulo-1'>{props.gretting}</h1>

            <ItemCount initial={1} stock={5}/>
        </div>
    )
}
