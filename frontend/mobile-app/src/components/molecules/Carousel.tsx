import React from "react";
import {
  StyleSheet,
  Easing,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import useInterval from "@use-it/interval";
import { Button } from "../atoms";
const Image1 = require("../../../assets/images/onboarding/Illustration1.png");
const Image2 = require("../../../assets/images/onboarding/Illustration2.png");
const Image3 = require("../../../assets/images/onboarding/Illustration3.png");

const META = {
  slide01: {
    header: "Let's skip the 'I don't know whatever you want'",
    desc: "We make choosing meals for families, easy.",
  },
  slide02: {
    header: "Get your shopping list built for you",
    desc: "We make shopping for groceries easy",
  },
  slide03: {
    header: "Bring family together through food",
    desc: "When it's a combined effort on the meal, everyone enjoys it.",
  },
};

const TabContext = React.createContext({
  currentTab: 0,
});

const Slide01 = () => (
  <View style={[theme.layout.wrapper, styles.card]}>
    <Image source={Image1} />
    <Text style={styles.header}>{META.slide01.header}</Text>
    <Text style={styles.subHeader}>{META.slide01.desc}</Text>
  </View>
);
const Slide02 = () => (
  <View style={[theme.layout.wrapper, styles.card]}>
    <Image source={Image2} />
    <Text style={styles.header}>{META.slide02.header}</Text>
    <Text style={styles.subHeader}>{META.slide02.desc}</Text>
  </View>
);
const Slide03 = () => (
  <View style={[theme.layout.wrapper, styles.card]}>
    <Image source={Image3} />
    <Text style={styles.header}>{META.slide03.header}</Text>
    <Text style={styles.subHeader}>{META.slide03.desc}</Text>
  </View>
);

interface TabProps {
  navigationState: {
    index: number;
  };
  jumpTo: any;
  navigation: any;
}

const Tabbar = ({ navigationState: { index }, jumpTo }: TabProps) => {
  const moveTo = (tab: any) => () => {
    jumpTo(tab);
  };
  const { height, width } = useWindowDimensions();

  return (
    <View style={[theme.layout.wrapper, styles.tabbar, { bottom: "15%" }]}>
      <View style={styles.dotContainer}>
        <TouchableOpacity
          onPress={moveTo("first")}
          style={[styles.dot, index === 0 && styles.dotActive]}
        />
        <TouchableOpacity
          onPress={moveTo("second")}
          style={[styles.dot, index === 1 && styles.dotActive]}
        />
        <TouchableOpacity
          onPress={moveTo("third")}
          style={[styles.dot, index === 2 && styles.dotActive]}
        />
      </View>
    </View>
  );
};

const scenes = SceneMap({
  first: Slide01,
  second: Slide02,
  third: Slide03,
});

export const IntroCarousel = () => {
  const navigation = useNavigation<any>();
  const [tabs, setTabs] = React.useState({
    index: 0,
    routes: [{ key: "first" }, { key: "second" }, { key: "third" }],
  });

  const [paused, setPaused] = React.useState(false);
  console.log("PAUSED", paused);
  useInterval(
    () => {
      if (tabs.index > 2) {
        setTabs({ ...tabs, index: 0 });
      } else {
        setTabs({ ...tabs, index: tabs.index + 1 });
      }
    },
    paused ? null : 3000
  );

  const onChange = (index: number) => {
    setPaused(true);
    setTabs({ ...tabs, index });
  };

  const handlePress = () => {
    setPaused(true);
    navigation.navigate("LoginScreen");
  };

  return (
    <TabContext.Provider value={{ currentTab: tabs.index }}>
      <View style={styles.container}>
        <TabView
          navigationState={tabs}
          renderScene={scenes}
          onIndexChange={onChange}
          tabBarPosition="bottom"
          sceneContainerStyle={{
            justifyContent: "center",
          }}
          renderTabBar={(props) => (
            <Tabbar {...props} navigation={navigation} />
          )}
        />
      </View>
      <View>
        <Button
          variant="primary"
          onPress={handlePress}
          disabled={false}
          text="Continue"
        />
      </View>
    </TabContext.Provider>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    top: 16,
    left: theme.layout.wrapper.paddingLeft - 8,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 24,
  },
  root: {
    flex: 1,
    justifyContent: "center",
  },
  tabs: {
    flex: 0.6,
  },
  card: {
    justifyContent: "center",
    paddingLeft: 32,
    paddingRight: 32,
    // paddingBottom: 50
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabbar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dotContainer: {
    flexDirection: "row",
  },
  dotActive: {
    backgroundColor: "#000",
    borderColor: theme.colors.grayScale.gray400,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.grayScale.gray400,
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 6,
    marginRight: 6,
  },
  header: {
    ...theme.fonts.h3,
    color: theme.colors.grayScale.gray100,
    fontSize: 25,
    lineHeight: 30,
    alignSelf: "center",
    textAlign: "center",
    marginVertical: 50,
  },
  subHeader: {
    ...theme.fonts.h3,
    color: theme.colors.grayScale.gray300,
    marginTop: -16,
    opacity: 0.8,
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
    textAlign: "center",
  },
});
