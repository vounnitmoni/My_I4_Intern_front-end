
import React from 'react'
import { Button as PaperButton } from 'react-native'
import {Text, View } from 'react-native'

const Button = ({mode, style, children, ...props}) => (
    <PaperButton
        style={[
            styles.button,
            mode === "outlined" && { backgroundColor: theme.colors.surface },
            style
        ]}
        labelStyle={[
            styles.text,
            mode === "contained" && { color: theme.colors.surface }
        ]}
        mode={mode}
            {...props}
        >
            {children}
    </PaperButton>
);

const styles = StyleSheet.create({
    button: {
      width: "100%",
      marginVertical: 10
    },
    text: {
      fontWeight: "bold",
      fontSize: 15,
      lineHeight: 26
    }
  });

export default memo(Button);