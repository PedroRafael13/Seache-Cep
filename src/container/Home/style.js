import  styled, {keyframes}  from "styled-components";

export const scale = keyframes`
  from{
    transform:scale(0);
  }
  
  to{
    transform: scale(1);
  }  
`

export const Container = styled.div`
  height : 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background:linear-gradient(#162366, #47057D);

  h1{
    font-size:70px;
    color: #ffff;
    animation: scale 3s; 
  }

  .containerInput{
    background-color:rgba(255, 255, 255, 0.5) ;
    padding : 15px;
    margin : 34px 0;
    display : flex;
    border-radius:8px;
    box-shadow:1px 3px 8px rgba(0, 0, 0, 0.5)
  }

  input{
    background:transparent;
    border: 8px;
    font-size:28px;
    color: #ffff;
    margin-right:8px;
  }

  input::placeholder{
    color: #f1ff1f1f1;
  }

  button{
    background-color:transparent;
    border: 0;
    display: flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    animation: transform 0.5s;

    &:hover{
      transform: scale(1.2);
    }
  }
`
export const Infor = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  background-color:white;
  width:500px;

  h2{
    margin:16px 0;
    font-size:38px;
  }

  span{
    margin-bottom:16px;
    font-weight:bold;
  }

  @media(max-width: 620px){
    h1{
      font-size:60px;
    }

    h2{
      font-size:28px;
    }    
  }
`