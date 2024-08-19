import { motion } from "framer-motion";
import { styles } from "../styles";
import { BigStarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const AppDevelopment = () => {
  return (
    <div>
      <br></br>
      <h2 className={`${styles.heroHeadText} text-white text-center`}>Application Development</h2>
      <div className="relative flex-1 mt-10  rounded-[20px] p-5">
        <BigStarsCanvas />
        <div className="relative z-10">
          <p className="text-white font-medium text-[30px] mt-5 text-justify">What We Do.</p>
          <p className="text-gray text-[16px] mt-2 text-justify">
            Mobile Applications are getting popular for all the businesses. Recent studies shows that people tend to use mobiles more than anything. On an average we use mobile for more than 10+ hours in a day. This is how we can take advantage of the users who buys stuff from online apps.
          </p>
          <p className="text-gray text-[16px] mt-2 text-justify">
            We make easier to manage your businesses through our mobile apps. You can showcase your business or even sell products or services through your mobile app.
          </p>
          <p className="text-grey text-[16px] mt-5 text-justify">
            We have several types of Application development work according to your requirements.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <p className="text-justify">Develop completely new Application.</p>
            </li>
            <li>
              <p className="text-justify">Update/Upgrade your current Application.</p>
            </li>
            <li>
              <p className="text-justify">AMC for your Application.</p>
            </li>
            <li>
              <p className="text-justify">App Stor Optimization (ASO) for your Application.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex-1 mt-10  rounded-[20px] p-5">
        <BigStarsCanvas />
        <div className="relative z-10">
          <p className="text-white font-medium text-[30px] mt-5 text-justify">Process.</p>
          <p className="text-gray text-[16px] mt-2 text-justify">
            We are constantly upgrading ourself with the latest technologies. We make sure all the products are compatible with the latest versions of the OS. All the apps are backward compatible so you don't have to worry about older phones. Use our AMC service to manage your app with us. We constantly monitor your app for any time of malfunction. Our workflow for developing app is very simple yet effective.
          </p>
          <br></br>
          <p className="text-gray text-[16px] mt-2 text-justify">
            The Process we use are as follows :
          </p>
          <br></br>
          <ul className="list-disc pl-5 mt-2">
            <li>
                <p className="text-justify">Conceptualize your app according to the requirements.</p>
            </li>
            <li>
                <p className="text-justify">We will check if it's doable or not.</p>
            </li>
            <li>
                <p className="text-justify">Give clients options for their app design.</p>
            </li>
            <li>
                <p className="text-justify">Development after designing is done.</p>
            </li>
            <li>
                <p className="text-justify">Once it developed, it goes for testing.</p>
            </li>
            <li>
                <p className="text-justify">After our testing team approves, app is deployed.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3 className={`${styles.sectionHeadText} text-white text-center`}>Types of Applications</h3>
      </div>
      <div className="relative flex-1 mt-10  rounded-[20px] p-5">
        <BigStarsCanvas />
        <div className="relative z-10">
            <p className="text-white font-medium text-[30px] mt-5 text-justify">Types of Applications.</p>
            <p className="text-gray text-[16px] mt-2 text-justify">
                There are different types of apps platform which serve your purpose differently. For example if you want app to be fully functional and have good amount of budget then we suggest to use Native App. If you want to have light weight app which serves the purpose of showcasing your business then we suggest to use Web App. If you want something which is more than web app but you have limited time and resources then use Hybrid App.
            </p>
            <br></br>
            <p className="text-gray text-[16px] mt-2 text-justify">
                We develop both Android & iOS apps. You can also choose to combine cross platform app to save on resources and time. Single development for both Android & iOS apps
            </p>
            <p className="text-gray text-[16px] mt-2 text-justify">
                We have several types of App development work according to your requirements.
            </p>
            <ul className="list-disc pl-5 mt-2">
            <li>
                <p className="text-justify">Native Apps</p>
            </li>
            <li>
                <p className="text-justify">Web Apps</p>
            </li>
            <li>
                <p className="text-justify">Hybrid Apps</p>
            </li>
            </ul>
            <p className="text-gray text-[16px] mt-2 text-justify">
                Our Apps are user friendly and easy to manage. Websites needs less updation in general on the other hand apps needs to be updated more frequently. We have comprehensive plan which covers all the updates for your app throughout the year. Below is a guide on how you can choose between different platforms for developing your app.
            </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AppDevelopment, "");
