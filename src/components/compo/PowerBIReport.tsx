import React, { useEffect, useRef } from "react";
import * as pbi from "powerbi-client";

const PowerBIReport = ({ embedUrl, accessToken }: any) => {
  const reportRef = useRef(null);

  useEffect(() => {
    if (reportRef.current) {
      const powerbi = new pbi.service.Service(
        pbi.factories.hpmFactory,
        pbi.factories.wpmpFactory,
        pbi.factories.routerFactory
      );
      const embedConfig = {
        type: "report",
        id: "YOUR_REPORT_ID",
        embedUrl: embedUrl,
        accessToken: accessToken,
        tokenType: pbi.models.TokenType.Aad,
        settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: true,
        },
      };

      powerbi.embed(reportRef.current, embedConfig);
    }
  }, [embedUrl, accessToken]);

  return <div ref={reportRef} style={{ width: "100%", height: "600px" }} />;
};

export default PowerBIReport;
