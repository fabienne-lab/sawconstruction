import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import DailyReportsWorks from "./scenes/dailyReportsWorks";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Planner from "./scenes/planning"
import Planning from "./scenes/planning";
import Factures from "./scenes/factures";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function Supp1App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar>
          </Topbar>
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dailyReportsWorks" element={<DailyReportsWorks />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/factures" element={<Factures />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Supp1App;
