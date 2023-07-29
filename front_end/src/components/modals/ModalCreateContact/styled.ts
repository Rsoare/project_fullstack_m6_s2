import styled from "styled-components";


export const FormCreateStyled = styled.form`
   display: flex;
   flex-direction: column;
   width: 22rem;
   height: 42rem;
   padding: 1rem;

   h3{
      padding-left: 0.5rem;
   }

   @media (min-width: 800px) {
      width: 28rem;
      height: 46rem;
      gap: 0.5rem;
      justify-content: center;
   }
`;


