import styled from 'styled-components';

export const ActivitiesContainer = styled.div`
  min-height: 0;
  flex: 1;
  overflow: auto;
  max-height: calc(666px - 120px);
  display: flex;
  flex-direction: column;
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ArchiveAllCalls = styled.div`
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 16px 0 16px 16px;
  &:hover {
    background-color: #afe9b770;
  }
  gap: 16px;
  font-weight: bold;
`;

export const DashedContainer = styled.div`
  border-bottom: 1px dashed #bdbdbc;
  text-align: center;
  height: 8px;
  margin-bottom: 10px;
  color: #bdbdbc;
  margin: 16px 0;
`;
export const DashedText = styled.span`
  padding: 0 12px;
  font-weight: bold;
  background: #fcfcfb;
  letter-spacing: 1px;
`;
