import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)} />
            <Text style={styles.label}>Enter content:</Text>
            <TextInput style={styles.input}
                value={content}
                onChangeText={text => setContent(text)} />
            <Button title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default BlogPostForm;