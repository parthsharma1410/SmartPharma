import './App.css';

function App() {
  return (
    <div className="container">
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="heading">Welcome to EduLearn!</h2>
          <p className="para">
            Now accessing premium courses, <br />
            video lectures and assignments from the best sources <br />
            on the internet is possible on one single platform!<br />
            Access study material for 100+ subjects. <br />
            Sign up now for free!
          </p>
          <button className="btngetstarted">
            <a href="/signup">Get started</a>
          </button>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          <img src={mainpage} />
        </div>
      </div>
    </div>
  );
}

export default App;
