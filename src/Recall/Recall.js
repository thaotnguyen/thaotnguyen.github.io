import React from "react";

import "./Recall.scss";

const Recall = () => {
  return (
    <div className="container">
      <h1>Recall</h1>
      <h2>
        A video platform that enables researchers to record, upload, analyze,
        and share videos of their user studies.
      </h2>
      <img src="/recall.png" alt="Recall home page" />
      <h2>
        Recall was originally designed from a mostly engineering lens without
        much UX or visual design, so the goal of this project was to completely
        revamp the design of the entire product.
      </h2>
      <h2>
        I interviewed several UXRs and found that users felt that the UI was
        very confusing and cumbersome to use, and many key features were not
        discoverable. In addition, analytics showed that many Recall users were
        actually not UXRs and were engineers, revealing an additional use case
        where engineers used Recall to upload videos of bugs.
      </h2>
      <img src="/recall-old-home.png" alt="Recall old home page" />
      <h2>
        The home page of the original Recall. Images are broken due to this
        being an old version that does not work with GCP anymore.
      </h2>
      <h2>
        Users felt that it was odd that all projects are shown on this page
        because they had no use for them, and it was also difficult to discover
        how to create a new project or what actions users should take upon first
        visiting Recall.
      </h2>
      <img src="/recall-old.png" alt="Recall old session page" />
      <h2>Individual projects in the original Recall.</h2>
      <img src="/recall.png" alt="Recall home page" />
      <h2>
        The brand new Recall, after many iterations of designing and usability
        testing. The new cards were able to display metadata much more clearly
        and concisely, and the new sidebar streamlined navigation and made many
        critical user journeys much more discoverable.
      </h2>
      <img src="/recall-tutorial.png" alt="Recall marketing" />
      <h2>
        The new marketing material for the revamped Recall. I made these
        illustrations in Sketch and worked with a UX writer for the copy.
      </h2>
      <img src="/recall-project.png" alt="Recall marketing" />
      <h2>
        The new project page, making it easier for users to manage their project
        by making uploading more discoverable, as well as surfacing thumbnail
        images.
      </h2>
      <h2>
        This page was also designed to be future-proof, including lots of design
        space for additional metadata such as a description, and a lot of page
        space for project-level metrics which are slated to come in the future.
      </h2>
      <img src="/recall-session.png" alt="Recall marketing" />
      <h2>
        The new design for the individual video page. The layout was changed to
        optimize space for a horizontal video, because analytics showed that
        almost all videos uploaded by UXRs are landscape orientation.
      </h2>
      <h2>
        In addition, thumbnail images and additional session metadata are
        surfaced for ease of use.
      </h2>
    </div>
  );
};

export default Recall;
