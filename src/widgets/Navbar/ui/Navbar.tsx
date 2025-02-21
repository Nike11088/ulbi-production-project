import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={'/'}
          className={cls.mainLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink to={'/about'}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  )
}
