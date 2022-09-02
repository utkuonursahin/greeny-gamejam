import SignupForm from "../../components/SignupForm/SignupForm";
import Contact from "../../components/Contact/Contact";
import Location from "../../components/Location/Location";

const Signup = () => {
  return (
    <main className="signup">
      <SignupForm/>
      <Contact/>
      <Location/>
    </main>
  );
};

export default Signup;
