import React from 'react'
import { StyleSheet, Button, Image, Text, View } from 'react-native'
import * as firebase from 'firebase'

export default class Main extends React.Component {
    state = { currentUser: null }
    async componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

    signOut = async () => {
      
      await firebase.auth().signOut()
      this.props.navigation.navigate('Auth');
        
    }
render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="Sign Out" onPress={this.signOut} />
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})