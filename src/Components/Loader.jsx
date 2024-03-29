import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return (
        <LODER id='preloader'>
            <div className='spinner'>
                <span className='ball-1'></span>
                <span className='ball-2'></span>
                <span className='ball-3'></span>
                <span className='ball-4'></span>
                <span className='ball-5'></span>
                <span className='ball-6'></span>
                <span className='ball-7'></span>
                <span className='ball-8'></span>
            </div>
        </LODER>
    )
}

export default Loader

const LODER = styled.div`
position: absolute;
    height: 100vh;
    display: flex;
    width: 100vw;
    z-index: 1;
    background-color: #00000096;
    #preloader{overflow:hidden;background:#fff;left:0;right:0;top:0;bottom:0;position:fixed;z-index:9999}
.spinner{position:absolute;top:50%;left:50%;z-index:1;height:40px;width:40px;transform:translate(-50%,-50%)}
[class^="ball-"]{position:absolute;display:block;left:30px;width:12px;height:12px;border-radius:6px;transition:all 0.5s;animation:circleRotate 4s both infinite;transform-origin:0 250% 0}
@keyframes circleRotate{0%{transform:rotate(0deg)}100%{transform:rotate(1440deg)}}
.ball-1{z-index:-1;background-color:#ffd700;animation-timing-function:cubic-bezier(0.5,0.3,0.9,0.9)}
.ball-2{z-index:-2;background-color:#03A9F4;animation-timing-function:cubic-bezier(0.5,0.6,0.9,0.9)}
.ball-3{z-index:-3;background-color:#C8102E;animation-timing-function:cubic-bezier(0.5,0.9,0.9,0.9)}
.ball-4{z-index:-4;background-color:#009688;animation-timing-function:cubic-bezier(0.5,1.2,0.9,0.9)}
.ball-5{z-index:-5;background-color:#ff7f50;animation-timing-function:cubic-bezier(0.5,1.5,0.9,0.9)}
.ball-6{z-index:-6;background-color:#8BC34A;animation-timing-function:cubic-bezier(0.5,1.8,0.9,0.9)}
.ball-7{z-index:-7;background-color:#CDDC39;animation-timing-function:cubic-bezier(0.5,2.1,0.9,0.9)}
.ball-8{z-index:-8;background-color:#C8102E;animation-timing-function:cubic-bezier(0.5,2.4,0.9,0.9)}

`;