import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Chart } from "react-google-charts";
import { mockPlannerData } from "../../data/mockData";
import React, { useEffect } from 'react';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import gantt from 'dhtmlx-gantt';


const Planner = () => {
  useEffect(() => {
      gantt.init('gantt_here');
      gantt.parse({
          data: [
{ id: 1, text: 'GeeksforGeeks Course Planning', start_date: '2024-06-01', duration: 5, progress: 1 },
{ id: 2, text: 'Content Creation', start_date: '2024-06-06', duration: 15, progress: 0.5, parent: 1 },
{ id: 3, text: 'Review and Editing', start_date: '2024-06-21', duration: 5, progress: 0.25, parent: 2 },
{ id: 4, text: 'Final Approval', start_date: '2024-06-26', duration: 5, progress: 0, parent: 3 },
          ],
      });
  }, []);

  return (
      <div>
          <h1 style={{ color: 'green', textAlign: 'center' }}>GeeksforGeeks</h1>
          <h3 style={{ textAlign: 'center' }}>Using dhtmlx-gantt</h3>
          <div id="gantt_here" style={{ width: '100%', height: '200px', margin: 'auto' }}></div>
      </div>
  );
};

const Planner2 = () => {
  const data = [
      [
          { type: 'string', label: 'Task ID' },
          { type: 'string', label: 'Task Name' },
          { type: 'string', label: 'Resource' },
          { type: 'date', label: 'Start Date' },
          { type: 'date', label: 'End Date' },
          { type: 'number', label: 'Duration' },
          { type: 'number', label: 'Percent Complete' },
          { type: 'string', label: 'Dependencies' },
      ],
['1', 'GeeksforGeeks Course Planning', 'Planning', new Date(2024, 5, 1), new Date(2024, 5, 5), null, 100, null],
['2', 'Content Creation', 'Writing', new Date(2024, 5, 6), new Date(2024, 5, 20), null, 50, '1'],
['3', 'Review and Editing', 'Editing', new Date(2024, 5, 21), new Date(2024, 5, 25), null, 25, '2'],
['4', 'Final Approval', 'Approval', new Date(2024, 5, 26), new Date(2024, 5, 30), null, 0, '3'],
  ];

  const options = {
      height: 400,
      gantt: {
          criticalPathEnabled: true,
          criticalPathStyle: {
              stroke: '#e64a19',
              strokeWidth: 5,
          },
          trackHeight: 30,
      },
  };

  return (
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
          <h3>Using react-google-charts</h3>
          <Chart
              chartType="Gantt"
              width="80%"
              data={data}
              options={options}
          />
      </div>
  );
};

/***export Planner;***/







const Planning = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const options = {
    height: 400,
    gantt: {
        criticalPathEnabled: true,
        criticalPathStyle: {
            stroke: '#e64a19',
            strokeWidth: 5,
        },
        trackHeight: 30,
    }
  }

  return (
    <Box m="20px">
      <Header title="PLANNING" subtitle="Planning des travaux" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
            <h3>Using react-google-chhhhhharts</h3>
            <Chart
                chartType="Gantt"
                width="80%"
                data={mockPlannerData}
                options={options}
            />
        </div>
        </AccordionDetails>
      </Accordion>

      <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
            <h3>Using react-google-chhhhhharts</h3>
            <Chart
                chartType="Gantt"
                width="80%"
                data={mockPlannerData}
                options={options}
            />
        </div>
    </Box>
  );
};

export default Planner;
