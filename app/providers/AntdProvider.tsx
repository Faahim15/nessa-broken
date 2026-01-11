"use client";

import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

export default function AntdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2563eb",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
