const styles = {
  sectionMargin:
    "max-w-xl sm:max-w-2xl md:max-w-3xl 2md:max-w-4xl lg:max-w-5xl 2lg:max-w-6xl xl:max-w-7xl mx-auto",

  heroSubText:
    "text-[18px] xs:text-xl lg:text-[18px] xl:text-xl text-secondary uppercase tracking-widest text-center",
  heroHeadText:
    "text-5xl xs:text-6xl md:text-7xl font-extrabold my-6 text-center",
  heroProfileText:
    "text-2xl xs:text-3xl md:text-4xl lg:text-4xl title-gradient border font-bold my-6 p-3 rounded-xl text-center",

  sectionSubText:
    "text-[18px] md:text-[20px] lg:text-[18px] text-secondary uppercase tracking-wider",
  sectionHeadText:
    "text-4xl xs:text-5xl md:text-[60px] my-3 mb-10 text-white font-black",
  sectionText:
    "text-secondary leading-8 text-justify max-w-130 2md:max-w-150 text-[18px] md:text-xl",

  paddingX: "sm:px-10 px-6",
  paddingY: "sm:py-10 py-6",
  padding: "sm:px-10 px-6 sm:py-10 py-16",

  getNavUnderline: (element) => {
    switch (element) {
      case "Home":
        return "ml-2"
      case "About":
        return "ml-28"
      case "Work":
        return "ml-52"
      case "Tech":
        return "ml-76"
      case "Project":
        return "ml-101"
      case "Testimonial":
        return "ml-133"
      case "Contact":
        return "ml-168"
    }
  },
}

export { styles }
