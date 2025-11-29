import ContactInfoTab from "./tabsContent/ContactInfoTab";
import GalleryTab from "./tabsContent/GalleryTab";

interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  switch (activeTab) {
    case "gallery":
      return <GalleryTab />;
    case "contactInfo":
      return <ContactInfoTab />;
    default:
      return null;
  }
}
