import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {BottomSheet, Button, Image, ListItem} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { Avatar, Icon } from 'react-native-elements'

import styles from '../styles/GameScreenStyle';
import {colors} from '../utils/Variables';

const GameScreen = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [gamefilters, setgamefilters] = useState(true);
   const [info, setinfo] = useState(false);
   const [selectpanel, setselectpanel] = useState(false);
   const [itemsData, setitemsData] = useState([]);
   const [key, setkey] = useState('Game');
   const [data, setData] = useState([]);

  const [openGame, setOpenGame] = useState(false);
  const [valueGame, setValueGame] = useState(null);
  const [valueCasino, setValueCasino] = useState(null);
  const [valueStake, setValueStake] = useState(null);
  const [valuePlayer, setValuePlayer] = useState(null);

  const [gameFiltersdata, setgamefiltersdata] = useState([
    {id: 0, name: 'Game', value: null, display: true},
    {id: 1, name: 'Casino', value: null, display: true},
    {id: 2, name: 'Stake', value: null, display: true},
    {id: 3, name: 'Player', value: null, display: true},
  ]);

  const [otherFiltersdata, setotherfiltersdata] = useState([
    {id: 0, name: 'Sequence', value: null, display: false},
    {id: 1, name: 'Subsequence', value: null, display: false},
    {id: 2, name: 'Sub Filter 1_5', value: null, display: false},
    {id: 3, name: 'Position', value: null, display: false},
    {id: 4, name: 'Sub 2 Filter', value: null, display: false},
    {id: 5, name: 'Sub 3 Filter', value: null, display: false},
    {id: 6, name: 'Reaction', value: null, display: false},
    {id: 7, name: 'Stack', value: null, display: false},
  ]);

  const [sequence, setSequence] = useState(null);
  const [subSequence, setSubSequence] = useState(null);
  const [position, setPosition] = useState(null);
  const [subFilter1_5, setSubFilter1_5] = useState(null);
  const [sub2Filter, setSub2Filter] = useState(null);
  const [sub3Filter, setSub3Filter] = useState(null);
  const [reaction, setreaction] = useState(null);
  const [stack, setstack] = useState(null);
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
  ]);



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

  const getData = async () => {
    try {
      const response = await fetch(
        'https://reckoner-example.herokuapp.com/tool/v1/filter',
      );
      const jsons = await response.json();
      const json = jsons.result ? jsons.result.data : jsons;
      //console.log(json,'gameData');
      if (json.game) {
        setData(json);
        setitemsData(data.game);
        //setItemsGame(json.game);
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

  const setobjects = async (key) => {
    setkey(key);
    setselectpanel(!selectpanel);
    switch (key) {
      case 'Game':
        setitemsData(data.game);
        break;
      case 'Casino':
        setitemsData(data.casino[valueGame.id]);
        break;
      case 'Stake':
        setitemsData(data.stake[valueCasino.id]);
        break;
      case 'Player':
        setitemsData(data.players[valueStake.id]);
        break;

      case 'Sequence':
        setitemsData(data.sequence[valuePlayer.id]);
        break;
      case 'Subsequence':
        setitemsData(data.subSequence[sequence.id]);
        break;
      case 'Sub Filter 1_5':
        setitemsData(data.subFilter1_5[valueStake.id]);
        break;
      case 'Position':
        if(otherFiltersdata[2].display){
          setitemsData(data.position[subFilter1_5.id]);
        }else if(otherFiltersdata[1].display){
          setitemsData(data.position[subSequence.id]);
        }else{
          setitemsData(data.position[sequence.id]);
        }
        break;
      case 'Sub 2 Filter':
        setitemsData(data.sub2Filter[position.id]);
        break;
      case 'Sub 3 Filter':
        setitemsData(data.sub3Filter[sub2Filter.id]);
        break;
      case 'Reaction':
        setitemsData(data.reaction[sub3Filter.id]);
        break;
      case 'Stack':
        if(otherFiltersdata[6].display){
          setitemsData(data.stack[reaction.id]);
        }else{
          setitemsData(data.stack[position.id]);
        }
        break;

      default:
        setitemsData([]);
        break;
    }
  }
  const setValues = async (value) => {
    setselectpanel(false);
    switch (key) {
      case 'Game':
        gameFiltersdata[0].value = value.value;
        setgamefiltersdata(gameFiltersdata);
        setValueGame(value);
        break;
      case 'Casino':
        gameFiltersdata[1].value = value.value;
        setgamefiltersdata(gameFiltersdata);
        setValueCasino(value);
        break;
      case 'Stake':
        gameFiltersdata[2].value = value.value;
        setgamefiltersdata(gameFiltersdata);
        setValueStake(value);
        break;
      case 'Player':
        gameFiltersdata[3].value = value.value;
        otherFiltersdata[0].display = true;
        setgamefiltersdata(gameFiltersdata);
        setotherfiltersdata(otherFiltersdata);
        setValuePlayer(value);
        break;
      case 'Sequence':
        otherFiltersdata[0].value = value.value;
        if(data.subSequence[value.id]){
          otherFiltersdata[1].display = true;
          otherFiltersdata[3].display = false;
        }else{
          otherFiltersdata[1].display = false;
          otherFiltersdata[3].display = true;
        }
        setotherfiltersdata(otherFiltersdata);
        setSequence(value);
        break;
      case 'Subsequence':
        otherFiltersdata[1].value = value.value;
        if(data.subFilter1_5[value.id]){
          otherFiltersdata[2].display = true;
          otherFiltersdata[3].display = false;
        }else{
          otherFiltersdata[3].display = true;
          otherFiltersdata[2].display = false;
        }
        setotherfiltersdata(otherFiltersdata);
        setSubSequence(value);
        break;
      case 'Sub Filter 1_5':
        otherFiltersdata[2].value = value.value;
        otherFiltersdata[3].display = true;
        setotherfiltersdata(otherFiltersdata);
        setSubFilter1_5(value);
        break;
      case 'Position':
        otherFiltersdata[3].value = value.value;
        if(data.sub2Filter[value.id]){
          otherFiltersdata[4].display = true;
          otherFiltersdata[6].display = false;
          otherFiltersdata[7].display = false;
        }else if(data.reaction[value.id]){
          otherFiltersdata[6].display = true;
          otherFiltersdata[4].display = false;
          otherFiltersdata[7].display = false;
        }else{
          otherFiltersdata[7].display = true;
          otherFiltersdata[6].display = false;
          otherFiltersdata[4].display = false;
        }
        setotherfiltersdata(otherFiltersdata);
        setPosition(value);
        break;
      case 'Sub 2 Filter':
        otherFiltersdata[4].value = value.value;
        if(data.sub3Filter[value.id]){
          otherFiltersdata[5].display = true;
          otherFiltersdata[6].display = false;
        }else{
          otherFiltersdata[6].display = true;
          otherFiltersdata[5].display = false;
        }
        setotherfiltersdata(otherFiltersdata);
        setSub2Filter(value);
        break;
      case 'Sub 3 Filter':
        otherFiltersdata[5].value = value.value;
        otherFiltersdata[6].display = true;
        setotherfiltersdata(otherFiltersdata);
        setSub3Filter(value);
        break;
      case 'Reaction':
        otherFiltersdata[6].value = value.value;
        otherFiltersdata[7].display = true;
        setotherfiltersdata(otherFiltersdata);
        setreaction(value);
        break;
      case 'Stack':
        otherFiltersdata[7].value = value.value;
        setotherfiltersdata(otherFiltersdata);
        setstack(value);
        break;
      default:
        break;
    }
  }
  const renderMenus = ({item, index}) => (
    <ListItem bottomDivider  style={item.display ? styles.listitem : styles.hidcontent} onPress={()=>{
      setobjects(item.name)
    }}>
        <ListItem.Content>
            <ListItem.Title>
                <Text style={styles.textlightcolor}>{item.name}</Text>
            </ListItem.Title>
            {item.value &&
              <ListItem.Subtitle style={styles.selecteditme}>
                  {item.value}
              </ListItem.Subtitle>
            }
        </ListItem.Content>
        <ListItem.Chevron name="help-circle-outline" onPress={()=>setinfo(true)} />
    </ListItem>
  );
  const renderContent = ({item, key}) => (
    <ListItem bottomDivider  style={styles.listitem} onPress={()=>{
      setValues(item) 
    }}>
        <ListItem.Content>
            <ListItem.Title>
                <Text>{item.value}</Text>
            </ListItem.Title>
        </ListItem.Content>
    </ListItem>
  );

  useEffect(() => {
    getData();
    getValues();
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
        {/* Fiters Start */}
        <View style={styles.leftpanel}>
            <ListItem bottomDivider  style={styles.listitem} onPress={()=>{
              setgamefilters(!gamefilters)
            }}>
                <ListItem.Content>
                    <ListItem.Title>
                        <Text style={styles.textlightcolor}>Game Filter</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron name={gamefilters ? "chevron-down" : "chevron-up"} color={colors.lightwhite}/>
            </ListItem>
            <View style={gamefilters ? styles.gamefilters : styles.hidcontent}>
              <FlatList
                    data={gameFiltersdata}
                    scrollEnabled
                    horizontal={false}
                    renderItem={renderMenus}
                    keyExtractor={item => item.id}
                />
            </View>
            <FlatList
                data={otherFiltersdata}
                scrollEnabled
                horizontal={false}
                renderItem={renderMenus}
                keyExtractor={item => item.id}
            />
        </View>
        {selectpanel &&
          <View style={styles.overloadpanel}>
              <View style={styles.leftpanel}>
                <ListItem bottomDivider onPress={()=>setselectpanel(false)} style={styles.listitem}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.headertext}>
                            {key} Filter
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <FlatList
                    data={itemsData}
                    scrollEnabled
                    horizontal={false}
                    renderItem={renderContent}
                    keyExtractor={item => item.id}
                />
              </View>
              <View style={styles.rightpanel}>
              </View>
          </View>
        }
        {info &&
          <View style={styles.overloadpanel_info}>
            <View style={styles.rightpanel}>
              <Text style={{color: 'white', marginBottom: 15}}  onPress={()=>setinfo(false)}>
                <Icon name="close"></Icon>
              </Text>
              <ScrollView>
                <Text style={styles.headertext}>
                  Guide to preflop table
                </Text>
                <Text style={styles.subtitletext}>
                  .Stake
                </Text>
                <Text style={styles.para}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                </Text>
                <Text style={styles.para}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                </Text>
              </ScrollView>
            </View>
          </View>
        }
        {/* Fiters End */}
        <ScrollView style={{flexDirection: 'row'}} horizontal>
          {/* Table starts */}
          <View>

            <ScrollView style={styles.tableview} scrollEnabled={true}>
              {TableKeys.map(item=>{
              return(
                  <View style={styles.flexrowbe}>
                  {item.map(i=>{
                      var indexs = TableK.indexOf(i.name);
                      if(indexs >= 0){
                      return (
                          <View style={[styles.boxbutton, {backgroundColor: Tabledata[indexs] ? Tabledata[indexs].colors[0].name : colors.gray}]}>
                          <Text style={[styles.boxbuttontext, {color: Tabledata[indexs] ? Tabledata[indexs].fontColor : colors.white}]}>{i.value}</Text>
                          </View>
                      )
                      }
                  })}
                  </View>
              )
              })}
            </ScrollView>
          </View>
          {/* Table Ends */}
          <View styles={styles.rightsidepanel}>
            <ListItem bottomDivider  style={styles.listitem}>
                <ListItem.Content>
                    <ListItem.Title style={{paddingBottom: 10}}>
                        <Text style={styles.textlightcolor}>Stack</Text>
                        <ListItem.Chevron name="help-circle-outline" />
                    </ListItem.Title>
                  <ListItem.Subtitle>
                    <DropDownPicker
                        style={{
                          height: 40,
                          backgroundColor: colors.black,
                          borderColor: colors.lightwhite,
                        }}
                        schema={{
                          label: 'value',
                          value: 'id',
                        }}
                        textStyle={{
                          color: colors.lightwhite,
                        }}
                        disabledStyle={{
                          backgroundColor: colors.black
                        }}
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

                  </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider  style={styles.listitem}>
                <ListItem.Content>
                    <ListItem.Title style={{paddingBottom: 10}}>
                        <Text style={styles.textlightcolor}>Opponent Rol. Size</Text>
                        <ListItem.Chevron name="help-circle-outline" />
                    </ListItem.Title>
                  <ListItem.Subtitle>
                    <DropDownPicker
                        style={{
                          height: 40,
                          backgroundColor: colors.black,
                          borderColor: colors.lightwhite,
                        }}
                        schema={{
                          label: 'value',
                          value: 'id',
                        }}
                        textStyle={{
                          color: colors.lightwhite,
                        }}
                        disabledStyle={{
                          backgroundColor: colors.black
                        }}
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

                  </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <Image source={require('../assets/images/Group.png')}
              style={styles.logobottom}  ></Image>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};
export default GameScreen;
