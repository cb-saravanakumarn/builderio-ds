import React, { useState, ChangeEvent } from 'react';
import {
  SCard,
  SInput,
  SButton,
  SBadge,
  STable,
  SSelect,
  SSelectTrigger,
  SSelectValue,
  SSelectContent,
  SSelectItem,
} from '@/components';
import { Search, RefreshCw } from 'lucide-react';

// Sample data
const MOCK_DATA = [
  {
    id: 1,
    name: 'Project Alpha',
    status: 'active',
    priority: 'high',
    dueDate: '2024-03-15',
    progress: 75,
  },
  {
    id: 2,
    name: 'Project Beta',
    status: 'pending',
    priority: 'medium',
    dueDate: '2024-04-01',
    progress: 30,
  },
  {
    id: 3,
    name: 'Project Gamma',
    status: 'completed',
    priority: 'low',
    dueDate: '2024-02-28',
    progress: 100,
  },
  {
    id: 4,
    name: 'Project Delta',
    status: 'active',
    priority: 'high',
    dueDate: '2024-03-30',
    progress: 60,
  },
];

const FilterableTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  // Filter the data based on search term and filters
  const filteredData = MOCK_DATA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || item.status === statusFilter;
    const matchesPriority = !priorityFilter || item.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'completed':
        return 'neutral';
      default:
        return 'neutral';
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'neutral';
    }
  };

  return (
    <div className="space-y-4">
      {/* Filters Card */}
      <SCard depth="regular" padding="regular">
        <SCard.Header
          title="Project Filters"
          description="Filter and search through projects"
          primaryAction={
            <SButton
              variant="neutral-ghost"
              size="regular"
              icon={<RefreshCw size={16} />}
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('');
                setPriorityFilter('');
              }}
            >
              Reset Filters
            </SButton>
          }
        />
        <SCard.Content>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <SInput
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              allowClear
            >
              <SInput.Prefix>
                <Search className="h-4 w-4 text-gray-400" />
              </SInput.Prefix>
              <SInput.Field />
            </SInput>

            {/* Status Filter */}
            <SSelect value={statusFilter} onValueChange={setStatusFilter}>
              <SSelectTrigger>
                <SSelectValue placeholder="Filter by Status" />
              </SSelectTrigger>
              <SSelectContent>
                <SSelectItem value="">All Statuses</SSelectItem>
                <SSelectItem value="active">Active</SSelectItem>
                <SSelectItem value="pending">Pending</SSelectItem>
                <SSelectItem value="completed">Completed</SSelectItem>
              </SSelectContent>
            </SSelect>

            {/* Priority Filter */}
            <SSelect value={priorityFilter} onValueChange={setPriorityFilter}>
              <SSelectTrigger>
                <SSelectValue placeholder="Filter by Priority" />
              </SSelectTrigger>
              <SSelectContent>
                <SSelectItem value="">All Priorities</SSelectItem>
                <SSelectItem value="high">High</SSelectItem>
                <SSelectItem value="medium">Medium</SSelectItem>
                <SSelectItem value="low">Low</SSelectItem>
              </SSelectContent>
            </SSelect>
          </div>
        </SCard.Content>
      </SCard>

      {/* Table */}
      <STable variant="neutral" size="regular" border="full" rounded="lg">
        <STable.Head>
          <STable.Row>
            <STable.HeaderCell>Project Name</STable.HeaderCell>
            <STable.HeaderCell>Status</STable.HeaderCell>
            <STable.HeaderCell>Priority</STable.HeaderCell>
            <STable.HeaderCell>Due Date</STable.HeaderCell>
            <STable.HeaderCell>Progress</STable.HeaderCell>
          </STable.Row>
        </STable.Head>
        <STable.Body>
          {filteredData.map((project) => (
            <STable.Row key={project.id}>
              <STable.Cell>{project.name}</STable.Cell>
              <STable.Cell>
                <SBadge variant={getStatusBadgeVariant(project.status)}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </SBadge>
              </STable.Cell>
              <STable.Cell>
                <SBadge variant={getPriorityBadgeVariant(project.priority)}>
                  {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                </SBadge>
              </STable.Cell>
              <STable.Cell>{project.dueDate}</STable.Cell>
              <STable.Cell>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-sm">
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </STable.Cell>
            </STable.Row>
          ))}
          {filteredData.length === 0 && (
            <STable.Row>
              <STable.Cell colSpan={5}>
                <div className="text-center text-gray-500 py-4">
                  No projects found matching your filters.
                </div>
              </STable.Cell>
            </STable.Row>
          )}
        </STable.Body>
      </STable>
    </div>
  );
};

export default FilterableTable; 