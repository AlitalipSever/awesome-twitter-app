import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="bg-white p-8 shadow-md max-w-3xl mx-auto mt-12 rounded-md">
      <h1 className="text-4xl font-bold mb-2">Alitalip SEVER</h1>
      <h2 className="text-xl text-gray-700 mb-4">Full Stack Developer</h2>

      <address className="text-md text-gray-600 italic mb-4">
        Ettenheimer Str. 16
        <br />
        Freiburg im Breisgau, 79108
        <br />
        (1575) 096-1781
        <br />
        <a
          href="mailto:alitalipsever@gmail.com"
          className="text-blue-600 underline"
        >
          alitalipsever@gmail.com
        </a>
      </address>

      <hr className="mb-6" />

      <section>
        <h3 className="text-2xl font-semibold mb-4">EXPERIENCE</h3>
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-2">
            Futurice GmbH, Berlin-Stuttgart — Full Stack Developer
          </h4>
          <p className="text-gray-600 mb-2">
            <strong>JUNE 2022 - PRESENT</strong>
          </p>
          <p>
            As a React Native-Typescript developer, I created iOS and Android
            applications for Red Bull Ice Hockey and Bayern Munich basketball
            teams. I designed real-time data structures and a robust backend
            using GraphQL, AWS, and Contentful. Collaborating with design and
            product teams, I contributed to user-friendly designs and innovative
            ideas. I also developed a business intelligence platform using Azure
            OpenAI services, supporting strategic decision-making and fostering
            innovation.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-2">
            Fraunhofer ISE, Freiburg im Breisgau — Research Assistant
          </h4>
          <p className="text-gray-600 mb-2">
            <strong>MAY 2021 - APRIL 2022</strong>
          </p>
          <p>
            Developing a fully automatic solar tracking and plant management
            system for Solar Tower Power Plants. I implemented the sun tracking
            algorithm on the ESP32 microcontroller with C++. I wrote COAP based
            REST-API endpoints for remote control of reflective mirrors. I wrote
            a cross-platform interface with the Python-Kivy framework, which
            allows the power plant structure to be managed remotely with the
            COAP protocol.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-2">
            Madduck, Istanbul — Full Stack Developer
          </h4>
          <p className="text-gray-600 mb-2">
            <strong>DECEMBER 2020 - APRIL 2022</strong>
          </p>
          <p>
            As an experienced developer, Ive built data platforms and app
            backends for 7.5M+ iOS app users, established reporting
            infrastructure with Node.js, and transformed raw Apple data into
            insightful tables using MySQL. Ive developed a React.js interface
            for data visualization, automated MySQL procedures for Tableau, and
            created a web-based ad optimization tool for GoogleAds and Apple
            SearchAds. I also have experience in backend development with
            Node.js and Java Spring Boot.
          </p>
        </div>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="text-2xl font-semibold mb-4">EDUCATION</h3>
        {/* Structure for education */}
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-2">
            Gebze Technical University, Kocaeli — Electronics Engineering
          </h4>
          <p className="text-gray-600 mb-2">
            <strong>SEPTEMBER 2014 - SEPTEMBER 2020</strong>
          </p>
          <p>
            Flutter IoT app development. FPGA based game. Python and MATLAB
            based DSP applications.
          </p>
        </div>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="text-2xl font-semibold mb-4">SKILLS</h3>
        <ul className="list-disc pl-5">
          <li>JavaScript: Node.js, React.js</li>
          <li>TypeScript: React-Native</li>
          <li>GraphQL, AWS, Azure</li>
          <li>Python: Kivy, Flask</li>
          <li>Docker, Postman, Linux, RabbitMQ</li>
          <li>C/C++ programming: ESP32, ARM</li>
          <li>Data Management: Tableau, MySQL, MongoDB</li>
          <li>Java: Spring Boot</li>
          <li>Marketing: GoogleAds, SearchAds, Adjust</li>
          <li>Agile Jira, Slack</li>
        </ul>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="text-2xl font-semibold mb-4">AWARDS</h3>
        <ul className="list-disc pl-5">
          <li>
            3rd place in Yıldız Technical University&aposs Digital
            Transformation competition
          </li>
          <li>TUBITAK 2242s University Project Competition</li>
          <li>Honorable Mention in SEDASs 2018 Project Idea Competition</li>
        </ul>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="text-2xl font-semibold mb-4">LANGUAGES</h3>
        <ul className="list-disc pl-5">
          <li>English: fluent</li>
          <li>German: basic</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
