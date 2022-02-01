import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  backgroundVideo: {
    top: 8,
    left: 0,
    bottom: 40,
    right: 0,
    width: width,
    height: height,
  },
  gamefilters: {
    paddingLeft: 10,
  },
  hidcontent: {
    display: 'none',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
    flexDirection: 'row',
  },
  textlightcolor: {
    color: colors.lightwhite,
    padding: 15,
  },
  rightpanel: {
    width: '30%',
    marginLeft: '60%',
    opacity: 1,
    height: height,
    padding: 10,
    backgroundColor: colors.lightblack,
  },
  leftpanel: {
    width: '20%',
    opacity: 1,
    height: '100%',
    backgroundColor: colors.black,
  },
  leftpanels: {
    width: '30%',
    opacity: 1,
    height: '100%',
    backgroundColor: colors.black,
  },
  middlepanel: {
    width: '40%',
    flexDirection: 'row',
  },
  tableheader: {
    flexDirection: 'row',
    padding: 10,
  },
  tablehedertext: {
    color: colors.white,
    fontSize: 14,
  },
  boxstyle: {
    backgroundColor: '#05B2D5',
    width: 17,
    height: 17,
    marginRight: 10,
  },
  tableview: {
    width: '100%',
    overflow: 'scroll',
  },
  rightsidepanel: {
    width: 200,
  },
  logobottom: {
    width: 200,
    height: 30,
    resizeMode: 'contain',
    marginTop: 50,
  },
  overloadpanel: {
    width: '80%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 2,
    left: '20%',
  },
  overloadpanel_info: {
    width: width,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 3,
    left: '0%',
  },

  headertext: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    color: colors.white,
  },
  listitem: {
    backgroundColor: 'black',
  },
  subtitletext: {
    color: colors.white,
    fontSize: fontSizes.small,
    paddingTop: 12,
  },
  para: {
    color: colors.lightwhite,
    fontSize: fontSizes.smaller,
  },
  selecteditme: {
    color: colors.primary,
    fontSize: fontSizes.smallest,
  },
  allPickerMainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1,
    marginBottom: '2%',
  },
  dropdownWidth: {
    width: '22%',
  },
  headingTxt: {
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    marginVertical: 5,
    color: colors.black,
  },
  leftTextView: {
    borderWidth: 1,
    backgroundColor: colors.black,
    width: '100%',
    marginTop: 2,
  },
  leftText: {
    fontWeight: 'bold',
    fontSize: fontSizes.small,
    color: colors.white,
    padding: 10,
  },
  selectListView: {
    flexDirection: 'row',
  },
  rightSelectView: {
    marginLeft: '2%',
  },
  positionHeadingText: {
    fontWeight: 'bold',
    fontSize: fontSizes.medium,
    color: colors.black,
  },
  urPositionItemView: {
    backgroundColor: colors.gray,
    marginRight: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  urPositionItem: {
    color: colors.white,
    padding: 10,
    fontWeight: 'bold',
  },
  anotherPlayerBtn: {
    backgroundColor: colors.red,
    borderRadius: 5,
    width: '60%',
    marginVertical: 10,
  },
  anotherPlayer: {
    fontWeight: 'bold',
    fontSize: fontSizes.small,
    padding: 10,
    alignSelf: 'center',
    color: colors.white,
  },
  bottomBtn: {
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  sbBtn: {
    padding: 10,
    backgroundColor: colors.red,
    borderRadius: 5,
  },
  btn: {
    padding: 10,
    backgroundColor: colors.gray,
    borderRadius: 5,
  },
  bottomBtnTxt: {
    color: colors.white,
    fontWeight: 'bold',
  },
  boxbutton: {
    padding: 10,
    width: 50,
    backgroundColor: colors.gray,
    margin: 1,
  },
  boxbuttontext: {
    color: colors.white,
    textAlign: 'center',
  },
  flexrowbe: {
    flexDirection: 'row',
    width: '100%',
  },
});
export default styles;
