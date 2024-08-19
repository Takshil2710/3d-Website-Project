import { motion } from "framer-motion";
import { styles } from "../styles";
import { BigStarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import seoImage from "../assets/seo.png";  

const SEO = () => {
  return (
    <div>
      <br></br>
      <h2 className={`${styles.heroHeadText} text-white text-center`}>Search Engine Optimization</h2>
      <div className="relative flex-1 mt-10  rounded-[20px] p-5">
        <BigStarsCanvas />
        <div className="relative z-10">
          <p className="text-white font-medium text-[30px] mt-5 text-justify">What We Do.</p>
          <p className="text-gray text-[16px] mt-2 text-justify">
            SEO is known as Search Engine Optimization. In simple words when someone search your category related items on search engine your business appears on result. To make it to the top we follow some criteria that fulfil your website to appear on top results. Our aim is to get your business on top results by providing our Dynamic SEO services.
          </p>
          <p className="text-gray text-[16px] mt-2 text-justify">
            We make your website SEO friendly by tweaking source code. We also make sure it gets faster page load time. Because it is essential in SEO market to be Quickest.
          </p>
          <p className="text-grey text-[16px] mt-5 text-justify">
            Our tailor made services ensure that you get best results for your requirements. We work on your budget first so that you don't stretch out after sometime. We can go linear way or all in as per your request.
          </p>
          <br></br>
          <p className="text-grey text-[16px] mt-5 text-justify">We apply some steps to get your business a better rank on Search Engines :</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <p className="text-justify text-[14px]">Add Meta Tags, robots.txt, keywords, indexing so that Google can understand.</p>
            </li>
            <li>
              <p className="text-justify text-[14px]">Add SSL certificate for your website.</p>
            </li>
            <li>
              <p className="text-justify text-[14px]">Add Sitemaps.</p>
            </li>
            <li>
              <p className="text-justify text-[14px]">Add hundreds of backlinks.</p>
            </li>
            <li>
              <p className="text-justify text-[14px]">Write blogs about your Products/Services.</p>
            </li>
          </ul>
          <p className="text-white text-[16px] mt-5 text-justify">
            We are constantly learning new Algorythms updated by Google. This helps us ensure that your keywords get best page rank. We make your website more visible, thus it gets more organic traffic. We have developed unique process that allow us to build your brand image across search engines.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img src={seoImage} alt="SEO illustration" />  
      </div>
      <div className="relative flex-1 mt-10  rounded-[20px] p-5">
        <BigStarsCanvas />
        <div className="relative z-10">
          <p className="text-white font-medium text-[30px] mt-5 text-justify">The Process we use are as follows :</p>
          <br></br>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <p className="text-justify text-[14px]">Optimize your existing Website.</p>
            </li>
            <li>
              <p className="text-justify text-[14px]">Generate reports for visitors.</p>
            </li>
            <li>
              <p className="text-justify text-[14px]">Get best page rank for your Keywords.</p>
            </li>
            <li>
              <p className="text-justify text-[14px]">Target specific market.</p>
            </li>
            <li>
              <p className="text-justify text-[14px]">Market your niche and get best results.</p>
            </li>
            <li>
                <p className="text-justify text-[14px]">Analysis based on target audience.</p>
            </li>
            <li>
                <p className="text-justify text-[14px]">Attractive Design = More Visitors.  </p>
            </li>
            <li>
                <p className="text-justify text-[14px]">Stay connected via RSS Feeds.</p>
            </li>
            <li>
                <p className="text-justify text-[14px]">Blog which teaches something.</p>
            </li>
            <li>
                <p className="text-justify text-[14px]">Professional Images for better experience.</p>
            </li>
            <li>
                <p className="text-justify text-[14px]">Add Alt tags in every media.</p>
            </li>
            <li>
                <p className="text-justify text-[14px]">Best content for your website.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3 className={`${styles.sectionHeadText} text-white text-center`}>Digital Marketing</h3>
      </div>
      <div className="relative z-10 h-[300px]">
        <BigStarsCanvas />
        <p className="text-white text-[16px] mt-5 text-justify">Digital Marketing is new age tool that helps you to reach more audience in your marketing. Now you can easily track your audience and deliver best content. It helps you build a brand that not only has more reach but adds more value to your company. It is very simple to identify your contact sphere and geography based on services you provide. You can narrow down to certain kms or broad it to states even countries. You can control it how & where the content should be delivered.</p>
        <p className="text-white text-[16px] mt-5 text-justify">We have Team of Profesionals who understand your brand and create content that pleases your audience and get more attention to your brand. Which eventually converts into business.</p>
        <br></br>
        <p className="text-white text-[16px] mt-5 text-justify">Search Engine Optimization and Digital Marketing both plays an important role in your business growth. This new age tools opens new doors for your customer reach and adds more value to your brand. We have combined both and made packages to suit your requirements.</p>
      </div>
    </div>
  );
};

export default SectionWrapper(SEO, "");
