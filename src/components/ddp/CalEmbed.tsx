"use client";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export const CAL_LINK = "el-diario-del-poder-wwdlhf/30min";
export const CAL_URL = "https://cal.com/el-diario-del-poder-wwdlhf";

export function CalInlineEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "ddp-inline" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#6E1423",
            "cal-bg": "#FAF7F2",
            "cal-bg-emphasis": "#F0EBE2",
            "cal-text": "#141414",
            "cal-text-emphasis": "#141414",
            "cal-border": "#141414",
            "cal-border-subtle": "rgba(20,20,20,0.15)",
            "cal-border-booker": "#141414",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Cal
        namespace="ddp-inline"
        calLink="el-diario-del-poder-wwdlhf"
        style={{ width: "100%", height: "100%", minHeight: "680px" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}