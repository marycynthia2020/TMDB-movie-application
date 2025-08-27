import React from "react";

const Footer = () => {
  const socilaLinks = ["Instagram", "LinkedIn", "Github", "WhatsApp"];
  return (
    <section className="w-full  border-gray-300 mt-12">
      <div className="text-[#6B7280] dark:text-gray-300 font-medium text-sm w-full max-w-[1200px] mx-auto p-4 flex flex-col  md:flex-row items-center gap-y-3 justify-between">
        <p>© 2023 Multiplex. All Rights Reserved.</p>
        <ul className="flex gap-8 items-center">
          {socilaLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
