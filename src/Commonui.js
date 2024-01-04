import styled from 'styled-components';
import "@fontsource/noto-sans-kr";
import arrowbtnimg from './icon/go.svg';

// 타이틀
export const TitleCommon = styled.h2`
    font-family: 'Noto Sans KR'; 
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
`
// 폼

export const InputUi = (props) => {
    return (
        <div className={props.className && props.className}>
            <div>
                <input type="text" name={props.inputinfo.nm} placeholder={props.children} />
                <label htmlFor="" >
                    {props.inputinfo.labeltext}
                    <i></i>
                </label>
            </div>
            <span>{props.inputinfo.alerttext}</span>
        </div>
    )
}



// 버튼

export const ButtonUi = styled.button`
    width: 250px;
    line-height: 3rem;
    font-size: 1.5rem;
    border: 1px solid #000;
    background-color: white;
`;

export const Hrefbtn = styled.a`
    display: inline-block;
    width: 250px;
    line-height: 3.1rem;
    font-size: 1.5rem;
    border: 1px solid #000;
    text-decoration: none;
    color: black;
`;

export const Abtn = (props) => {
    return (
        <a href={props.href}
            className={props.className && props.className}
            //스타일컴포넌트를 엄마컴포넌트가 아닐때를 대비
            target={props.target && props.target}>
            {props.children}
            <img src={arrowbtnimg} alt="화살" />
        </a>
    )
}



// 목록

// 갤러리


