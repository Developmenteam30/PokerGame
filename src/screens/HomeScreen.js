import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {BottomSheet, Button, ListItem} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from '../styles/HomeScreenStyle';
import {colors} from '../utils/Variables';

const HomeScreen = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [openGame, setOpenGame] = useState(false);
  const [valueGame, setValueGame] = useState(null);
  const [data, setData] = useState([]);

  const [itemsGame, setItemsGame] = useState([
    {value: 'CASH GAMES', id: 'CASH GAMES'},
  ]);
  const [openCasino, setOpenCasino] = useState(false);
  const [valueCasino, setValueCasino] = useState(null);
  const [itemsCasino, setItemsCasino] = useState([
    {value: 'ALL CASINOS', id: 'ALL CASINOS'},
  ]);
  const [openStake, setOpenStake] = useState(false);
  const [valueStake, setValueStake] = useState(null);
  const [itemsStake, setItemsStake] = useState([
    {value: 'MICRO STAKES', id: 'MICRO STAKES'},
  ]);
  const [openPlayer, setOpenPlayer] = useState(false);
  const [valuePlayer, setValuePlayer] = useState(null);
  const [itemsPlayer, setItemsPlayer] = useState([
    {value: '6-MAX', id: '6-MAX'},
  ]);

  // const openSheet = () => {
  //   setIsVisible(!isVisible);
  // };

  // const list = [
  //   {title: 'List Item 1'},
  //   {title: 'List Item 2'},
  //   {
  //     title: 'Cancel',
  //     containerStyle: {backgroundColor: 'red'},
  //     titleStyle: {color: 'white'},
  //     onPress: () => setIsVisible(false),
  //   },
  // ];

  const positionList = [
    {urPosition: 'BB'},
    {urPosition: 'SB'},
    {urPosition: 'Btn'},
    {urPosition: 'CO'},
    {urPosition: 'HJ'},
    {urPosition: 'MP2'},
    {urPosition: 'MP1'},
    {urPosition: 'EP2'},
  ];
  const leftList = [
    {leftPosition: 'OPEN RAISE'},
    {leftPosition: 'RAISE OVER LIMPERS'},
    {leftPosition: '3BET / CALL'},
    {leftPosition: 'CALL VS OPEN-PUSH'},
    {leftPosition: 'SQUEEZE / CALL'},
    {leftPosition: 'COLD4BET / FARHA'},
  ];
  const renderItem = ({item, key}) => (
    <View>
      <TouchableOpacity style={styles.urPositionItemView}>
        <Text style={styles.urPositionItem}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
  const leftRenderItem = ({item}) => (
    <View>
      <TouchableOpacity style={styles.leftTextView}>
        <Text style={styles.leftText}>{item}</Text>
      </TouchableOpacity>
    </View>
  );

  const getData = async () => {
    try {
      const response = await fetch(
        'https://curveinfotech.com/game/filters.json',
      );
      const json = await response.json();
      //console.log(json,'gameData');
      if (json.game) {
        setData(json);
        setItemsGame(json.game);
      }
    } catch (error) {
      console.error(error);
    } finally {
      //  setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <View style={{width: '30%'}}>
        <Button
          // icon={{
          //   name: 'add',
          //   size: 15,
          //   color: 'white',
          // }}
          onPress={() => openSheet()}
          title="Button"
        />
      </View> */}

      <View style={styles.allPickerMainContainer}>
        <View style={styles.dropdownWidth}>
          <Text style={styles.headingTxt}>GAME</Text>
          <DropDownPicker
            style={{
              height: 40,
              // zIndex: 40,
              backgroundColor: colors.white,
            }}
            schema={{
              label: 'value',
              value: 'id',
            }}
            // labelStyle={{
            //   width: '30%',
            // }}
            open={openGame}
            value={valueGame}
            items={itemsGame}
            setValue={setValueGame}
            setItems={setItemsGame}
            setOpen={setOpenGame}
            onChangeValue={value => {
              var keys = Object.keys(data.casino);
              var index = keys.indexOf(`${value}`);
              var casino = Object.values(data.casino);
              if (casino[index]) {
                setItemsCasino(casino[index]);
              }
            }}
          />
        </View>
        <View style={styles.dropdownWidth}>
          <Text style={styles.headingTxt}>CASINO</Text>
          <DropDownPicker
            style={{
              height: 40,
              // zIndex: 40,
            }}
            schema={{
              label: 'value',
              value: 'id',
            }}
            open={openCasino}
            value={valueCasino}
            items={itemsCasino}
            setValue={setValueCasino}
            setItems={setItemsCasino}
            setOpen={setOpenCasino}
            onChangeValue={value => {
              var keys = Object.keys(data.stake);
              var index = keys.indexOf(`${value}`);
              var casino = Object.values(data.stake);
              if (casino[index]) {
                setItemsStake(casino[index]);
              }
            }}
          />
        </View>
        <View style={styles.dropdownWidth}>
          <Text style={styles.headingTxt}>STAKE</Text>
          <DropDownPicker
            style={{
              height: 40,
              // zIndex: 40,
            }}
            // labelStyle={{
            //   width: '30%',
            // }}
            schema={{
              label: 'value',
              value: 'id',
            }}
            open={openStake}
            value={valueStake}
            items={itemsStake}
            setValue={setValueStake}
            setItems={setItemsStake}
            setOpen={setOpenStake}
            onChangeValue={value => {
              var keys = Object.keys(data.players);
              var index = keys.indexOf(`${value}`);
              var casino = Object.values(data.players);
              if (casino[index]) {
                setItemsPlayer(casino[index]);
              }
            }}
          />
        </View>
        <View style={styles.dropdownWidth}>
          <Text style={styles.headingTxt}>PLAYER</Text>
          <DropDownPicker
            style={{
              height: 40,
              // zIndex: 1000,
            }}
            // labelStyle={{
            //   width: '30%',
            // }}
            schema={{
              label: 'value',
              value: 'id',
            }}
            open={openPlayer}
            value={valuePlayer}
            items={itemsPlayer}
            setValue={setValuePlayer}
            setItems={setItemsPlayer}
            setOpen={setOpenPlayer}
          />
        </View>
      </View>
      <ScrollView style={{}}>
        <View style={styles.selectListView}>
          <View>
            <FlatList
              data={data.sequenceOptions}
              scrollEnabled={false}
              renderItem={leftRenderItem}
              keyExtractor={item => item.id}
            />
            {/* <TouchableOpacity style={styles.leftTextView}>
              <Text style={styles.leftText}>OPEN RAISE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftTextView}>
              <Text style={styles.leftText}>RAISE OVER LIMPERS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftTextView}>
              <Text style={styles.leftText}>3BET / CALL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftTextView}>
              <Text style={styles.leftText}>CALL VS OPEN-PUSH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftTextView}>
              <Text style={styles.leftText}>SQUEEZE / CALL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftTextView}>
              <Text style={styles.leftText}>COLD4BET / FARHA</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.rightSelectView}>
            <Text style={styles.positionHeadingText}>YOUR POSITION</Text>
            <View>
              <FlatList
                data={data.positionOptions}
                scrollEnabled
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={{marginVertical: '3%'}}>
              <Text style={styles.positionHeadingText}>
                OPPONENT OPEN-PUSH POSITION
              </Text>
              <FlatList
                data={data.subSequenceOptions}
                scrollEnabled
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            <Text style={styles.positionHeadingText}>EXTRA ACTIONS</Text>
            <TouchableOpacity style={styles.anotherPlayerBtn}>
              <Text style={styles.anotherPlayer}>ANOTHER PLAYERS CALLS</Text>
            </TouchableOpacity>
            <View style={styles.bottomBtn}>
              <TouchableOpacity style={styles.sbBtn}>
                <Text style={styles.bottomBtnTxt}>SB</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.bottomBtnTxt}>BTN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <BottomSheet
        isVisible={isVisible}
        containerStyle={{backgroundColor: 'rgba(0.5, 0.22, 0, 0.2)'}}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet> */}
    </SafeAreaView>
  );
};
export default HomeScreen;
