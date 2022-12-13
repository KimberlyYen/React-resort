import React, { Component } from 'react'
import { RoomContext  } from '../Context'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
      const value = this.context
    return (
      <div>
        hello from featured rooms.
      </div>
    )
  }
}
