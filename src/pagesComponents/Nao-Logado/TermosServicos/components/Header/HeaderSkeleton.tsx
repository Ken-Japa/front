import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { HeaderContainer } from "./styled";
import { visitorColors } from "@/theme/palette/visitor";

export const HeaderSkeleton = () => (
  <HeaderContainer>
    <div className="header-icon-container">
      <ContentSkeleton 
        type="text" 
        textLines={1} 
        className={`w-64 ${visitorColors.skeletonBackground} backdrop-blur-sm`} 
      />
    </div>
    <ContentSkeleton 
      type="text" 
      textLines={2} 
      className={`${visitorColors.skeletonBackground} backdrop-blur-sm`} 
    />
  </HeaderContainer>
);