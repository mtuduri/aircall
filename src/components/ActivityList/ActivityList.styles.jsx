import styled from 'styled-components';

export const ListContainer = styled.div`
  min-height: 0;
  flex: 1;
  overflow: auto;
  max-height: calc(666px - 120px);
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const ArchiveAllCalls = styled.div`
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
