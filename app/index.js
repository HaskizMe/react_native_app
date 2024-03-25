import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const getFullName = (firstName, secondName, lastName) => {
    return firstName + ' ' + secondName + ' ' + lastName;
};

const NumberCounter = () => {
    const [num, setNum] = useState(0);
    return(
        <View>
            <Text>{num}</Text>
            <Button
            onPress={() => {
                setNum(num + 1);
            }}
            title='Increment Counter'
            />
        </View>
    )
}

const PizzaTranslator = () => {
    const [text, setText] = useState('');
    return(
        <View>
            <TextInput
            placeholder='Please type here'
            onChangeText={newText => setText(newText)}
            defaultValue={text}/>
            <Text style={{padding: 10, fontSize: 42}}>

                {text
                    .split(' ')
                    .map(word => word && '🍕')
                    .join(' ')}
            </Text>
        </View>
    )
}

const Cat = props => {
    const [isHungry, setIsHungry] = useState(true);
    return(
        <View>
            <Text>I am a cat {props.name} and I am {isHungry ? "Hungry" : "Full"}</Text>
            <Button
            onPress = {() => {
                setIsHungry(!isHungry);
            }}
            title={isHungry ? "Pour me some milk please!" : "I'm all full"}
            />

        </View>
    );
}

const CatHome= () => {
    return(
        <View>
            <Text>cat</Text>
            <Cat name= "Maru" />
            <Cat name="Billy"/>
            <Cat name="Timothy"/>
            <NumberCounter />
        </View>
    );
}

const Home = () => {
    return(
        <View style={{backgroundColor: "red", flex: 1}}>
            <Text>Home</Text>
            <Text>Hello There buddy {getFullName("Bailey", "Dwane", "Haskell")}</Text>
        </View>
    )
}

export default PizzaTranslator;
