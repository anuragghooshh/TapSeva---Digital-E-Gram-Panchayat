import Tabs from './Tabs';
import Tab from './Tab';
import { TabsProps } from './Tabs';
import { TabProps } from './Tab';


interface TabsComponent extends React.FC<TabsProps> {
    Tab: React.FC<TabProps>;
}

const ExtendedTabs = Tabs as TabsComponent;
ExtendedTabs.Tab = Tab;

export default ExtendedTabs;
export { Tab, Tabs };