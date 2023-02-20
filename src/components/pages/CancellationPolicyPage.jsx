import React from "react";

const CancellationPolicyPage = () => {
  const pageData = [
    {
      subHeading: "Return",
      content: [
        "  Returns are acceptable with replacement of the products or reversal of full amount paid by the customer with 7-10 days of receipt of the product. However, returns are limited to following cases:",

        "In case of damaged or defective products: Please do not worry, if upon delivery of the product, you find that the product is received in damaged condition immediately notify our Customer Care team at +91-8860227160 or info@realvedic.com, we will refund, or send a replacement product, depending on your preference after necessary verification. The contents of your shipment and the original packing must be returned along with damaged or defective products.",

        "In case of different product dispatched: Please do not worry, if upon delivery of the product, you discover that we have dispatched a different product, immediately notify our Customer Care team at +91-8860227160 or info@realvedic.com. We will refund, or send a replacement product, depending on your preference. The contents of your shipment and the original packing must be returned along with the products",

        "However returns are based on situations and circumstances hence we request you to contact our customer support for more information.",
      ],
    },

    {
      subHeading: "Refund",
      content: [
        "We will initiate your refund within 3 working days of our confirmation. However, it may take 7-15 working days to get it credited / reflected in your bank or credit card account statement as this involves inter-bank refund procedures which may take time.",
      ],
    },
  ];
  return (
    <div>
      <div className="pb-16 pt-10">
        <h1 className="font-extrabold text-2xl md:text-3xl text-center">
          Our Return and Refund Policy
        </h1>

        <div>
          {pageData?.map((data, index) => {
            return (
              <div key={index}>
                <h2 className="font-bold my-10 text-center text-xl">
                  {data?.subHeading}
                </h2>

                <div>
                  {data?.content?.map((contentData, contentIndex) => {
                    return (
                      <p
                        key={index}
                        className="text-center w-[90%] md:w-[80%] mx-auto mb-10"
                      >
                        {contentData}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;
