import React from "react";
import { Link } from "react-router-dom";
import { SectionCard } from "./EZPDesign";

  export default function Research() {
    return (
      <article>
        <section className="research">
          <h1>Research</h1>
          <div className="overview">
            <p>
              We used research methods such as doing stakeholder interviews, and surveying the community. We did interviews with a student that commutes to campus, and also we interviewed UW staff on how they think about parking at the UW. Then we found that the student users&apos; average time spent looking for parking is between 7  to 10 minutes. Based on the response, the user does not have a pleasant experience dealing withparking on campus, they expressed emotions like frustration and confusion. As for the UW staff, their response was that the parking has not only students affected by parking. Staff is also showing great concern. When we did the survey, we found that of the total number of 28 students, 64% spent between 5 to 15 minutes looking for parking. While 16% spend 3 to 5 minutes and 12% spend 30 or more minutes looking for parking. The link for the survey is: <Link to="https://docs.google.com/spreadsheets/d/1icmJJWb6aZvvzkhdZMXfJqROeKpqaraqQRhvq1pn-Ak/edit?usp=sharing">Parking Survey.</Link>
            </p>
          </div>
        </section>
        <section className="moodboard">
          <SectionCard title={"Moodboard"} context={"The main stakeholders was UW students and staff and we wanted to bring out the joy in accessible parking, so we bounced our ideas on the moodboard, playing with different themes."} />
          <img src="/img/ezpark/ezpark Moodboard.jpg" alt="moodboard of cars, maps, UW and parking" />
        </section>
        <section className="userp">
          <SectionCard title={"User Personas"} context={"Our targeted direct stakeholders are UW students and staff who needs to drive to campus daily, and need a smooth transition from parking to working or studying."} />
          <p>
            Our indirect stakeholders would be people like transportation services who don't need to use the app everyday but would be useful to know the traffic around them, and better assist with transportation.
          </p>
          <div className="userp-img">
            <img src="/img/ezpark/User Persona 1.jpg" alt="user persona of a bus driver that drives close to campus" />
            <img src="/img/ezpark/User Persona 2.jpg" alt="user persona of first generation student at UW" />
          </div>
        </section>
      </article>
    );
  }