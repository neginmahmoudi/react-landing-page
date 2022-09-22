/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import heroAnimation from './images/hero-animation.mp4';
import HeroBear from './images/hero-bear.svg';
import { ReactComponent as Logo } from './images/logo.svg';

const headerStyles = css`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  text-decoration: none;
  background-color: #fff;
  color: #6e6e6e;
  align-items: center;
`;
const logoNavBar = css`
  margin-left: 90px;
  margin-top: 8px;
`;
const headerNavBar = css`
  margin-left: 280px;
  margin-top: 5px;
  a {
    color: #6e6e6e;
    margin-left: 40px;
    line-height: 10px;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.6px;
  }
  a:hover {
    color: #83b84d;
  }
`;
const btnNavBar = css`
  background-color: #83b84d;
  border: 1px solid #83b84d;
  color: #fff;
  font-size: 19px;
  margin-right: 90px;
  border-radius: 30px;

  padding: 7px 30px;
  text-align: center;
  font-weight: 500;
`;
const sectionContainer = css`
  display: flex;
  flex-direction: row;

  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;
const heroPartOne = css`
  margin-top: 200px;
  width: 450px;
  height: 400px;
`;
const heroPartTwo = css`
  margin-top: 200px;
  width: 550px;
  height: 400px;
  align-self: flex-end;
`;
const sectionBear = css`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-left: 5px;
    color: #555;
    margin-top: 20px;

    line-height: 38px;
  }
  p {
    color: #6e6e6e;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin-left: 5px;
    margin-top: 10px;
  }
`;
const sectionBtn = css`
  margin-top: 15px;
  margin-left: 5px;

  a {
    color: #6e6e6e;
    background-color: #83b84d;
    border: 1px solid #83b84d;
    color: #fff;
    font-size: 19px;
    margin-right: 120px;
    border-radius: 30px;

    padding: 15px 40px;
    text-align: center;
    font-weight: 500;

    line-height: 10px;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.6px;
  }
`;
const bearVideo = css`
  width: 500px;
  height: 600px;
  margin-bottom: 100px;
  div {
  }
`;
function App() {
  return (
    <div>
      <header css={headerStyles}>
        <div css={logoNavBar}>
          <Logo />
        </div>
        <nav css={headerNavBar}>
          <a href="abc">Plans</a>
          <a href="abc">What is a VPN</a>
          <a href="abc">Apps</a>
          <a href="abc">Help</a>
          <a href="abc">My Account</a>
        </nav>
        <a href="abc" css={btnNavBar}>
          Get TunnelBear
        </a>
      </header>
      <section css={sectionContainer}>
        <div css={heroPartOne}>
          <div css={sectionBear}>
            <h1>A more secure way to browse the web</h1>
            <p>
              TunnelBear encrypts your internet connection to keep your online
              activity private on any network.
            </p>
            <div css={sectionBtn}>
              <a href="abcg">Get TunnelBear now</a>
            </div>
          </div>
        </div>
        <div css={heroPartTwo}>
          <video css={bearVideo} autoPlay="autoplay" muted="muted">
            <track
              src="myvideo_en.vtt"
              kind="captions"
              srcLang="en"
              label="English"
            />
            <source src={heroAnimation} type="video/mp4" />
            <img src={HeroBear} alt="hero bear" />
          </video>
        </div>
      </section>
    </div>
  );
}

export default App;
