import MenuSection from '../components/sections/MenuSection'
import { MenuProps } from '../types'

interface MenuPageProps {
  config: MenuProps;
}

function MenuPage({ config }: MenuPageProps) {
  return (
    <main className="menu-page">
      <MenuSection {...config} />
    </main>
  )
}

export default MenuPage
