import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IStats } from '@/types';

interface StatsProps {
  stats: IStats;
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Users */}
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.userCount}
        </CardContent>
      </Card>

      {/* Total Patients */}
      <Card>
        <CardHeader>
          <CardTitle>Total Patients</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.totalPatient}
        </CardContent>
      </Card>

      {/* Gdm Patient */}
      <Card>
        <CardHeader>
          <CardTitle>Gdm Patients</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.GdmPatientCount}
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
