import React from "react";

  export default function Intro() {
    return (
      <section className="about">
        <div className="me">
          <img src="/img/IMG_6671.PNG" alt="me smiling with sunlight on my face casting a glow with beige background" />
        </div> 
        <div>
          <h1>Hey, I&apos;m Leo!</h1>
          <p>
            I&apos;m a 3rd year student from Canada studying Informatics, and learning computer-related topics and UI/UX at the University of Washington. I love the interactions between technology and people, and strive to create new applications that positively impacts us.
          </p>
          <p>
            Currently, I am focusing on frontend development and joined clubs that enhances my development skills, partnering with peers to create projects that solve problems around campus, and (re)design tools that I would use.
          </p>
          <p>
            Outside of classes, I like to play basketball, toss a frisbee, hit the gym, drum, doodle, vibe to music, and eat delicious food.
          </p>
        </div>
      </section>
    );
  }