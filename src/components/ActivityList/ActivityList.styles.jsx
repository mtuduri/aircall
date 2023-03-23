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
