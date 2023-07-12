import styled from "styled-components";


export const CoffeeCardConteiner = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 0;

  
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  
  flex-wrap: wrap;

  span {
    background: ${({theme}) => theme.colors["brand-purple-light"]};
    color: ${({theme}) => theme.colors["brand-yellow-dark"]};
    font-size: ${({theme}) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700

  }

`;


