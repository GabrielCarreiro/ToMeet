import React,{useEffect, useState} from 'react';
import {Container, ImageFoto, Card, CardText, NoMeet} from './styles'
import {useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';

const Meet = () =>{
    const useFocused = useIsFocused();
    const [pessoas, setPessoas] = useState([{}])

   async function loadPeople () {
        setPessoas(JSON.parse(await AsyncStorage.getItem('@Meet:people')))
    }

    useEffect(() =>{
        loadPeople();
    },[])

    useEffect(() =>{
        loadPeople();
    }, [useFocused || false]);

    function lista (){
        return pessoas.map(x =>{
            return(
                <Card>
                    <ImageFoto source={{uri:x.foto}}/>
                    <CardText>{x.cell}</CardText>
                </Card>
            )
        })
    }
    return (
        <Container>     
            {pessoas ? lista(): <NoMeet> Você ainda não deu meet em ninguém </NoMeet>}
        </Container>
    )
}

export default Meet;

