import { Link } from "react-router-dom";

const ExplainationPage = () => {
  return (
    <>
      <section className="bg-blue-400 w-screen h-screen py-4">
        <div className="bg-gray-200 opacity-50 text-xl text-center font-bold rounded-lg mx-8 py-2">
          <p className="p-3 underline text-3xl text-green-900">Concepts of Framer Demo:</p>
          <ul className="p-2">
            <li>1. Transition: Defins animation behavior of a component when it goes from one state to another
                <br /><i>ex: duration, delay, ease</i>
            </li>
            <li>2. Initial: Defines the state of the initial component <br />
            <i>ex: opacity: 0 (will hide at the beginning)</i></li>
            <li>3. Animate: Defines the animation <br />
            <i>ex: opacity: 1 (will show at the transition)</i> </li>
            <br />
            <li>Call components to motion are prebuilt. Call motion on any component <br />
            <i>ex: motion.div, motion.img, motion.button, etc.</i></li>
            <br />
            <li>Gesture-based animations: Create animations triggered by user interaction <br />
            <i>ex: drag, hover, scroll, tap</i></li>
            <br />
            <li>Presence: Manage the display and animations as they are added, removed, or re-order the DOM</li>
            <br />
            <li>Orchestration: Sequence and syncronize animations across multiple components</li>
            <br />
            <li>Responsive Animations: create animations based on screen size and device</li>
            <br />
          </ul>
        </div>

        <Link to="/framer" 
        className="text-blue-800 hover:text-blue-600 underline font-medium cursor-pointer">
          <div className="text-center mt-4 text-2xl">Framer Demo</div>
        </Link>
        <div className="text-center text-red-600 font-semibold">(using V6 routing)</div>
      </section>
    </>
  );
};

export default ExplainationPage;
