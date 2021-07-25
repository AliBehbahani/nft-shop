import styled from "styled-components";
import { List } from "native-base";
import { TouchableOpacity } from "react-native";
export const HomeView = styled.View`
  height: 30%;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  text-align: center;
  color: white;
  font-size: 40px;
`;
export const TextStyled = styled.Text`
  color: white;
  font-size: 20px;
`;
export const BGImage = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`;
export const ListStyled = styled(List.Item)`
  border: 0;
  height: 20%;
  align-items: center;
  justify-content: center;
`;
export const ViewGalleryDetail = styled.View`
  height: 30%;
  align-items: center;
  justify-content: center;
`;
export const ViewNftDetail = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;
export const Total = styled.Text`
  margin-left: 20px;
`;
