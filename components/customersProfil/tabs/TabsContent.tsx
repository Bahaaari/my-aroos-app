import React from 'react';
import Messages from './tabsContent/Messages';
import Orders from './tabsContent/Orders';
import Favorits from './tabsContent/Favorits';
import DiscountCodes from './tabsContent/DiscountCodes';
import Notices from './tabsContent/Notices';
import Reminder from './tabsContent/Reminder';

interface TabsContentProps {
  activeTab: string;
}

const TabsContent = ({ activeTab }: TabsContentProps) => {
  switch (activeTab) {
    case 'messages':
      return <Messages />;
    case 'orders':
      return <Orders />;
    case 'favorits':
      return <Favorits />;
    case 'reminder':
      return <Reminder />;
    case 'discountCodes':
      return <DiscountCodes />;
    case 'notices':
      return <Notices />;
    default:
      return null;
  }
};

export default TabsContent;
