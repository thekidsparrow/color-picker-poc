import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, message, ColorPicker, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


function CustomColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#1677ff'); 
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Space direction="vertical">
      <ColorPicker
        disabledAlpha
        value={selectedColor}
        presets={[
          {
            label: 'Presets',
            colors: ['#000000', '#dbdbdb', '#f4433a', '#f8bf3f', '#f0f341', '#4fd53a', '#4733fc', '#4fa8f8'],
          },
        ]}
        onChangeComplete={(color) => setSelectedColor(color.toHexString())}
        open={open}
        onOpenChange={setOpen}
        showText={() => (
          <DownOutlined
            rotate={open ? 180 : 0}
            style={{
              color: 'rgba(0, 0, 0, 0.25)',
            }}
          />
        )}
      />
    </Space>
    </div>
  );
}

 





const mountNode = document.getElementById('root');
ReactDOM.createRoot(mountNode).render(
  <ConfigProvider message={{ ...message, duration: 2 }}>
    <CustomColorPicker />
  </ConfigProvider>
);

export default CustomColorPicker;