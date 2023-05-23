import React from "react";

export const metadata = {
  title: "Code Gyaan - About",
  description:
    "Unlock your coding potential with Code Gyaan, brought to you by Deepak Verma. The go-to resource for coding and programming, Code Gyaan offers quality content, tutorials, tips, news, and interviews with industry experts. From beginner basics to advanced techniques, Deepak Verma and our passionate team of experienced coders are here to help you stay ahead of the game, unleash your creativity, and make a positive impact on the world through the power of coding. Join us on this exciting coding journey and let's excel together. Explore Code Gyaan now!",
};

const Page = () => {
  return (
    <div className="px-24 text-justify flex flex-col gap-y-8">
      <h2 className="text-center text-gray-800">Our Story</h2>
      <p>
        Welcome to Code Gyaan, your go-to resource for everything related to
        coding and programming. Our mission is to provide quality content that
        helps beginners learn the basics of coding and empowers experienced
        coders to take their skills to the next level.
      </p>
      <p>
        Our team is composed of passionate coders who have years of experience
        in various programming languages and frameworks. We started this blog
        because we noticed a gap in the market for a reliable source of
        information on coding that caters to all levels of expertise.
      </p>
      <p>
        Whether you&apos;re a beginner who&apos;s just starting out in the world
        of coding or an experienced developer who wants to stay up-to-date with
        the latest trends and technologies, we&apos;ve got you covered. We
        provide in-depth tutorials, tips and tricks, news and trends, and
        interviews with industry experts that are designed to help you stay on
        top of your game.
      </p>
      <p>
        At Code Gyaan, we believe that coding is more than just a technical
        skill – it&apos;s a way of thinking that can help you solve complex
        problems, create innovative solutions, and make a positive impact on the
        world. That&apos;s why we&apos;re committed to providing content that
        not only teaches you how to code, but also inspires you to think
        creatively and critically.
      </p>
      <p>
        We&apos;re always open to feedback and suggestions, so if you have any
        topics or ideas that you&apos;d like us to cover, please don&apos;t
        hesitate to get in touch. We&apos;re here to help you succeed, and we
        look forward to being a part of your coding journey. Thank you for
        visiting Code Gyaan!
      </p>
    </div>
  );
};

export default Page;
