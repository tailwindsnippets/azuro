import cx from "classnames";
import Image from "next/image";
import { Href } from "components/navigation";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props;

  return (
    <Href to="/" className={cx("flex items-center", className)}>
      <Image
        className="h-full"
        src="/images/logo.svg"
        alt="Smart contracts bets"
        width={71}
        height={16}
        // Optional: Disable optimization if SVG has issues
        unoptimized={true}
      />
    </Href>
  );
};

export default Logo;
