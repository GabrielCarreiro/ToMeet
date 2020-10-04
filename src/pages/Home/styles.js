import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f0f0f5;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.Text`
    font-size: 18px;
    color: #303030;  
`;

export const DescribeText = styled.Text`
    font-size: 14px;
    color: #303030;
`;

export const ImageFoto = styled.Image`
    width: 260px;
    height: 230px;
    border-radius: 8px;
    border: 2px solid #F75050;
    margin-bottom: 5px;
`;

export const Describe = styled.View`
    background-color: #f0f0f5;
    width: 260px;
    border-radius: 9px;
    padding: 5px;
    border: 2px solid #F75050;
    
`;

export const Meet = styled.View`
    width: 260px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Like = styled.Text`
    padding: 10px;
    height: 63px;
    width: 63px;
    border: 2px solid #F75050;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
    padding-top: 13px;
    
`;

export const ImageLogo = styled.Image`
    width: 250px;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;