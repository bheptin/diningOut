import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { friendsFetch } from '../actions';
import FriendItem from './FriendItem';
import { CardSection, Spinner, Button, Header } from './common';

class AddFriend extends Component {
    componentWillMount() {
        this.props.friendsFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props this component will be rendered with
        //this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ friends }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(friends);
    }

    renderRow(friends) {
        return <FriendItem friends={friends} />;
    }

    renderAddFriendsButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
        return (
            <Button onPress={() => Actions.addFriends()}>
                Add Friends!
            </Button>
        );
      }

    render() {
        console.log(this.props);
        
        return (
            <View>
            <Header 
                headerText={'Welcome to diningOut'} 
            />
            <CardSection>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </CardSection>
        </View>
        );
    }
}

const mapStateToProps = state => {
    const friends = _.map(state.friends, (val, uid) => {
        return { ...val, uid };
    });

    return { friends };
};

export default connect(mapStateToProps, { friendsFetch })(AddFriend);
