import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import { globalStyles } from '../globalstyles/global';
import { Formik } from 'formik';

export default function ReviewForm () {
    return (
        <View style={globalStyles.maincontainer}>
            <Formik
            initialValues={{title: '', author: '', review: '', rating: ''}}
            onSubmit={(values) => {
                console.log(values)

            }}
            >
                {(formikprops) => (
                    <View>
                        <TextInput
                            style={globalStyles.textinputcontainer}
                            placeholder='Review title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                        />
                        <TextInput
                            style={globalStyles.textinputcontainer}
                            placeholder='Author name'
                            onChangeText={formikprops.handleChange('author')}
                            value={formikprops.values.author}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.textinputcontainer}
                            placeholder='Review text'
                            onChangeText={formikprops.handleChange('review')}
                            value={formikprops.values.review}
                        />
                        <TextInput
                            keyboardType='numeric'
                            style={globalStyles.textinputcontainer}
                            placeholder='Rating (1 - 5 stars)'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                        />

                        <Button
                            title='add review'
                            onPress={formikprops.handleSubmit}
                        />
                    </View>        
                )}
            </Formik>
        </View>
    )
}