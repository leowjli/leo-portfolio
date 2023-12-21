import React from "react";
import { Link } from "react-router-dom";

  export function SS_CARD(props) {
    return(
      <div>
        <h3>{props.title}</h3>
        <p>{props.context}</p>
      </div>
    );
  }

  export default function SSDesign() {
    return (
      <article>
        <div className="ss-design">
          <h2 style={{color: "#e7f5fa"}}>Design</h2>
          <h1>How might we make it easy to learn and retain popular slang with context, used in informal conversations for international students?</h1>
        </div>
        <section className="sketches">
          <SS_CARD title={"Potential Solutions"} context={"After our research, we brainstormed as a team to cover the different areas that were addressed such learning, retaining, and using slang in the right context. Thinking outside the box to various products that international students would find easy to use, we had many discussions and eventually decided that an slang-learning application with a quizzing feature would be the most efficient in addressing our problem."} />
          <div className="sketches-img">
            <img src="/img/SS sketches.png" alt="brainstorm sketches for problem" />
            <img src="/img/SS sketches 2.png" alt="brainstorm sketches for problem part 2" />
          </div>
        </section>
        <section className="prototype">
          <SS_CARD title={"Low Fidelity Prototype"} context={"Our prototype was created as we took what we learned in our research and translated that into our design, including our interface, interactions, user flow, and layout structure. We wanted to make sure the design felt engaging and easy to use so we incorporated connection features such as friends and achievements aside from the quiz."} />
          <img src="/img/SS lo-fi.png" alt="low fidelity prototype for splangsphere" />
        </section>
        <section className="ss-hifi">
          <SS_CARD title={"Final Design"} context={"After testing our low fidelity prototype through usability testing and heuristic evaluations, we concreted our idea to connect users to communities and friends, giving contexts through show recommendations, and helping our users learn and engage through quizzes and achievements. We each took a page and iterated by switching each other to a different page to keep our designs consistent."} />
        </section>
        <div className="ss-design">
          <h2 style={{color: "#e7f5fa"}}>Final Product</h2>
          <h1>A streak-based + achievement-based way to learn about the slang we use everyday.</h1>
        </div>
        <div className="product-display">
          <h2 style={{color: "#e7f5fa"}}>Introducing</h2>
          <h1>SlangSphere</h1>
          <img src="/img/SlangSphere Thumbnail.png" alt="SlangSphere Project Thumbnail"/>
          <img src="/img/SS Final Designs.png" alt="SlangSphere final design features"/>
          <button className="hifi-btn"><Link to="https://www.figma.com/proto/zg6wKWPnHLk2YBRpXpeGfU/SlangSphere-Mobile-App?page-id=50%3A1188&type=design&node-id=50-12154&viewport=-154%2C499%2C0.13&t=o0W2aDZCtKqZO4Wl-1&scaling=scale-down&starting-point-node-id=50%3A12154&mode=design" target="_blank">View Prototype</Link></button>
        </div>
      </article>
    );
  }