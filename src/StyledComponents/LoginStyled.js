import styled from "styled-components";

export const LoginStyled = styled.div`


  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #f0f0f0;
  box-sizing: border-box;
  /* box-shadow: 0 3px 15px rgba(0,0,0,.6); */
  /* box-shadow: inset rgba(0, 0, 0, 0.6) 0px 3px 15px; */
  border-radius: 10px;
  @media screen and (max-width: 380px) {
    width: 350px;
  }

h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #000;
  text-align: center;
}

 .user-box {
  position: relative;
}

.user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  outline: none;
  background: transparent;
}
.user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  pointer-events: none;
  transition: .5s;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -20px;
  left: 0;
  /* color: #03e9f4; */
  color: #000;
  font-size: 12px;
}

 form button {
  position: relative;
  display: inline-block;
  border: none;
  padding: 5px 10px;
  color: rgb(0 0 0);
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  background-color: cadetblue;
  letter-spacing: 4px
}

form button:hover {
  /* background: #03e9f4; */
  background: #6e92d3;
  color: #fff;
  border-radius: 5px;
  /* box-shadow: rgb(0, 0, 0) 0px 0px 5px, rgb(0, 0, 0) 0px 0px 25px, rgb(0, 0, 0) 0px 0px 2px, rgb(0, 0, 0) 0px 0px 1px */
              /* 0 0 100px #03e9f4; */

}

button span {
  position: absolute;
  display: block;
}

button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #000);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #000);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #000);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

`;