import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
  TableExpandedRow,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  
  Tab,
} from 'carbon-components-react';

 
import * as serviceWorker from '../../serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
  

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};


const headerData = [
  {
    header: 'Name',
    key: 'name',
  },
  {
    header: 'Protocol',
    key: 'protocol',
  },
  {
    header: 'Port',
    key: 'port',
  },
  {
    header: 'Rule',
    key: 'rule',
  },
  {
    header: 'Attached Groups',
    key: 'attached_groups',
  },
  {
    header: 'Status',
    key: 'status',
  },
];

const rowData = [
  {
    attached_groups: 'Kevins VM Groups',
    id: 'a',
    name: 'Load Balancer 3',
    port: 3000,
    protocol: 'HTTP',
    rule: 'Round robin',
    status: 'Disabled',
  },
  {
    attached_groups: 'Maureens VM Groups',
    id: 'b',
    name: 'Load Balancer 1',
    port: 443,
    protocol: 'HTTP',
    rule: 'Round robin',
    status: 'Starting',
  },
  {
    attached_groups: 'Andrews VM Groups',
    id: 'c',
    name: 'Load Balancer 2',
    port: 80,
    protocol: 'HTTP',
    rule: 'DNS delegation',
    status: 'Active',
  },
  {
    attached_groups: 'Marcs VM Groups',
    id: 'd',
    name: 'Load Balancer 6',
    port: 3000,
    protocol: 'HTTP',
    rule: 'Round robin',
    status: 'Disabled',
  },
  {
    attached_groups: 'Mels VM Groups',
    id: 'e',
    name: 'Load Balancer 4',
    port: 443,
    protocol: 'HTTP',
    rule: 'Round robin',
    status: 'Starting',
  },
  {
    attached_groups: 'Ronjas VM Groups',
    id: 'f',
    name: 'Load Balancer 5',
    port: 80,
    protocol: 'HTTP',
    rule: 'DNS delegation',
    status: 'Active',
  },
];
const onInputChange =()=>{ alert("search")}

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page ">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="fun">
            <Tab {...props.tab} label="Action">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">

                <DataTable rows={rowData} headers={headerData}>
  {({ rows, headers, getHeaderProps, getTableProps,getBatchActionProps }) => (
    <TableContainer title="Funnels">
 <TableToolbar>
        <TableBatchActions {...getBatchActionProps()} size="small">
         
        </TableBatchActions>
        <TableToolbarContent>
          <TableToolbarSearch
            tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
            onChange={onInputChange}
          />
        
          <Button
            tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
            onClick={() => console.log('clicked')}
            size="small"
            kind="primary"
          >
            Add new
          </Button>
        </TableToolbarContent>
      </TableToolbar>
    

      <Table {...getTableProps()} size='normal'>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {row.cells.map((cell) => (
                <TableCell key={cell.id}>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
</DataTable>
                 </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Activity">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Funnels">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">
                 
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Notifications">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Logs">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                      
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
      </div>
    </div>
  );
};
serviceWorker.unregister();
export default LandingPage;
