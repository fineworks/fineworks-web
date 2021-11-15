import React from "react"
import classNames from "classnames"
import { useState } from "react"
import Image from "../image"
import CustomLink from "../elements/custom-link"

const TechnologiesGroup = ({ data }) => {

  return (
    <section className="container flex flex-col text-lg pt-12 pb-16">
      <h2 className="text-3xl mb-10 font-bold mb-2">{data.title}</h2>
      {data.description && 
        (<p className="text-gray-700 mb-4">{data.description}</p>)
      }
      {/* Logos list */}
      <div className="flex flex-row flex-wrap items-center gap-6 sm:gap-20 justify-center mt-10 px-6 sm:px-0">
        {data.logos.map(logo => (
          <div>
            <Image
              style={{ width: "150px" }}
              media={logo.logo}
              className="h-30 max-w-xs w-auto object-contain"
              key={logo.id}
            />
            <div class="text-center">{logo.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesGroup
