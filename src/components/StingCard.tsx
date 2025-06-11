import React from 'react';
import { SCard, SButton, SBadge } from '@chargebee/sting-react';

const StingCard = () => {
  return (
    <div className="space-y-6">
      {/* Basic Card */}
      <SCard depth="regular" padding="regular" background="white" rounded>
        <SCard.Header
          title="Welcome to Sting Card"
          description="This is a simple example of a Sting Card component"
          primaryAction={
            <SButton variant="primary" size="sm">
              Learn More
            </SButton>
          }
        />
        <SCard.Content>
          <p className="text-gray-600">
            This card demonstrates the basic features of the Sting Card component.
            It includes a header with a title, description, and a primary action button.
          </p>
        </SCard.Content>
      </SCard>

      {/* Card with Custom Styling */}
      <SCard depth="raised" padding="large" background="neutral" spacey="large" border="none">
        <SCard.Header
          titleElement={
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Project Status</h3>
              <SBadge variant="success">Active</SBadge>
            </div>
          }
          description="Current project metrics and information"
          primaryAction={
            <SButton variant="primary" size="sm">
              View Details
            </SButton>
          }
          secondaryAction={
            <SButton variant="ghost" size="sm">
              Edit
            </SButton>
          }
        />
        <SCard.Content>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Progress</h4>
                <p className="text-gray-600">75% Complete</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Due Date</h4>
                <p className="text-gray-600">December 31, 2024</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
        </SCard.Content>
      </SCard>
    </div>
  );
};

export default StingCard; 