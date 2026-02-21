import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IStats } from '@/types';
import {
  Activity,
  Baby,
  Stethoscope,
  UserRound,
  Users,
  Weight,
} from 'lucide-react';

interface StatsProps {
  stats: IStats;
}

const Stats = ({ stats }: StatsProps) => {
  const statItems = [
    {
      title: 'Total Users',
      value: stats.userCount,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Total Patients',
      value: stats.totalPatient,
      icon: UserRound,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
    {
      title: 'Gdm Patients',
      value: stats.GdmPatientCount,
      icon: Activity,
      color: 'text-rose-600',
      bgColor: 'bg-rose-100',
    },
    {
      title: 'PCOS Patients',
      value: stats.PcosPatientCount,
      icon: Stethoscope,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Infertility Patients',
      value: stats.InfertilityPatientCount,
      icon: Baby,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      title: 'OverWeight Patients',
      value: stats.OverWeightPatientCount,
      icon: Weight,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {statItems.map((item, index) => (
        <Card
          key={index}
          className="overflow-hidden border-none shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              {item.title}
            </CardTitle>
            <div className={`rounded-xl p-2 ${item.bgColor} ${item.color}`}>
              <item.icon className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">
              {item.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;
