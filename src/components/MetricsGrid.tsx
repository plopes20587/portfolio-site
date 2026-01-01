type Metric = {
  label: string;
  value: string;
};

type Props = {
  metrics: Metric[];
  sectionLabel?: string;
  heading?: string;
};

// Icon components for different metric types
const TargetIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const TrendUpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 6L13.5 15.5L8.5 10.5L1 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 6H23V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 4L12 14.01L9 11.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const icons = [TargetIcon, TrendUpIcon, CheckCircleIcon, StarIcon];

import SectionWrapper from "./SectionWrapper";

import SectionHeader from "./SectionHeader";

const MetricsGrid = ({
  metrics,
  sectionLabel = "RESULTS",
  heading = "Key Metrics",
}: Props) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <SectionWrapper maxWidth="1100" padding="large">
      {/* Section Label and Heading */}
      <SectionHeader
        sectionLabel={sectionLabel}
        heading={heading}
        className="text-center"
      />

      {/* Metrics Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <div key={metric.label} className="metric-card">
              {/* Icon - 48x48px container with 24x24px icon */}
              <div className="icon-container icon-container-primary">
                <div style={{ width: "24px", height: "24px" }}>
                  <IconComponent />
                </div>
              </div>

              {/* Value */}
              <p className="font-display text-[24px] leading-[1.2] text-white">
                {metric.value}
              </p>

              {/* Label/Description */}
              <p className="font-body text-[16px] leading-[1.5] text-white/60">
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default MetricsGrid;
