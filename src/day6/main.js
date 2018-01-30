function ButtonWrapper(props) {
  let {type, ...otherProps} = props;
  let buttonStyle;
  if (type === 'primary') {
    buttonStyle = styles.primary;
  } else {
    buttonStyle = styles.default;
  }

  return <Button style={buttonStyle} {...otherProps}/>
}
