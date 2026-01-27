import { Link } from "react-router-dom";
import { icons } from "../lib/iconMappings";

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
      <h1 className="text-h2">{title}</h1>
      <p className="text-white/70">{message}</p>
      <Link
        to={backLink}
        className="button-primary"
      >
        <img src={icons["arrow-left"]} alt="" className="h-5 w-5" />
        {backLabel}
      </Link>
    </div>
  );
};

export default NotFound;

