// @flow

import * as React from "react";
import { NativeModules, requireNativeComponent } from "react-native";

type PKPaymentButtonType =
  // A button with the Apple Pay logo only.
  | "plain"
  // A button with the text “Buy with” and the Apple Pay logo.
  | "buy"
  // A button with the text “Set up” and the Apple Pay logo.
  | "setUp"
  // A button with the text “Pay with” and the Apple Pay logo.
  | "inStore"
  // A button with the text "Donate with" and the Apple Pay logo.
  | "donate"
  // A button with the text "Continue with" and the Apple Pay logo.
  | "continue";

type PKPaymentButtonStyle =
  //   A white button with black lettering (shown here against a gray background to ensure visibility).
  | "white"
  //   A white button with black lettering and a black outline.
  | "whiteOutline"
  //   A black button with white lettering.
  | "black";

type Props = $Exact<{
  type: ButtonType,
  style: ButtonStyle,
  onPress: Function,
  width?: number,
  height?: number,
  cornerRadius?: number,
  minWidth?: number,
  minHeight?: number,
  maxWidth?: number,
  maxHeight?: number,
}>;

const RNPKPaymentButton = requireNativeComponent("PKPaymentButton", null, {
  nativeOnly: { onPress: true },
});

export type ButtonType = PKPaymentButtonType;
export type ButtonStyle = PKPaymentButtonStyle;

export class PKPaymentButton extends React.Component<Props> {
  static defaultProps = {
    buttonStyle: "black",
    buttonType: "plain",
    minWidth: 100,
    minHeight: 30,
    cornerRadius: 4,
  };

  render() {
    return (
      <RNPKPaymentButton
        buttonStyle={this.props.style}
        buttonType={this.props.type}
        onPress={this.props.onPress}
        width={this.props.width}
        height={this.props.height}
        cornerRadius={this.props.cornerRadius}
        minWidth={this.props.minWidth}
        minHeight={this.props.minHeight}
        maxWidth={this.props.maxWidth}
        maxHeight={this.props.maxHeight}
      />
    );
  }
}
