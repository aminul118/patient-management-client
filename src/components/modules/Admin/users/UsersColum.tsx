import DateFormat from '@/components/common/formater/date-format';
import PlaceHolderImage from '@/components/common/PlaceHolderImage';
import { Column } from '@/components/common/table/TableManageMent';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { IUser } from '@/types';
import { BadgeCheck } from 'lucide-react';

const UsersColum: Column<IUser>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Photo',
    accessor: (u) =>
      u.picture ? (
        <Avatar className="h-10 w-10">
          <AvatarImage src={u.picture} alt={u.fullName} />
          <AvatarFallback>{u.fullName?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      ) : (
        <PlaceHolderImage className="rounded-full" />
      ),
  },
  {
    header: 'Name',
    accessor: (u) => (
      <div className="font-medium">
        {u.fullName || `${u.firstName} ${u.lastName}`}
      </div>
    ),
  },
  {
    header: 'Email',
    accessor: (u) => u.email,
  },
  {
    header: 'Role',
    accessor: (u) => (
      <Badge variant="outline" className="capitalize">
        {u.role}
      </Badge>
    ),
  },
  {
    header: 'Verify',
    accessor: (u) =>
      u.isVerified ? (
        <Badge className="bg-green-800 text-white">
          <BadgeCheck className="mr-1 h-3 w-3" /> Verified
        </Badge>
      ) : (
        <Badge variant="secondary">Unverified</Badge>
      ),
  },
  {
    header: 'Status',
    accessor: (u) => {
      const statusConfig = {
        active: { label: 'Active', className: 'bg-green-600 text-white' },
        inactive: { label: 'Inactive', className: 'bg-gray-500 text-white' },
        blocked: { label: 'Blocked', className: 'bg-red-600 text-white' },
      };

      const status = u.isActive || 'inactive';
      const config = statusConfig[status as keyof typeof statusConfig] || {
        label: status,
        className: 'bg-gray-500 text-white',
      };

      return <Badge className={config.className}>{config.label}</Badge>;
    },
  },
  {
    header: 'User Join Date & Time',
    accessor: (u) => <DateFormat date={u.createdAt} />,
  },
];

export default UsersColum;
