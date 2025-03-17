import { faqCategories } from '../data/faqData';
import type { CategoryType } from '../data/faqData';
import { TabsContainer } from "./styled";

interface CategoryTabsProps {
    activeCategory: CategoryType;
    setActiveCategory: (category: CategoryType) => void;
}

export const CategoryTabs = ({ activeCategory, setActiveCategory }: CategoryTabsProps) => {
    return (
        <TabsContainer>
            {Object.entries(faqCategories).map(([key, label]) => (
                <button
                    key={key}
                    onClick={() => setActiveCategory(key as CategoryType)}
                    className={`category-button ${activeCategory === key ? 'active' : 'inactive'}`}
                >
                    {label}
                </button>
            ))}
        </TabsContainer>
    );
};