import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen = ({route}) => {
  const {article} = route.params;

  return (
    <SafeAreaView  style={styles.container}>
      <WebView source={{uri: article.url}} />
    </SafeAreaView >
  );
}
