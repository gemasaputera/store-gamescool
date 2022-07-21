import React from 'react';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';

const MemberOverview = () => (
  <section className="overview overflow-auto">
    <Sidebar />
    <OverviewContent />
  </section>
);

export default MemberOverview;
