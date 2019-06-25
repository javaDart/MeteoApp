import React from "react";
import { Animated } from "react-native";

export default class FadeInView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pan: Animated.ValueXY({x: 200, y: 0})
        }
    }

    componentDidMount () {
        Animated.timing(
            this.state.pan,
            {
                delay: this.props.delay,
                duration: 3000,
                toValue: {x: 0, y: 0}
            }
        ).start()
    }

    render () {
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    transform: this.state.pan.getTranslateTransform()
                }}
            >
                {this.state.children}
            </Animated.View>
        )
    }

}