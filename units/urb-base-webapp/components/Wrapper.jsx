// @flow

import createPalette from 'material-ui/styles/palette'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import React from 'react'
import PropTypes from 'prop-types'
import EventListener from 'react-event-listener'

import ViewportDimensions from '../scripts/ViewportDimensions'

export default class Wrapper extends React.Component {
  muiTheme: Object
  rbContext: Object

  static childContextTypes = {
    rbContext: PropTypes.object,
  }

  constructor(props: any, context: any) {
    super(props, context)

    // TODO x0100 If a property for innerWidth is provided, use it for the initial request

    // Descendants can add other items to rbContext
    this.rbContext = {}

    this.rbContext.viewportDimensions = new ViewportDimensions()

    this.muiTheme = createMuiTheme({
      palette: createPalette({
        type: 'dark', // Switching the dark mode on is a single property value change.
      }),
    })
  }

  componentDidMount() {
    this.handle_onResize() // Will populate the data structures for dimensions with current values
  }

  getChildContext() {
    return {
      rbContext: this.rbContext,
    }
  }

  handle_onResize = () => {
    this.rbContext.viewportDimensions.handle_onResize()
  }

  render() {
    return (
      <EventListener target="window" onResize={this.handle_onResize}>
        <MuiThemeProvider theme={this.muiTheme}>
          {this.props.children}
        </MuiThemeProvider>
      </EventListener>
    )
  }
}