import styled from 'styled-components';

export const ItemContainer = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 16px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 16px 16px;
  &:hover {
    background-color: #afe9b770;
  }
`;

export const CallInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;
export const Subtitle = styled.span`
  font-size: 0.8rem;
  color: #bcbbbc;
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DateContainer = styled.div`
  display: flex;
`;

export const Date = styled.span`
  color: #bcbbbc;
  font-weight: bold;
  padding: 4px;
  font-size: 0.75rem;
`;
export const DateType = styled.span`
  color: #bcbbbc;
  font-weight: bold;
  border-top: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 0.75rem;
`;

export const CallTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
`;

export const ThreeDots = styled.div`
  width: 10px;
  padding: 2px;
  height: 16px;
  background-image: radial-gradient(circle, #b6b6b6 1px, transparent 1px);
  background-size: 100% 33.33%;
`;

export const Counter = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  color: #fff;
  background-color: #ee481b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 0.75rem;
`;

export const CounterContainer = styled.div`
  display: flex;
  gap: 4px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
