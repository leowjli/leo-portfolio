import React from "react";

  export function Takeaway(props) {
    return(
      <div className="takeaway">
        <h1>{props.num}</h1>
        <p>{props.takeaway}</p>
      </div>
    );
  }

  export default function SSResearch() {
    return (
      <article>
        <section className="research">
          <h2 style={{marginBottom: "30px"}}>Research</h2>
          <div className="overview">
            <h1>3 out of the 4 of my team members are international students.</h1>
            <p>
              After determining our community, we used research methods such as conducting stakeholder interviews and surveys to the international community. Although most of my team were international students who provided good insight into our solution, we wanted to ensure we obtain the full experience from all international students.
            </p>
          </div>
        </section>
        <section className="survey">
          <h3>Surveys</h3>
          <h1>Learning about the user&apos;s experiences.</h1>
          <p style={{marginBottom: "40px"}}>
              We surveyed around 35 international students. From this survey, we wanted to gain some understanding of what type of fluency in formal English students have, and the contrast between fluency in formal and informal English. We also wanted to identify the learning trends that come with trying to understand slang. The survey had mostly mulitselect questions and numeric scale questions ranging from 1 to 5, but also included free response questions to collect personal experiences.
            </p>
            <p><strong>Main questions from the survey include:</strong></p>
            <ul style={{marginBottom: "40px"}}>
              <li>How fluent do you think you are in English?</li>
              <li>How difficult is having enjoyable conversation with other people in English to you?</li>
              <li>What makes it difficult for you to understand or better communicate with native speaker?</li>
              <li>How familiar are you with conversational slangs?</li>
              <li>When you hear English slang you don&apos;t know, how do you usually feel?</li>
              <li>What features helps you learn a language better when you approach a language learning platform?</li>
            </ul>
            <p><strong>Key Takeaways</strong></p>
            <div className="keypoints">
              <Takeaway num={"1"} takeaway={"Many students were not very familiar with the slang used in conversations and would usually ignore the slang or search it on the web to see the meaning."} />
              <Takeaway num={"2"} takeaway={"When encoutered by an unfamiliar slang term, international students often felt left out, awkward, or embarassed and would try and piece the conversation together with what follows the slang."} />
              <Takeaway num={"3"} takeaway={"Many students find it difficult to understand or hard to communicate with English speakers even with prior formal language learning, with 46% of the users finding it difficult because of the lack of vocabulary and 78% of the users due to the use of slang."} />
            </div>
        </section>
        <section className="interview">
          <h3>Interviews</h3>
          <h1>Conversing with the users.</h1>
          <p>
            In our interviews, we got further understand users&apos; perspective when encoutering unfamiliar slang terms in conversations. We also dove deeper in how users learn a language, as well as the platforms and technolgies they use to help them achieve fluency in a langauge. I interviewed 2 international students and my interactions with them made clear of the lack of exsitence of technologies that can help students quickly find out a term they are unfamiliar with, and provide the context to how that term is used. These interviews inspired us to create something that students can easily use, reference, and retain the information they learned. 
          </p>
        </section>
      </article>
    );
  }