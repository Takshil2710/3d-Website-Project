import { motion } from "framer-motion";
import { styles } from "../styles";
import { BigStarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const WebDevelopment = () => {
  return (
    <div>
      <br></br>
      <h2 className={`${styles.heroHeadText} text-white text-center`}>Web Development</h2>
      <div className="relative flex-1 mt-10  rounded-[20px] p-5">
        <BigStarsCanvas />
        <div className="relative z-10">
          <p className="text-white font-medium text-[30px] mt-5 text-justify">What We Do.</p>
          <p className="text-gray text-[16px] mt-2 text-justify">
            We create beautiful designs for your website. We personalize each & every project so that you get unique look. We never compromise on quality. We value your time so we finish our projects within given time-frame. Our after sales service is one of the USP of the major aspects of our business.
          </p>
          <p className="text-gray text-[16px] mt-2 text-justify">
            Your online presence is what you need these days. We help you showcase your Business/Organisation the way it is in real world (offline mode). We value your true story behind your organisation and design your website accordingly. We make sure your heritage is intact in our design.
          </p>
          <p className="text-grey text-[16px] mt-5 text-justify">
            We have several types of website development work according to your requirements.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <p className="text-justify">Develop a completely new website.</p>
            </li>
            <li>
              <p className="text-justify">Update/Upgrade your current website.</p>
            </li>
            <li>
              <p className="text-justify">AMC for your website.</p>
            </li>
            <li>
              <p className="text-justify">Search Engine Optimization (SEO) for your website.</p>
            </li>
          </ul>
          <p className="text-white text-[16px] mt-5 text-justify">
            We use latest technologies in our websites. We make sure all the products are equipped with latest versions of the plugins. We work on different platforms which are extensively used in the industry to cater different requirements. Our developers are constantly learning new technologies each and every day. In technology field you have to be updated with new technologies in order to make sure you're not left behind from others.
          </p>
        </div>
      </div>
      <div className="relative flex-1 mt-10  rounded-[20px] p-5">
        <BigStarsCanvas />
        <div className="relative z-10">
          <p className="text-white font-medium text-[30px] mt-5 text-justify">Types of websites.</p>
          <p className="text-gray text-[16px] mt-2 text-justify">
            There are different types of websites which serve your purpose differently. For example if you want to showcase your company/person/organisation you need a Portfolio Website. Similarly if you need to sell products/services online you need an E-commerce Website. If you need to showcase as well as sell your services/products online then you need Personalised Website and last but not the least if you want to manage your sales, purchase, stocks, salary etc you need ERP solution for your Organisation.
          </p>
          <br></br>
          <p className="text-gray text-[16px] mt-2 text-justify">
            We focus on Quality and not Quantity. Each projects take several hours of dedication and hardwork to develop these websites.
          </p>
          <br></br>
          <p className="text-gray text-[16px] mt-2 text-justify">
            Our Websites are unique and user friendly. We pour our heart & souls to make your dream project a reality. Since we are very strict about design policy, you won't find any similar designs throughout our portfolio and thats our main USP. We not only make your designs unique but we make them according to your requirements and color scheme is based on your logo.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className={`${styles.sectionHeadText} text-white text-center`}>Technologies We Use</h3>
      </div>
    </div>
  );
};

export default SectionWrapper(WebDevelopment, "");
