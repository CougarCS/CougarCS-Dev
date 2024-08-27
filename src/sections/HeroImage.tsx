import { Button } from "@/components/ui/button";
import React from "react";

const HeroImage = () => {
  return (
    <div className="relative min-h-[70vh]">
      <div
        style={{
          background:
            "linear-gradient(180deg, #C80F2E 100%, rgba(200, 15, 46, 0) 19.35%)",
        }}
        className="absolute w-screen min-h-full -z-50"
      >
        {/* TODO: USE DESKTOP SVG FOR THIS PART */}
        <svg
          width="393"
          height="529"
          viewBox="0 0 393 529"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M141.91 173.516H154.617L177.761 195.752H180.03V194.391H213.612V195.752H215.427L239.025 173.516H251.278L256.723 180.777V201.198L248.101 219.35V233.872L244.47 241.133V257.924L227.226 282.883V291.505L212.25 303.304L207.258 310.565H186.383L181.392 303.304L166.416 291.505V282.883L149.171 257.924V241.133L145.541 233.872V219.35L136.919 201.198V180.777L141.91 173.516ZM211.343 259.739V239.772L223.595 231.603L231.764 237.956V245.217L211.343 259.739ZM170.046 231.603L161.878 237.956V245.217L182.299 259.739V239.772L170.046 231.603ZM194.552 291.959L185.476 284.244H208.166L199.09 291.959V297.859H194.552V291.959Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M110.689 123.273H138.232L170.476 154.174H222.874L255.119 123.273H282.661L294.753 140.067V174.999L281.99 202.542V224.038L276.615 234.786V260.314L251.088 297.261V312.04L226.233 331.521L217.5 344.956H175.85L167.117 331.521L142.262 312.04V297.261L116.735 260.314V234.786L111.361 224.038V202.542L98.5973 174.999V140.067L110.689 123.273ZM115.391 132.678L108.002 143.426V173.656L120.766 200.526V222.023L126.14 232.771V257.627L151.667 294.574V307.337L173.835 324.803L181.225 335.552H212.126L219.515 324.803L241.684 307.337V294.574L267.211 257.627V232.771L272.585 222.023V200.526L285.348 173.656V143.426L277.287 132.678H259.15L224.218 165.595H221.531V163.579H171.82V165.595H168.461L134.201 132.678H115.391Z"
            fill="white"
            fill-opacity="0.71"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.6958 53.1882H107.613L156.686 100.217H236.431L285.504 53.1882H327.421L345.824 78.7473V131.91L326.399 173.827V206.543L318.22 222.901V261.751L279.37 317.981V340.473L241.543 370.122L228.252 390.569H164.865L151.575 370.122L113.747 340.473V317.981L74.8971 261.751V222.901L66.7182 206.543V173.827L47.2932 131.91V78.7473L65.6958 53.1882ZM72.8524 67.5013L61.6063 83.8591V129.866L81.0313 170.76V203.476L89.2102 219.834V257.661L128.06 313.891V333.316L161.798 359.898L173.044 376.256H220.073L231.319 359.898L265.057 333.316V313.891L303.907 257.661V219.834L312.086 203.476V170.76L331.511 129.866V83.8591L319.243 67.5013H291.639L238.476 117.597H234.386V114.53H158.731V117.597H153.619L101.479 67.5013H72.8524Z"
            fill="white"
            fill-opacity="0.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.26476 -44.3812H65.8936L138.044 24.7634H255.29L327.441 -44.3812H389.069L416.126 -6.80263V71.3608L387.566 132.99V181.09L375.541 205.141V262.26L318.422 344.933V378.002L262.805 421.593L243.265 451.656H150.07L130.529 421.593L74.9125 378.002V344.933L17.7931 262.26V205.141L5.76791 181.09V132.99L-22.7918 71.3608V-6.80263L4.26476 -44.3812ZM14.7868 -23.3372L-1.7478 0.713089V68.3545L26.8119 128.48V176.581L38.8371 200.631V256.247L95.9565 338.92V367.48L145.56 406.562L162.095 430.612H231.239L247.774 406.562L297.378 367.48V338.92L354.497 256.247V200.631L366.522 176.581V128.48L395.082 68.3545V0.713089L377.044 -23.3372H336.459L258.296 50.3168H252.283V45.8074H141.051V50.3168H133.535L56.8748 -23.3372H14.7868Z"
            fill="white"
            fill-opacity="0.2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-70.8546 -160.273H14.7824L115.04 -64.1929H277.96L378.217 -160.273H463.854L501.451 -108.056V0.557007L461.766 86.194V153.033L445.056 186.452V265.823L365.685 380.702V426.653L288.403 487.226L261.25 529H131.75L104.597 487.226L27.3147 426.653V380.702L-52.0562 265.823V186.452L-68.7659 153.033V86.194L-108.451 0.557007V-108.056L-70.8546 -160.273ZM-56.2336 -131.032L-79.2094 -97.6122V-3.62042L-39.524 79.9279V146.766L-22.8143 180.186V257.468L56.5565 372.347V412.032L125.484 466.339L148.46 499.758H244.54L267.516 466.339L336.443 412.032V372.347L415.814 257.468V180.186L432.524 146.766V79.9279L472.209 -3.62042V-97.6122L447.145 -131.032H390.75L282.137 -28.6849H273.782V-34.951H119.218V-28.6849H108.774L2.25018 -131.032H-56.2336Z"
            fill="white"
            fill-opacity="0.15"
          />
        </svg>
      </div>
      <div className="m-0 pt-96 px-8 z-50 flex flex-col justify-center gap-y-4">
        {/* TODO: FIX TITLE */}
        <h1 className="font-bold text-3xl text-white font-mono">COUGARCS</h1>
        <div
          className="
    font-chakra font-medium text-[16.6px] leading-[22px] text-center text-white"
        >
          WE COMPUTE STUDENT SUCCESS.
        </div>

        {/* TODO: Add icons check shadCN icons, correct size and boxiness*/}
        <Button
          variant="outline"
          className="font-manrope bg-white text-red-700 text-[16px] font-semibold leading-[21.86px] tracking-[-0.01em] text-left"
        >
          Become a Member
        </Button>
        <Button
          variant="outline"
          className="font-manrope bg-transparent text-white text-[16px] font-semibold leading-[21.86px] tracking-[-0.01em] text-left"
        >
          Join our Discord
        </Button>
      </div>
    </div>
  );
};

export default HeroImage;
