import React from "react";

function Education() {
  return (
    <section id="education">

      <h1 className="section-title">
        Education
      </h1>

      {/* M.Sc */}
      <div className="education-card">

        <h2>Master of Computer Science (M.Sc)</h2>

        <p>
          K.V.N. Naik College, Nashik
        </p>

        <p>
          Savitribai Phule Pune University
        </p>

        <p>
          2025 - 2027 (Pursuing)
        </p>

      </div>

      {/* B.Sc */}
      <div className="education-card">

        <h2>Bachelor of Computer Science (B.Sc)</h2>

        <p>
          Arts, Commerce and Science College,
          Kalwan Manur
        </p>

        <p>
          Savitribai Phule Pune University
        </p>

        <p>
          Passing Year : 2025
        </p>

        <p>
          CGPA : <strong>8.01</strong>
        </p>

        <p>
          Percentage : <strong>76.09%</strong>
        </p>

      </div>

      {/* HSC */}
      <div className="education-card">

        <h2>Higher Secondary Certificate (HSC)</h2>

        <p>
          R.K.M. College, Kalwan
        </p>

        <p>
          Maharashtra State Board
        </p>

        <p>
          Passing Year : 2022
        </p>

        <p>
          Percentage : <strong>67.17%</strong>
        </p>

      </div>

      {/* SSC */}
      <div className="education-card">

        <h2>Secondary School Certificate (SSC)</h2>

        <p>
          Y.C.V. Nivane Vidyalaya
        </p>

        <p>
          Maharashtra State Board
        </p>

        <p>
          Passing Year : 2020
        </p>

        <p>
          Percentage : <strong>79.80%</strong>
        </p>

      </div>

    </section>
  );
}

export default Education;