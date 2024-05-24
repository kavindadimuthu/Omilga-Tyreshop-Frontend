import React, { useState } from 'react';
import { Tabs , Button } from "antd";
import Selectdropdown from "./Selectdropdown";
const onChange = (key) => {
    console.log(key);
};
const Filtermenu = () => {

    const [activeTabKey, setActiveTabKey] = useState("1");

    const options1 = [
        { value: '15', label: '15 inches' },
        { value: '16', label: '16 inches' },
        { value: '17', label: '17 inches' },
    ];

    const options2 = [
        { value: '185', label: '185 mm' },
        { value: '195', label: '195 mm' },
        { value: '205', label: '205 mm' },
    ];

    const options3 = [
        { value: '55', label: '55%' },
        { value: '60', label: '60%' },
        { value: '65', label: '65%' },
    ];

    const options4 = [
        { value: 'toyota', label: 'Toyota' },
        { value: 'honda', label: 'Honda' },
        { value: 'ford', label: 'Ford' },
    ];

    const options5 = [
        { value: 'corolla', label: 'Corolla' },
        { value: 'civic', label: 'Civic' },
        { value: 'focus', label: 'Focus' },
    ];

    const handleTabChange = (key) => {
        setActiveTabKey(key);
    };

    const tabPaneStyle = {
        backgroundColor: '#333333',
        padding: '16px',
        borderRadius: '4px'
      };

    const selectBoxStyles = {
        display: 'flex',
        columnGap: '1em',
    };

    return (
        <Tabs onChange={handleTabChange} type="card" activeKey={activeTabKey}>
            <Tabs.TabPane
                tab="FIND BY TYRE DIMENSIONS"
                key="1"
                style={tabPaneStyle}
            >
                <div>
                    <span className='text-white'>Your path to the perfect set of tyres begins here</span>
                    <div style={selectBoxStyles}>
                        <Selectdropdown placeholder="Rim Size" options={options1} />
                        <Selectdropdown placeholder="Tire Width" options={options2} />
                        <Selectdropdown placeholder="Profile" options={options3} />
                        <Button type="primary" className='bg-[#0055AA]'>Filter</Button>
                    </div>
                </div>
            </Tabs.TabPane>
            <Tabs.TabPane
                tab="FIND BY VEHICLE MODEL"
                key="2"
                style={tabPaneStyle}
            >
                <div>
                    {/* Different content for Tab 2 */}
                    <span className='text-white'>Find the best tyres for your vehicle</span>
                    <div style={selectBoxStyles}>
                        <Selectdropdown placeholder="Make" options={options4} />
                        <Selectdropdown placeholder="Model" options={options5} />
                        <Button type="primary">Filter</Button>
                    </div>
                </div>
            </Tabs.TabPane>
        </Tabs>
    );
};

export default Filtermenu;
