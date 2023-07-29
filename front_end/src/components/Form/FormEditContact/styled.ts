import styled from "styled-components";


export const FormContactStyled = styled.form`
   display: flex;
   flex-direction: column;
   width: 22rem;
   height: 42rem;
   padding: 1rem;

   h2{
      padding-left: 0.8rem;
   }

   @media (min-width: 800px) {
      width: 26rem;
      height: 46rem;
      gap: 1rem;
      justify-content: center;
   }
`;