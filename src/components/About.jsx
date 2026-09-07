export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <h2>About</h2>
        <div className="about-text">
          <p>
            I'm Romson, finishing a B.Tech in Artificial Intelligence and
            Machine Learning in Gorakhpur. Most of what I know about building
            software, I've learned by actually building it: four full-stack
            projects covering authentication, payments, and admin tooling,
            each one teaching me something the last one hadn't.
          </p>
          <p>
            Encore, my most recent project, is the one I'd talk about first.
            It takes real payments through Razorpay and had to solve a
            genuine concurrency problem so two people can never book the same
            seat at once, the kind of bug that only shows up when you're
            actually looking for it.
          </p>
          <p>
            My coursework in machine learning runs alongside all of this. I'm
            looking for a first role where I can keep building things that
            work, and keep getting better at the parts that are unglamorous
            but matter, like error handling and the edge case nobody asked about.
          </p>
        </div>
      </div>
    </section>
  );
}
