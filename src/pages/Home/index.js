import React,{useEffect, useState} from 'react';
import {Text, View} from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'; 
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import {Container,
    ImageFoto,
    Card,
    TitleText,
    DescribeText,
    Describe, 
    Meet, 
    Like,
    ImageLogo} from './styles';


const Home = () =>{
    const [people, setPeople] = useState({});
    const [color, setColor] = useState("#303030");
    const [colorLike, setColorLike] = useState("#303030")
    
    const loadPeople = async () =>{
        try {
            const response = await api.get(``)
            setPeople(response.data.results[0]) 
            setColor("#303030") 
            setColorLike("#303030")
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        loadPeople();
    },[])

    async function meet(){
        let colletion = [];
        let results =  JSON.parse(await AsyncStorage.getItem('@Meet:people'))
        console.log(results)
        let peoples = {
            "foto":people.picture.large,
            "cell":people.cell
        }
        
        colletion.push(peoples)
 
        if(results){
            results.push(peoples);
            await AsyncStorage.setItem('@Meet:people', JSON.stringify(results))
            setColorLike("#db3232")
            setTimeout(() => {
                loadPeople();
            }, 500);
        }else{
            await AsyncStorage.setItem('@Meet:people', JSON.stringify(colletion))
            setColorLike("#db3232")
            setTimeout(() => {
                loadPeople();
            }, 500);
        }
    }

    function reload () {
        setColor("#db3232")
        setTimeout(() => {
            loadPeople();
        }, 300);
    }

    async function limpar(){
         await AsyncStorage.clear()
     }

    console.log(people)
  
    return (
            <Container>
                <ImageLogo source={{uri:"https://i.imgur.com/ezP8wPS.png"}}/>
            <Card> 
                {people ? (
                        <View>
                            <ImageFoto source={{uri:people.picture.large}}/>
                            <Describe>
                                <TitleText> 
                                    {people.name.first} {people.name.last}, {people.dob.age }
                                </TitleText>
                                <DescribeText>{people.gender}</DescribeText>
                                <TitleText>{people.location.city} {people.location.state} - {people.location.country} </TitleText>
                            </Describe>
                            <Meet> 
                                <Like onPress={() => reload()}>  <Ionicons name="md-heart-dislike" size={36} color={color} /> </Like>
                                <Like onPress={() => meet()}> <FontAwesome5 name="heart" size={36} color={colorLike} /> </Like>
                            </Meet>
                        </View>
                ): (
                    loadPeople()
                )}
            </Card>
        </Container>
    )
}
export default Home;
