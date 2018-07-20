
const sprites = {
  circles: {
    big: {
      // width: 120,
      // height: 120,
      width: (this.props.clientWidth/10)*3,
      height: (this.props.clientWidth/10)*3,
      borderRadius: 70,
      borderWidth: 1,
      position: 'relative',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      elevation: 14
    },
    text: {
      // position: 'absolute',
      // top: 45,
      // left: 12,
      fontSize: 18,
    },
    small: {
      // width: 110,
      // height: 110,
      width: '90%',
      height: '90%',
      borderRadius: 60,
      backgroundColor: 'white',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }
  },
  inputs: {
    borderBottomColor: '#894db2',
    borderBottomWidth: 1,
    width: '90%',
    height: 30,
    fontSize: 16,
    color: '#894db2',
    paddingLeft: 30,
    paddingBottom: 8,
    marginTop: 18,
    marginBottom: 18,
    flex: -1,
  }
}

export default sprites;
