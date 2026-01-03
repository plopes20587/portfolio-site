import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "./icons/ArrowIcons";

type NotFoundProps = {
  title?: string;
  message?: string;
  backLink?: string;
  backLabel?: string;
};

/**
 * Reusable NotFound component for error pages
 * Displays a centered error message with a back link
 */
const NotFound = ({
  title = "Case Study Not Found",
  message = "The case study you're looking for doesn't exist.",
  backLink = "/#work",
  backLabel = "Back to Work",
}: NotFoundProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6">
      <h1 className="font-display text-[48px] text-white">{title}</h1>
      <p className="font-body text-[16px] text-white/70">{message}</p>
      <Link
        to={backLink}
        className="hover:bg-primary/90 inline-flex items-center gap-2 rounded-[4px] bg-primary px-6 py-3 font-body text-[16px] font-medium text-white transition"
      >
        <ArrowLeftIcon />
        {backLabel}
      </Link>
    </div>
  );
};

export default NotFound;

