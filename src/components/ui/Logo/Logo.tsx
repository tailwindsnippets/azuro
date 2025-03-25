import cx from 'classnames'
import Image from 'next/image'
import { Href } from 'components/navigation'


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
        width={512}
        height={512}
        unoptimized
      />
    </Href>
  )
}

export default Logo
