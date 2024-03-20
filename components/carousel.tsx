"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./projects";
import Slider from "react-slick";

import { siteConfig } from "@/config/site";

export default function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-5/6 mx-auto mt-10">
      <Slider {...settings}>
        {siteConfig.projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            code={project.code}
            image={project.image}
            techStack={project.techStack}
          />
        ))}
      </Slider>
    </div>
  );
}
