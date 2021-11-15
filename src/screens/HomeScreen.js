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
   const [isVisible, setIsVisible] = useState(false);
  const [openGame, setOpenGame] = useState(false);
  const [valueGame, setValueGame] = useState(null);
  const [data, setData] = useState([]);
  const [sequence, setSequence] = useState([]);
  const [subSequence, setSubSequence] = useState([]);
  const [position, setPosition] = useState([]);
  const [subFilter1_5, setSubFilter1_5] = useState([]);
  const [sub2Filter, setSub2Filter] = useState([]);
  const [sub3Filter, setSub3Filter] = useState([]);
  const [reaction, setreaction] = useState([]);
  const [stack, setstack] = useState([]);
  const [Tabledata, setTabledata] = useState([]);
  const [TableKeys, setTableKeys] = useState([
    [{name: 'box0_0', value: 'AA'},{name: 'box0_1', value: 'AA'},{name: 'box0_2', value: 'AA'},{name: 'box0_3', value: 'AA'},{name: 'box0_4', value: 'AA'},{name: 'box0_5', value: 'AA'},{name: 'box0_6', value: 'AA'},{name: 'box0_7', value: 'AA'},{name: 'box0_8', value: 'AA'},{name: 'box0_9', value: 'AA'},{name: 'box0_10', value: 'AA'},{name: 'box0_11', value: 'AA'},{name: 'box0_12', value: 'AA'}],
    [{name: 'box1_0', value: 'AA'},{name: 'box1_1', value: 'AA'},{name: 'box1_2', value: 'AA'},{name: 'box1_3', value: 'AA'},{name: 'box1_4', value: 'AA'},{name: 'box1_5', value: 'AA'},{name: 'box1_6', value: 'AA'},{name: 'box1_7', value: 'AA'},{name: 'box1_8', value: 'AA'},{name: 'box1_9', value: 'AA'},{name: 'box1_10', value: 'AA'},{name: 'box1_11', value: 'AA'},{name: 'box1_12', value: 'AA'}],
    [{name: 'box2_0', value: 'AA'},{name: 'box2_1', value: 'AA'},{name: 'box2_2', value: 'AA'},{name: 'box2_3', value: 'AA'},{name: 'box2_4', value: 'AA'},{name: 'box2_5', value: 'AA'},{name: 'box2_6', value: 'AA'},{name: 'box2_7', value: 'AA'},{name: 'box2_8', value: 'AA'},{name: 'box2_9', value: 'AA'},{name: 'box2_10', value: 'AA'},{name: 'box2_11', value: 'AA'},{name: 'box2_12', value: 'AA'}],
    [{name: 'box3_0', value: 'AA'},{name: 'box3_1', value: 'AA'},{name: 'box3_2', value: 'AA'},{name: 'box3_3', value: 'AA'},{name: 'box3_4', value: 'AA'},{name: 'box3_5', value: 'AA'},{name: 'box3_6', value: 'AA'},{name: 'box3_7', value: 'AA'},{name: 'box3_8', value: 'AA'},{name: 'box3_9', value: 'AA'},{name: 'box3_10', value: 'AA'},{name: 'box3_11', value: 'AA'},{name: 'box3_12', value: 'AA'}],
    [{name: 'box4_0', value: 'AA'},{name: 'box4_1', value: 'AA'},{name: 'box4_2', value: 'AA'},{name: 'box4_3', value: 'AA'},{name: 'box4_4', value: 'AA'},{name: 'box4_5', value: 'AA'},{name: 'box4_6', value: 'AA'},{name: 'box4_7', value: 'AA'},{name: 'box4_8', value: 'AA'},{name: 'box4_9', value: 'AA'},{name: 'box4_10', value: 'AA'},{name: 'box4_11', value: 'AA'},{name: 'box4_12', value: 'AA'}],
    [{name: 'box5_0', value: 'AA'},{name: 'box5_1', value: 'AA'},{name: 'box5_2', value: 'AA'},{name: 'box5_3', value: 'AA'},{name: 'box5_4', value: 'AA'},{name: 'box5_5', value: 'AA'},{name: 'box5_6', value: 'AA'},{name: 'box5_7', value: 'AA'},{name: 'box5_8', value: 'AA'},{name: 'box5_9', value: 'AA'},{name: 'box5_10', value: 'AA'},{name: 'box5_11', value: 'AA'},{name: 'box5_12', value: 'AA'}],
    [{name: 'box6_0', value: 'AA'},{name: 'box6_1', value: 'AA'},{name: 'box6_2', value: 'AA'},{name: 'box6_3', value: 'AA'},{name: 'box6_4', value: 'AA'},{name: 'box6_5', value: 'AA'},{name: 'box6_6', value: 'AA'},{name: 'box6_7', value: 'AA'},{name: 'box6_8', value: 'AA'},{name: 'box6_9', value: 'AA'},{name: 'box6_10', value: 'AA'},{name: 'box6_11', value: 'AA'},{name: 'box6_12', value: 'AA'}],
    [{name: 'box7_0', value: 'AA'},{name: 'box7_1', value: 'AA'},{name: 'box7_2', value: 'AA'},{name: 'box7_3', value: 'AA'},{name: 'box7_4', value: 'AA'},{name: 'box7_5', value: 'AA'},{name: 'box7_6', value: 'AA'},{name: 'box7_7', value: 'AA'},{name: 'box7_8', value: 'AA'},{name: 'box7_9', value: 'AA'},{name: 'box7_10', value: 'AA'},{name: 'box7_11', value: 'AA'},{name: 'box7_12', value: 'AA'}],
    [{name: 'box8_0', value: 'AA'},{name: 'box8_1', value: 'AA'},{name: 'box8_2', value: 'AA'},{name: 'box8_3', value: 'AA'},{name: 'box8_4', value: 'AA'},{name: 'box8_5', value: 'AA'},{name: 'box8_6', value: 'AA'},{name: 'box8_7', value: 'AA'},{name: 'box8_8', value: 'AA'},{name: 'box8_9', value: 'AA'},{name: 'box8_10', value: 'AA'},{name: 'box8_11', value: 'AA'},{name: 'box8_12', value: 'AA'}],
    [{name: 'box9_0', value: 'AA'},{name: 'box9_1', value: 'AA'},{name: 'box9_2', value: 'AA'},{name: 'box9_3', value: 'AA'},{name: 'box9_4', value: 'AA'},{name: 'box9_5', value: 'AA'},{name: 'box9_6', value: 'AA'},{name: 'box9_7', value: 'AA'},{name: 'box9_8', value: 'AA'},{name: 'box9_9', value: 'AA'},{name: 'box9_10', value: 'AA'},{name: 'box9_11', value: 'AA'},{name: 'box9_12', value: 'AA'}],
    [{name: 'box10_0', value: 'AA'},{name: 'box10_1', value: 'AA'},{name: 'box10_2', value: 'AA'},{name: 'box10_3', value: 'AA'},{name: 'box10_4', value: 'AA'},{name: 'box10_5', value: 'AA'},{name: 'box10_6', value: 'AA'},{name: 'box10_7', value: 'AA'},{name: 'box10_8', value: 'AA'},{name: 'box10_9', value: 'AA'},{name: 'box10_10', value: 'AA'},{name: 'box10_11', value: 'AA'},{name: 'box10_12', value: 'AA'}],
    [{name: 'box11_0', value: 'AA'},{name: 'box11_1', value: 'AA'},{name: 'box11_2', value: 'AA'},{name: 'box11_3', value: 'AA'},{name: 'box11_4', value: 'AA'},{name: 'box11_5', value: 'AA'},{name: 'box11_6', value: 'AA'},{name: 'box11_7', value: 'AA'},{name: 'box11_8', value: 'AA'},{name: 'box11_9', value: 'AA'},{name: 'box11_10', value: 'AA'},{name: 'box11_11', value: 'AA'},{name: 'box11_12', value: 'AA'}],
    [{name: 'box12_0', value: 'AA'},{name: 'box12_1', value: 'AA'},{name: 'box12_2', value: 'AA'},{name: 'box12_3', value: 'AA'},{name: 'box12_4', value: 'AA'},{name: 'box12_5', value: 'AA'},{name: 'box12_6', value: 'AA'},{name: 'box12_7', value: 'AA'},{name: 'box12_8', value: 'AA'},{name: 'box12_9', value: 'AA'},{name: 'box12_10', value: 'AA'},{name: 'box12_11', value: 'AA'},{name: 'box12_12', value: 'AA'}],
  ]);
  const [TableK, setTableK] = useState([]);
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

  const render_values = ({item}) => (
    <View>
      <TouchableOpacity style={styles.urPositionItemView}>
        <Text style={styles.urPositionItem}>{item.fontColor}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem_subFilter1_5 = ({item, key}) => {
    return (
      <View>
        <TouchableOpacity style={styles.urPositionItemView} onPress={()=>{
            var key = Object.keys(data.position);
            var inde = key.indexOf(`${item.id}`);
            var casino = Object.values(data.position);
            if (casino[inde]) {
              setPosition(casino[inde]);
            }
        }}>
          <Text style={styles.urPositionItem}>{item.value}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderItem = ({item, key}) => (
    <View>
      <TouchableOpacity style={styles.urPositionItemView} onPress={()=>{
        var keys = Object.keys(data.sub2Filter);
        var index = keys.indexOf(`${item.id}`);
        if(index < 0){
          setSubFilter1_5([]);
          var key = Object.keys(data.position);
          var inde = key.indexOf(`${item.id}`);
          var casino = Object.values(data.position);
          if (casino[inde]) {
            setPosition(casino[inde]);
          }
        }else{
          var casino = Object.values(data.sub2Filter);
          if (casino[index]) {
            setsub2Filter(casino[index]);
          }
        }
      }}>
        <Text style={styles.urPositionItem}>{item.value}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItemposition = ({item}) => {
    return (
    <View>
      <TouchableOpacity style={styles.urPositionItemView} onPress={()=>{
        var keys = Object.keys(data.subFilter1_5);
        var index = keys.indexOf(`${item.id}`);
        if(index < 0){
          var key = Object.keys(data.reaction);
          var inde = key.indexOf(`${item.id}`);
          if(inde>=0){
            var casino = Object.values(data.reaction);
            if (casino[inde]) {
              setreaction(casino[inde]);
            }
          }else{
            var key1 = Object.keys(data.stack);
            var ind = key1.indexOf(`${item.id}`);
            var casino = Object.values(data.stack);
            if (casino[ind]) {
              setstack(casino[ind]);
            }
          }
        }else{
          var casino = Object.values(data.subFilter1_5);
          if (casino[index]) {
            setSub2Filter(casino[index]);
          }
        }
      }}>
        <Text style={styles.urPositionItem}>{item.value}</Text>
      </TouchableOpacity>
    </View>
    )
  }
  const renderItem_sub2filter = ({item, key}) => (
    <View>
      <TouchableOpacity style={styles.urPositionItemView} onPress={()=>{
        var keys = Object.keys(data.sub3Filter);
        var index = keys.indexOf(`${item.id}`);
        if(index < 0){
          var key = Object.keys(data.reaction);
          var inde = key.indexOf(`${item.id}`);
          var casino = Object.values(data.reaction);
          if (casino[inde]) {
            setreaction(casino[inde]);
          }
        }else{
          var casino = Object.values(data.sub3Filter);
          if (casino[index]) {
            setSub3Filter(casino[index]);
          }
        }
      }}>
        <Text style={styles.urPositionItem}>{item.value}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem_sub3filter = ({item, key}) => (
    <View>
      <TouchableOpacity style={styles.urPositionItemView} onPress={()=>{
          var key = Object.keys(data.reaction);
          var inde = key.indexOf(`${item.id}`);
          var casino = Object.values(data.reaction);
          if (casino[inde]) {
            setreaction(casino[inde]);
          }
      }}>
        <Text style={styles.urPositionItem}>{item.value}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem_reaction = ({item, key}) => (
    <View>
      <TouchableOpacity style={styles.urPositionItemView} onPress={()=>{
          var key = Object.keys(data.stack);
          var inde = key.indexOf(`${item.id}`);
          var casino = Object.values(data.stack);
          if (casino[inde]) {
            setstack(casino[inde]);
          }
      }}>
        <Text style={styles.urPositionItem}>{item.value}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem_stack = ({item}) => (
    <View>
      <TouchableOpacity style={styles.leftTextView}>
        <Text style={styles.leftText}>{item.value}</Text>
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

  const getValues = async () => {
    try {
      const response = await fetch(
        'https://curveinfotech.com/game/table.json',
      );
      const json = await response.json();
      if (json.box0_0) {
        var casino = Object.values(json);
        var keys = Object.keys(json);
        setTableK(keys);
        //console.log(keys);
        setTabledata(casino);
      }
    } catch (error) {
      console.error(error);
    } finally {
      //  setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    getValues();
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
            onChangeValue={value => {
              var keys = Object.keys(data.sequence);
              var index = keys.indexOf(`${value}`);
              var casino = Object.values(data.sequence);
              if (casino[index]) {
                setSequence(casino[index]);
              }
            }}
          />
        </View>
      </View>
      <ScrollView style={{}}>
        <View style={styles.selectListView}>
          <View>
              {sequence.map((item, index)=>{
                return (
                <View>
                  <TouchableOpacity style={styles.leftTextView} onPress={()=>{
                    var keys = Object.keys(data.subSequence);
                    var index = keys.indexOf(`${item.id}`);
                    if(index < 0){
                      setSubSequence([]);
                      var key = Object.keys(data.position);
                      var inde = key.indexOf(`${item.id}`);
                      var casino = Object.values(data.position);
                      if (casino[inde]) {
                        setPosition(casino[inde]);
                      }
                    }else{
                      setPosition([]);
                      var casino = Object.values(data.subSequence);
                      if (casino[index]) {
                        setSubSequence(casino[index]);
                      }
                    }
                  }}>
                    <Text style={styles.leftText}>{item.value}</Text>
                  </TouchableOpacity>
                </View> 
                )               
              })}
          </View>
          <View style={styles.rightSelectView}>
            {subSequence.length>0 &&
              <View>
                <Text style={styles.positionHeadingText}>YOUR SUBSEQUENCE</Text>
                <FlatList
                  data={subSequence}
                  scrollEnabled
                  horizontal={true}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>
            }
            {subFilter1_5.length>0 &&
              <View>
                <Text style={styles.positionHeadingText}>YOUR SUB FILTER 1_5</Text>
                <FlatList
                  data={subFilter1_5}
                  scrollEnabled
                  horizontal={true}
                  renderItem={renderItem_subFilter1_5}
                  keyExtractor={item => item.id}
                />
              </View>
            }

            {position.length>0 &&
              <View>
                <Text style={styles.positionHeadingText}>YOUR POSITION</Text>
                <FlatList
                  data={position}
                  scrollEnabled
                  horizontal={true}
                  renderItem={renderItemposition}
                  keyExtractor={item => item.id}
                />
              </View>
            }

            {sub2Filter.length>0 &&
              <View>
                <Text style={styles.positionHeadingText}>YOUR SUB 2 FILTER</Text>
                <FlatList
                  data={sub2Filter}
                  scrollEnabled
                  horizontal={true}
                  renderItem={renderItem_sub2Filter}
                  keyExtractor={item => item.id}
                />
              </View>
            }

            {sub3Filter.length>0 &&
              <View>
                <Text style={styles.positionHeadingText}>YOUR SUB 2 FILTER</Text>
                <FlatList
                  data={sub3Filter}
                  scrollEnabled
                  horizontal={true}
                  renderItem={renderItem_sub3Filter}
                  keyExtractor={item => item.id}
                />
              </View>
            }
            {reaction.length>0 &&
              <View>
                <Text style={styles.positionHeadingText}>YOUR SUB 2 FILTER</Text>
                <FlatList
                  data={reaction}
                  scrollEnabled
                  horizontal={true}
                  renderItem={renderItem_reaction}
                  keyExtractor={item => item.id}
                />
              </View>
            }
            {stack.length>0 &&
              <View>
                <Text style={styles.positionHeadingText}>YOUR SUB 2 FILTER</Text>
                <FlatList
                  data={stack}
                  scrollEnabled
                  horizontal={true}
                  renderItem={renderItem_stack}
                  keyExtractor={item => item.id}
                />
              </View>
            }

            {TableKeys.map(item=>{
              return(
                <View style={styles.flexrowbe}>
                  {item.map(i=>{
                    var indexs = TableK.indexOf(i.name);
                    if(indexs >= 0){
                      return (
                        <View style={[styles.boxbutton, {backgroundColor: Tabledata[indexs].colors[0].name}]}>
                          <Text style={[styles.boxbuttontext, {color: Tabledata[indexs].fontColor}]}>{i.value}</Text>
                        </View>
                      )
                    }
                  })}
                </View>
              )
            })}

          </View>
        </View>
      </ScrollView>
      {/* {Tabledata.length > 0 &&
            <View>
              <Text style={styles.positionHeadingText}>Table Data </Text>
              <FlatList
                    data={Tabledata}
                    numColumns={13}
                    scrollEnabled
                    horizontal={false}
                    renderItem={render_values}
                    keyExtractor={item => item.id}
                  />
            </View>
          } */}

    </SafeAreaView>
  );
};
export default HomeScreen;
