import React from "react";

const TermsAndConditionsPage = () => {
  const pageData = [
    {
      subHeading: "USE OF CONTENT",
      content: [
        "All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under licence, by the business and / or its associate entities who feature on this Website. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited. You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the company's or entity’s written permission.",
      ],
    },

    {
      subHeading: "USE OF CONTENT",
      content: [
        "All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under licence, by the business and / or its associate entities who feature on this Website. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited. You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the company's or entity’s written permission.",
      ],
    },
  ];
  return (
    <div>
      <div className="pb-16 pt-10">
        <h1 className="font-extrabold text-2xl md:text-3xl text-center">
          Terms & Conditions
        </h1>
        <div className="w-[90%] mx-auto md:w-[80%]">
          <p className="my-10  ">
            The terms "We" / "Us"/ "Our"/”Company” individually and collectively
            refer to RealVedic Enterprises Private Limited and the terms
            "Visitor”/ ”User”/”Customers” refer to the users. This page states
            the Terms and Conditions under which you (Visitor) may visit this
            website (“www.realvedic.com”). Please read this page carefully. If
            you do not accept the Terms and Conditions stated here, we would
            request you to exit this site. The business, any of its business
            divisions and / or its subsidiaries, associate companies or
            subsidiaries to subsidiaries or such other investment companies (in
            India or abroad) reserve their respective rights to revise these
            Terms and Conditions at any time by updating this posting. You
            should visit this page periodically to re-appraise yourself of the
            Terms and Conditions, because they are binding on all users of this
            Website.
          </p>
          <h1 className="font-bold  my-5">USE OF CONTENT</h1>
          <p>
            All logos, brands, marks headings, labels, names, signatures,
            numerals, shapes or any combinations thereof, appearing in this
            site, except as otherwise noted, are properties either owned, or
            used under licence, by the business and / or its associate entities
            who feature on this Website. The use of these properties or any
            other content on this site, except as provided in these terms and
            conditions or in the site content, is strictly prohibited. You may
            not sell or modify the content of this Website or reproduce,
            display, publicly perform, distribute, or otherwise use the
            materials in any way for any public or commercial purpose without
            the company's or entity’s written permission.
          </p>
          <h1 className="font-bold  my-5">Acceptable Website Use</h1>
          <h2 className="font-semibold mb-1">(A)</h2>
          <p>
            Security Rules Visitors are prohibited from violating or attempting
            to violate the security of the Web site, including, without
            limitation,
          </p>
          <p className="mb-3">
            <strong className="font-semibold ">(1)</strong> accessing data not
            intended for such user or logging into a server or account which the
            user is not authorised to access,
          </p>

          <p className="mb-3">
            <strong className="font-semibold ">(1)</strong> accessing data not
            intended for such user or logging into a server or account which the
            user is not authorised to access,
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
