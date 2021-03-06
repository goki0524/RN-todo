import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

import { actionCreators } from '../redux/todoRedux'
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import Footer from '../components/Footer'

class TodoView extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  addItem = (item) => {
    const {dispatch} = this.props
    dispatch(actionCreators.addItem(item))
  }

  removeItem = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeItem(index))
  }

  toggleItemCompleted = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.toggleItemCompleted(index))
  }

  removeCompleted = () => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeCompleted())
  }

  render() {
    const {items} = this.props

    return (
      <View style={styles.container}>
        <Title> Todo List </Title>
        <Input
          placeholder={'Enter an item!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider}/>
        <List
          items={items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <View style={styles.divider} />
        <Button
          title="Solid Button"
        />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})

const mapStateToProps = (state) => ({
  items: state.todoReducer.items,
})

export default connect(mapStateToProps)(TodoView)