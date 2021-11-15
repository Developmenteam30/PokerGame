import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  allPickerMainContainer: {
    flexDirection: 'row',
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
});
export default styles;
