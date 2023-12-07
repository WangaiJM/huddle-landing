import Hero from "./../../assets/illustration-mockups.svg";

import "./main.css";

export const Main = () => {
  return (
    <main className="main">
      <div className="main__left">
        <img src={Hero} alt="Illustration Mockup" className="hero__img" />
      </div>
      <div className="main__right">
        <h2 className="hero__title">Build The Community Your Fans Will Love</h2>
        <p className="hero__description">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <button className="btn hero__btn">Register</button>
      </div>
    </main>
  );
};
