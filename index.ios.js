/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title1', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title2', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title3', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title4', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title5', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title6', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title7', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title8', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title9', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var React = require('react-native');
var {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    } = React;

var HelloReactNative = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(MOCKED_MOVIES_DATA),
      loaded: true,
    });
  },
  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderMovie}
            style={styles.listView}
            />
    );
  },
  renderLoadingView: function() {
    return (
        <View style={styles.container}>
          <Text>
            Loading movies...
          </Text>
        </View>
    );
  },
  renderMovie: function(movie) {
    return (
        <View style={styles.container}>
          <Image
              source={{uri: movie.posters.thumbnail}}
              style={styles.thumbnail}
              />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
