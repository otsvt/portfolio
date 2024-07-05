import React, { FC } from "react";

export const DamageIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.9496 9.60241L20.9375 9.47195L21.1944 17.29L18.4546 17.1874L17.7857 0L25.7925 0.301546L25.9496 9.60241Z"
        fill="currentColor"
      />
      <path d="M35.378 10.3764L35.1746 2.64175L27.0722 2.29387L27.3292 9.54236L35.378 10.3764Z" fill="currentColor" />
      <path
        d="M38.4277 12.399L22.4547 10.9026L22.5437 19.2917L34.0917 21.5002L27.0889 27.5019L30.5628 22.0762L21.3486 20.4459L21.0771 19.2875L0 18.3208L5.34873 39.7975L29.409 40L40 23.3166L38.4277 12.399Z"
        fill="currentColor"
      />
      <path
        d="M16.9604 17.0975L16.4146 0.903141L8.94419 0.730626L9.52836 16.7175L16.9604 17.0975Z"
        fill="currentColor"
      />
      <path
        d="M7.57099 2.44584L7.87212 16.8858L0.440073 16.5058L0.0998512 2.27333L7.57099 2.44584Z"
        fill="currentColor"
      />
    </svg>
  );
};
