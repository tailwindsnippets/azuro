import cx from 'classnames'
import Image from 'next/image'
import { Href } from 'components/navigation'
//test

type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <Image
        className="h-full"
        src="/images/logo.webp"
        alt="Smart contracts bets"
        width={71}
        height={71}
        unoptimized
      />
    </Href>
  )
}

export default Logo
