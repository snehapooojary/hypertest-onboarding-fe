import { Divider } from 'primereact/divider';

const Footer = () => {
    return (
      <div className="py-16 mx-auto px-8 lg:py-20">
        <div className="p-8 rounded shadow-xl sm:p-16" style={{ backgroundColor: "#262C66FF" }}>
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                
                <br className="hidden md:block" />
                Leveraging the power of{' '}
                <span className="inline-block text-deep-purple-accent-400">
                Artificial Intelligence
                </span>
              </h2>
            </div>
            <Divider layout="vertical" />
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-white">
              Utilizing AI-driven analysis of requirements, this process detects vague, unclear, or contradictory statements, significantly improving the clarity, coverage, and efficiency of testing. By generating comprehensive test scenarios, it enhances the accuracy and effectiveness of the testing process, focusing on edge cases and high-risk areas to ensure higher quality software.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex text-white items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Footer;