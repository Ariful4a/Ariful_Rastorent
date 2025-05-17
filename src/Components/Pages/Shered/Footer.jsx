import { useEffect, useState } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentTime(`${date}, ${time}`);
    };

    updateTime(); // প্রথমে একবার কল
    const intervalId = setInterval(updateTime, 1000); // প্রতি সেকেন্ডে আপডেট

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <section>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          {/* Logo */}
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="..."></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <p>{currentTime}</p>
        </aside>

        {/* Social Media */}
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            {/* Facebook, Twitter, YouTube icons */}
            {/* SVG Icons এখানেই রাখা হয়েছে */}
          </div>
        </nav>
      </footer>

      {/* Copyright */}
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            ACME Industries Ltd
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default Footer;
