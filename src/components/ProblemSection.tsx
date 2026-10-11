import { motion } from "framer-motion";
import type { ImageSection, ProblemBreakdownItem } from "../types";
import SectionWrapper from "./SectionWrapper";
import ProblemImageGallery from "./ProblemImageGallery";

type ProblemSectionProps = {
  items: ProblemBreakdownItem[];
  /** Image sections placed "after-problem", rendered below the cards */
  imageSections: ImageSection[];
};

/**
 * "The problem" section: heading, problem cards in an equal-height row,
 * then any after-problem images or video.
 */
const ProblemSection = ({ items, imageSections }: ProblemSectionProps) => {
  return (
    <SectionWrapper className="justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-start gap-48"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex w-[650px] max-w-full flex-col items-center gap-8 text-center"
        >
          <h2>The problem</h2>
        </motion.div>

        {/* Problem Cards - equal heights on desktop */}
        <div className="flex w-full flex-col gap-32 md:flex-row md:items-stretch">
          {items.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="solution-card"
            >
              <p className="text-body-lg font-semibold">{item.title}</p>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {imageSections.map((section, index) => (
          <motion.div
            key={`after-problem-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProblemImageGallery images={section.images} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default ProblemSection;
