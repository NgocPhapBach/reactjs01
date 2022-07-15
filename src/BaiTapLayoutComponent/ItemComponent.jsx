import React, { Component } from 'react'
import CardComponent from './CardComponent'

export default class ItemComponent extends Component {
    render() {
        return (
            <div className='row px-5 pb-3'>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </div>
        )
    }
}
