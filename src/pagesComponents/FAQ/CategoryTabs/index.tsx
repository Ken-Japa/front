import { faqCategories } from '../data/faqData';
import type { CategoryType } from '../data/faqData';

interface CategoryTabsProps {
    activeCategory: CategoryType;
    setActiveCategory: (category: CategoryType) => void;
}

export const CategoryTabs = ({ activeCategory, setActiveCategory }: CategoryTabsProps) => {
    return (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Object.entries(faqCategories).map(([key, label]) => (
                <button
                    key={key}
                    onClick={() => setActiveCategory(key as CategoryType)}
                    className={`px-4 py-2 rounded-full transition-all duration-300
                        ${activeCategory === key
                            ? 'bg-[#0D95F9] text-white'
                            : 'bg-[#ffffff15] text-white/85 hover:bg-[#ffffff20]'
                        }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};