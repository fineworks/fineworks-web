import React from "react"
import classNames from "classnames";
import Image from "../image";
import Video from "../elements/video";
import CustomLink from "../elements/custom-link";
import ButtonLink from "../elements/button-link";
import { getButtonAppearance } from "@/utils/button"

const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="container flex flex-col gap-12 py-12">
      {data.features.map((feature, index) => (
        <div
          className={classNames(
            // Common classes
            "flex flex-col justify-start md:justify-between md:items-center gap-10",
            {
              "lg:flex-row": index % 2 === 0,
              "lg:flex-row-reverse": index % 2 === 1,
            }
          )}
          key={feature.id}
        >
          {/* Text section */}
          <div className="w-full lg:w-6/12 lg:pr-6 text-lg">
            <h3 className="title">{feature.title}</h3>
            <p className="my-6">{feature.description}</p>
            <div className="flex flex-row flex-wrap gap-4">
              <CustomLink link={feature.link}>
                <div className="block w-full lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md px-6 py-2 bg-primary-600 text-white border-primary-600">
                  {feature.link.text}
                </div>
              </CustomLink>
            </div>
          </div>
          {/* Media section */}
          <div className="w-full sm:9/12 lg:w-4/12 max-h-full">
            {/* Images */}
            {feature.media.mime.startsWith("image") && (
              <Image media={feature.media} className="w-full h-auto" />
            )}
            {/* Videos */}
            {feature.media.mime.startsWith("video") && (
              <Video
                media={feature.media}
                className="w-full h-auto"
                autoPlay
                controls={false}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureRowsGroup;
