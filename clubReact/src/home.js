import React from "react";
import neptune from "./images/activitiespage.bmp";
function Home(props) {
	let user = props.user;
	let role = props.role;
  let article_1 = (
    <div>
      <h1>Hey There! Welcome to the GREEN-HANDS GARDEN CLUB!</h1>
      <p>
        A global platform for people having interest in gardening! Invite you
        friends to join by sharing the link... Do drop your comments and
        sussestions after the meet-ups/activities. Thankyou for visitng.
        
      </p>
    </div>
  );

  let main_1 = (
    <div>
      <article>
        <h2>GARDEN</h2>
        <p>
          Every aspect of our life involves language. The language also plays an
          important role in the development of a person personality, because
          communication is the one which drives our lives and makes ourselves
          better. Basically, language distinguishes humans from other animal
          species.
        </p>
      </article>
      <article>
        <h3>WHY?</h3>
        <p>
          In addition to being a source of fresh, healthy produce, gardening can
          ease stress, keep you limber, and even improve your mood. Here are
          just a few of the ways gardening can benefit your physical and mental
          health, and how you can start harvesting those benefits for you and
          your family.
        </p>
      </article>
      <article>
        <h2>NEWBIE'S HANDOUT</h2>
        <p>
          once again,We would like to welcome you to our club. We are pretty
          sure you would enjoy being a part of us.
        </p>
        <h3>Our Motto</h3>
        <p>
          <small>
            <b>CELEBRATE NATURE!</b>
          </small>
        </p>
        <h3>Purpose</h3>
        <p>
          The purpose of this club is to share our interest,experience and
          knowledge in gardeinging. This club would help improve your skills in
          gardening.
        </p>
        <h3>Services</h3>
        <p>
          1.educational sessions about gardening tips and tricks 2.virtual
          classes 3.sapling and seed supply and many more 4.Zoom catchups
          5.Activities{" "}
        </p>
        <h3>Expectations</h3>
        <p>
          All green-hand members are expected to actively participate in the
          sessions and post your updates on our page
        </p>
      </article>
    </div>
  );

  return (
    <div className="margin-top-150">
	<div><p>User: {user}, role: {role}</p></div>
    <article className="ctr">{article_1}</article>
    
	<img src={neptune}  />;
    <main>{main_1}</main>
    
    <footer>&copy; 2020 GREEN-HANDS-CLUB</footer>

    </div>
  );
}
export default Home;
