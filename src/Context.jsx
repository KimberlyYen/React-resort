import React, { Component } from 'react'

const RoomContext = React.createContext()
// <RoomContext.Provider value={'hello'}

export default class RoomProvider extends Component {
    state = {}
    render() {
        return (
            <RoomContext.Provider value="hello">
                { this.props.children }
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider,  RoomConsumer, RoomContext }
