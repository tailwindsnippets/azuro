import cx from 'classnames';

import { Href } from 'components/navigation';

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props;

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <img
        className="h-full"
        src="/images/logo.png"
        alt="Smart contracts png"
        width="71"
        height="16"
      />
    </Href>
  );
};

export default Logo;