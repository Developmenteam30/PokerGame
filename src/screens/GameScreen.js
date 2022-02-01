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
import {Avatar, Icon} from 'react-native-elements';
import Orientation from 'react-native-orientation-locker';

import styles from '../styles/GameScreenStyle';
import {colors} from '../utils/Variables';
Orientation.lockToLandscape();
var connect = new WebSocket('wss://reckoner-example.herokuapp.com');
const GameScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [gamefilters, setgamefilters] = useState(true);
  const [info, setinfo] = useState(false);
  const [selectpanel, setselectpanel] = useState(false);
  const [itemsData, setitemsData] = useState([]);
  const [key, setkey] = useState('Game');
  const [data, setData] = useState([]);
  const [fonts, setfonts] = useState(null);

  const [openGame, setOpenGame] = useState(false);
  const [valueGame, setValueGame] = useState(null);
  const [valueCasino, setValueCasino] = useState(null);
  const [valueStake, setValueStake] = useState(null);
  const [valuePlayer, setValuePlayer] = useState(null);
  const [StackList, setStackList] = useState([]);
  const [openStack, setOpenStack] = useState(false);
  const [StackValue, setStackValue] = useState(null);

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
    // {id: 7, name: 'Stack', value: null, display: false},
  ]);

  const [rightFiltersdata, setrightfiltersdata] = useState([
    {id: 0, name: 'Stack', value: null, display: false},
    {id: 1, name: 'Opponent Rol. Size', value: null, display: false},
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
    [
      {name: 'box0_0', value: 'AA'},
      {name: 'box0_1', value: 'AKs'},
      {name: 'box0_2', value: 'AQs'},
      {name: 'box0_3', value: 'AJs'},
      {name: 'box0_4', value: 'ATs'},
      {name: 'box0_5', value: 'A9s'},
      {name: 'box0_6', value: 'A8s'},
      {name: 'box0_7', value: 'A7s'},
      {name: 'box0_8', value: 'A6s'},
      {name: 'box0_9', value: 'A5s'},
      {name: 'box0_10', value: 'A4s'},
      {name: 'box0_11', value: 'A3s'},
      {name: 'box0_12', value: 'A2s'},
    ],
    [
      {name: 'box1_0', value: 'AKo'},
      {name: 'box1_1', value: 'KK'},
      {name: 'box1_2', value: 'KQs'},
      {name: 'box1_3', value: 'KJs'},
      {name: 'box1_4', value: 'KTs'},
      {name: 'box1_5', value: 'K9s'},
      {name: 'box1_6', value: 'K8s'},
      {name: 'box1_7', value: 'K7s'},
      {name: 'box1_8', value: 'K6s'},
      {name: 'box1_9', value: 'K5s'},
      {name: 'box1_10', value: 'K4s'},
      {name: 'box1_11', value: 'K3s'},
      {name: 'box1_12', value: 'K2s'},
    ],
    [
      {name: 'box2_0', value: 'AQo'},
      {name: 'box2_1', value: 'KQs'},
      {name: 'box2_2', value: 'QQ'},
      {name: 'box2_3', value: 'QJs'},
      {name: 'box2_4', value: 'QTs'},
      {name: 'box2_5', value: 'Q9s'},
      {name: 'box2_6', value: 'Q8s'},
      {name: 'box2_7', value: 'Q7s'},
      {name: 'box2_8', value: 'Q6s'},
      {name: 'box2_9', value: 'Q5s'},
      {name: 'box2_10', value: 'Q4s'},
      {name: 'box2_11', value: 'Q3s'},
      {name: 'box2_12', value: 'Q2s'},
    ],
    [
      {name: 'box3_0', value: 'AJo'},
      {name: 'box3_1', value: 'KJo'},
      {name: 'box3_2', value: 'QJo'},
      {name: 'box3_3', value: 'JJ'},
      {name: 'box3_4', value: 'JTs'},
      {name: 'box3_5', value: 'J9s'},
      {name: 'box3_6', value: 'J8s'},
      {name: 'box3_7', value: 'J7s'},
      {name: 'box3_8', value: 'J6s'},
      {name: 'box3_9', value: 'J5s'},
      {name: 'box3_10', value: 'J4s'},
      {name: 'box3_11', value: 'J3s'},
      {name: 'box3_12', value: 'J2s'},
    ],
    [
      {name: 'box4_0', value: 'ATo'},
      {name: 'box4_1', value: 'KTo'},
      {name: 'box4_2', value: 'QTo'},
      {name: 'box4_3', value: 'JTo'},
      {name: 'box4_4', value: 'TT'},
      {name: 'box4_5', value: 'T9s'},
      {name: 'box4_6', value: 'T8s'},
      {name: 'box4_7', value: 'T7s'},
      {name: 'box4_8', value: 'T6s'},
      {name: 'box4_9', value: 'T5s'},
      {name: 'box4_10', value: 'T4s'},
      {name: 'box4_11', value: 'T3s'},
      {name: 'box4_12', value: 'T2s'},
    ],
    [
      {name: 'box5_0', value: 'A9o'},
      {name: 'box5_1', value: 'K9o'},
      {name: 'box5_2', value: 'Q9o'},
      {name: 'box5_3', value: 'J9o'},
      {name: 'box5_4', value: 'T9o'},
      {name: 'box5_5', value: '99'},
      {name: 'box5_6', value: '98s'},
      {name: 'box5_7', value: '97s'},
      {name: 'box5_8', value: '96s'},
      {name: 'box5_9', value: '95s'},
      {name: 'box5_10', value: '94s'},
      {name: 'box5_11', value: '93s'},
      {name: 'box5_12', value: '92s'},
    ],
    [
      {name: 'box6_0', value: 'A8o'},
      {name: 'box6_1', value: 'K8o'},
      {name: 'box6_2', value: 'Q8o'},
      {name: 'box6_3', value: 'J8o'},
      {name: 'box6_4', value: 'T8o'},
      {name: 'box6_5', value: '98o'},
      {name: 'box6_6', value: '88'},
      {name: 'box6_7', value: '87s'},
      {name: 'box6_8', value: '86s'},
      {name: 'box6_9', value: '85s'},
      {name: 'box6_10', value: '84s'},
      {name: 'box6_11', value: '83s'},
      {name: 'box6_12', value: '82s'},
    ],
    [
      {name: 'box7_0', value: 'A7'},
      {name: 'box7_1', value: 'K7o'},
      {name: 'box7_2', value: 'Q7o'},
      {name: 'box7_3', value: 'J7o'},
      {name: 'box7_4', value: 'T7o'},
      {name: 'box7_5', value: '97o'},
      {name: 'box7_6', value: '87o'},
      {name: 'box7_7', value: '77'},
      {name: 'box7_8', value: '76s'},
      {name: 'box7_9', value: '75s'},
      {name: 'box7_10', value: '74s'},
      {name: 'box7_11', value: '73s'},
      {name: 'box7_12', value: '72s'},
    ],
    [
      {name: 'box8_0', value: 'A6o'},
      {name: 'box8_1', value: 'K6o'},
      {name: 'box8_2', value: 'Q6o'},
      {name: 'box8_3', value: 'J6o'},
      {name: 'box8_4', value: 'T6o'},
      {name: 'box8_5', value: '96o'},
      {name: 'box8_6', value: '86o'},
      {name: 'box8_7', value: '76o'},
      {name: 'box8_8', value: '66'},
      {name: 'box8_9', value: '65s'},
      {name: 'box8_10', value: '64s'},
      {name: 'box8_11', value: '63s'},
      {name: 'box8_12', value: '62s'},
    ],
    [
      {name: 'box9_0', value: 'A5o'},
      {name: 'box9_1', value: 'K5o'},
      {name: 'box9_2', value: 'Q5o'},
      {name: 'box9_3', value: 'J5o'},
      {name: 'box9_4', value: 'T5o'},
      {name: 'box9_5', value: '95o'},
      {name: 'box9_6', value: '85o'},
      {name: 'box9_7', value: '75o'},
      {name: 'box9_8', value: '65o'},
      {name: 'box9_9', value: '55'},
      {name: 'box9_10', value: '54s'},
      {name: 'box9_11', value: '53s'},
      {name: 'box9_12', value: '52s'},
    ],
    [
      {name: 'box10_0', value: 'A4o'},
      {name: 'box10_1', value: 'K4o'},
      {name: 'box10_2', value: 'Q4o'},
      {name: 'box10_3', value: 'J4o'},
      {name: 'box10_4', value: 'T4o'},
      {name: 'box10_5', value: '94o'},
      {name: 'box10_6', value: '84o'},
      {name: 'box10_7', value: '74o'},
      {name: 'box10_8', value: '64o'},
      {name: 'box10_9', value: '54o'},
      {name: 'box10_10', value: '44'},
      {name: 'box10_11', value: '43s'},
      {name: 'box10_12', value: '42s'},
    ],
    [
      {name: 'box11_0', value: 'A3o'},
      {name: 'box11_1', value: 'K3o'},
      {name: 'box11_2', value: 'Q3o'},
      {name: 'box11_3', value: 'J3o'},
      {name: 'box11_4', value: 'T3o'},
      {name: 'box11_5', value: '93o'},
      {name: 'box11_6', value: '83o'},
      {name: 'box11_7', value: '73o'},
      {name: 'box11_8', value: '63o'},
      {name: 'box11_9', value: '53o'},
      {name: 'box11_10', value: '43o'},
      {name: 'box11_11', value: '33'},
      {name: 'box11_12', value: '32s'},
    ],
    [
      {name: 'box12_0', value: 'A2o'},
      {name: 'box12_1', value: 'K2o'},
      {name: 'box12_2', value: 'Q2o'},
      {name: 'box12_3', value: 'J2o'},
      {name: 'box12_4', value: 'T2o'},
      {name: 'box12_5', value: '92o'},
      {name: 'box12_6', value: '82o'},
      {name: 'box12_7', value: '72o'},
      {name: 'box12_8', value: '62o'},
      {name: 'box12_9', value: '52o'},
      {name: 'box12_10', value: '42o'},
      {name: 'box12_11', value: '32o'},
      {name: 'box12_12', value: '22'},
    ],
  ]);
  const [TableK, setTableK] = useState([]);
  const [itemsGame, setItemsGame] = useState([]);

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
  useEffect(() => {
    getData();
    connectsocket();
  }, []);

  const connectsocket = async () => {
    var filters = '';
    if (gameFiltersdata[1].value) {
      filters += gameFiltersdata[1].value;
    }
    if (gameFiltersdata[0].value) {
      filters += gameFiltersdata[0].value;
    }
    if (gameFiltersdata[3].value) {
      filters += gameFiltersdata[3].value;
    }
    if (otherFiltersdata[3].value) {
      filters += otherFiltersdata[3].value;
    }

    if (otherFiltersdata[0].value) {
      filters += otherFiltersdata[0].value;
    }
    if (StackValue) {
      filters += StackValue;
    }
    if (gameFiltersdata[2].value) {
      filters += gameFiltersdata[2].value;
    }
    connect.send(JSON.stringify({filters: filters}));
  };
  connect.onmessage = ({data}) => {
    data = JSON.parse(data);
    if (data.box0_0) {
      var casino = Object.values(data);
      var keys = Object.keys(data);
      setTableK(keys);
      setTabledata(casino);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(
        'https://reckoner-example.herokuapp.com/tool/v1/filter',
      );
      const jsons = await response.json();
      const json = jsons.result ? jsons.result.data : jsons;
      if (json.game) {
        setData(json);
        setitemsData(json.game);
      }
      const resp = await fetch(
        'https://reckoner-example.herokuapp.com/tool/v1/color/font',
      );
      const jsonss = await resp.json();
      const jso = jsonss.result ? jsonss.result.data : jsonss;
      if (jso.game) {
        setfonts(jso);
      }
    } catch (error) {
      console.error(error);
    } finally {
      //  setLoading(false);
    }
  };

  const setobjects = async key => {
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
        var v = data.sequence[valuePlayer.id];
        setitemsData(v);
        break;
      case 'Subsequence':
        setitemsData(data.subSequence[sequence.id]);
        break;
      case 'Sub Filter 1_5':
        setitemsData(data.subFilter1_5[valueStake.id]);
        break;
      case 'Position':
        if (otherFiltersdata[2].display) {
          setitemsData(data.position[subFilter1_5.id]);
        } else if (otherFiltersdata[1].display) {
          setitemsData(data.position[subSequence.id]);
        } else {
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
        if (sub3Filter) {
          setitemsData(data.reaction[sub3Filter.id]);
        } else {
          setitemsData(data.reaction[sub2Filter.id]);
        }
        break;
      case 'Stack':
        if (otherFiltersdata[6].display) {
          setStackList(data.stack[reaction.id]);
        } else {
          setStackList(data.stack[position.id]);
        }
        break;

      default:
        setitemsData([]);
        break;
    }
    connectsocket();
  };
  const setValues = async value => {
    setselectpanel(false);
    console.log(key);
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
        setgamefilters(false);
        break;
      case 'Sequence':
        otherFiltersdata[0].value = value.value;
        if (data.subSequence[value.id]) {
          otherFiltersdata[1].display = true;
          otherFiltersdata[3].display = false;
        } else {
          otherFiltersdata[1].display = false;
          otherFiltersdata[3].display = true;
        }
        setotherfiltersdata(otherFiltersdata);
        setSequence(value);
        break;
      case 'Subsequence':
        otherFiltersdata[1].value = value.value;
        if (data.subFilter1_5[value.id]) {
          otherFiltersdata[2].display = true;
          otherFiltersdata[3].display = false;
        } else {
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
        if (data.sub2Filter[value.id]) {
          otherFiltersdata[4].display = true;
          otherFiltersdata[6].display = false;
          // otherFiltersdata[7].display = false;
        } else if (data.reaction[value.id]) {
          otherFiltersdata[6].display = true;
          otherFiltersdata[4].display = false;
          // otherFiltersdata[7].display = false;
        } else {
          // otherFiltersdata[7].display = true;
          setStackList(data.stack[value.id]);
          otherFiltersdata[6].display = false;
          otherFiltersdata[4].display = false;
        }
        setotherfiltersdata(otherFiltersdata);
        setPosition(value);
        break;
      case 'Sub 2 Filter':
        otherFiltersdata[4].value = value.value;
        if (data.sub3Filter[value.id]) {
          otherFiltersdata[5].display = true;
          otherFiltersdata[6].display = false;
        } else {
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
        // otherFiltersdata[7].display = true;
        setotherfiltersdata(otherFiltersdata);
        setreaction(value);
        setStackList(data.stack[value.id]);
        break;
      case 'Stack':
        // otherFiltersdata[7].value = value.value;
        setotherfiltersdata(otherFiltersdata);
        setstack(value);
        break;
      default:
        break;
    }
  };
  const renderMenus = ({item, index}) => (
    <ListItem
      bottomDivider
      style={item.display ? styles.listitem : styles.hidcontent}
      onPress={() => {
        setobjects(item.name);
      }}>
      <ListItem.Content>
        <ListItem.Title>
          <Text style={styles.textlightcolor}>{item.name}</Text>
        </ListItem.Title>
        {item.value && (
          <ListItem.Subtitle style={styles.selecteditme}>
            {item.value}
          </ListItem.Subtitle>
        )}
      </ListItem.Content>
      <ListItem.Chevron
        name="help-circle-outline"
        onPress={() => setinfo(true)}
      />
    </ListItem>
  );
  const renderContent = ({item, key}) => (
    <ListItem
      bottomDivider
      style={styles.listitem}
      onPress={() => {
        setValues(item);
      }}>
      <ListItem.Content>
        <ListItem.Title>
          <Text>{item.value}</Text>
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Fiters Start */}
      <View style={styles.leftpanel}>
        <ListItem
          bottomDivider
          style={styles.listitem}
          onPress={() => {
            setgamefilters(!gamefilters);
          }}>
          <ListItem.Content>
            <ListItem.Title>
              <Text style={styles.textlightcolor}>Game Filter</Text>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron
            name={gamefilters ? 'chevron-down' : 'chevron-up'}
            color={colors.lightwhite}
          />
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
      {selectpanel && (
        <View style={styles.overloadpanel}>
          <View style={styles.leftpanels}>
            <ListItem
              bottomDivider
              onPress={() => setselectpanel(false)}
              style={styles.listitem}>
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
          <View style={styles.rightpanel}></View>
        </View>
      )}
      {info && (
        <View style={styles.overloadpanel_info}>
          <View style={styles.rightpanel}>
            <Text
              style={{color: 'white', marginBottom: 15}}
              onPress={() => setinfo(false)}>
              <Icon name="close"></Icon>
            </Text>
            <ScrollView>
              <Text style={styles.headertext}>Guide to preflop table</Text>
              <Text style={styles.subtitletext}>.Stake</Text>
              <Text style={styles.para}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </Text>
              <Text style={styles.para}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </Text>
            </ScrollView>
          </View>
        </View>
      )}
      {/* Fiters End */}
      <ScrollView style={{flexDirection: 'row'}} horizontal>
        {/* Table starts */}
        <View>
          <View style={styles.tableheader}>
            <View style={styles.boxstyle}></View>
            <Text style={styles.tablehedertext}>Open Raise</Text>
            <View
              style={[
                styles.boxstyle,
                {backgroundColor: '#C3F7ED', marginLeft: 30},
              ]}></View>
            <Text style={styles.tablehedertext}>Limp</Text>
          </View>
          <ScrollView style={styles.tableview} scrollEnabled={true}>
            {TableKeys.map(item => {
              return (
                <View style={styles.flexrowbe}>
                  {item.map(i => {
                    var indexs = TableK.indexOf(i.name);
                    if (indexs >= 0) {
                      return (
                        <View
                          style={[
                            styles.boxbutton,
                            {
                              backgroundColor:
                                Tabledata[indexs] && Tabledata[indexs].colors
                                  ? Tabledata[indexs].colors[0].name
                                  : colors.gray,
                            },
                          ]}>
                          <Text
                            style={[
                              styles.boxbuttontext,
                              {
                                color: Tabledata[indexs]
                                  ? Tabledata[indexs].fontColor
                                  : colors.white,
                              },
                            ]}>
                            {i.value}
                          </Text>
                        </View>
                      );
                    }
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>
        {/* Table Ends */}
        <View styles={styles.rightsidepanel}>
          <Text style={styles.textlightcolor}>{rightFiltersdata[0].name}</Text>

          <DropDownPicker
            style={{
              height: 40,
              width: 140,
              marginLeft: 15,
              backgroundColor: colors.black,
              borderColor: colors.lightwhite,
            }}
            schema={{
              label: 'value',
              value: 'value',
            }}
            textStyle={{
              color: colors.lightwhite,
            }}
            disabledStyle={{
              backgroundColor: colors.black,
            }}
            open={openStack}
            value={StackValue}
            items={StackList}
            setValue={setStackValue}
            setItems={setStackList}
            setOpen={setOpenStack}
            onChangeValue={value => {
              connectsocket();
              // var keys = Object.keys(data.casino);
              // var index = keys.indexOf(`${value}`);
              // var casino = Object.values(data.casino);
              // if (casino[index]) {
              //   setItemsCasino(casino[index]);
              // }
            }}
          />
          {!openStack && (
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textlightcolor}>
                  {rightFiltersdata[1].name}
                </Text>
                <ListItem.Chevron name="help-circle-outline" />
              </View>
              <DropDownPicker
                style={{
                  height: 40,
                  width: 140,
                  marginLeft: 15,
                  backgroundColor: colors.black,
                  borderColor: colors.lightwhite,
                }}
                schema={{
                  label: 'value',
                  value: 'value',
                }}
                textStyle={{
                  color: colors.lightwhite,
                }}
                disabledStyle={{
                  backgroundColor: colors.black,
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
            </View>
          )}
          {!openStack && (
            <Image
              source={require('../assets/images/Group.png')}
              style={styles.logobottom}></Image>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default GameScreen;
