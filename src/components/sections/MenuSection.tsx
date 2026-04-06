import '../../styles/Menu.css'
import { MenuProps } from '../../types'
import { useTranslation } from 'react-i18next'

function MenuSection({ title, subtitle, categories }: MenuProps) {
  const { t } = useTranslation()

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="menu-header">
          <h2>{t(title)}</h2>
          {subtitle && <p className="subtitle">{t(subtitle)}</p>}
        </div>
        
        <div className="menu-categories">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="menu-category">
              <div className="category-header">
                <h3 className="category-title">{t(category.title)}</h3>
              </div>
              <div className="menu-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="item-header">
                      <h4 className="item-name">{t(item.name)}</h4>
                      <span className="item-price">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="item-description">{t(item.description)}</p>
                    )}
                    {item.tags && (
                      <div className="item-tags">
                        {item.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
