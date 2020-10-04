import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f0f0f5;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
`;

export const ImageFoto = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-right: 30px;
    border: 2px solid #F75050;
`;

export const Card= styled.View`
    margin: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CardText = styled.Text`
    font-size: 18px;
    color: #303030;
    border: 2px solid #F75050;
    width: 150px;
    border-radius: 30px;
    text-align: center;
`;

export const NoMeet = styled.Text`
        font-size: 18px;
        color: #303030;
`;