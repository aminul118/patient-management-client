'use client';

import DeleteFromTableDropDown from '@/components/common/actions/DeleteFromTableDropDown';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteSinglePatientInfo } from '@/services/patient-management/gdm';
import { IGdm } from '@/types/api.types';
import { Edit, EllipsisIcon, Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  patient: IGdm;
}

const GdmActions = ({ patient }: Props) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = async (id: string) => {
    return await deleteSinglePatientInfo(id);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="shadow-none"
              aria-label="Actions"
            >
              <EllipsisIcon size={16} aria-hidden="true" />
            </Button>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="min-w-48">
          <Link href={`/admin/gdm/${patient._id}`}>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              <span>Details</span>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => setDeleteModalOpen(true)}
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modals */}

      <DeleteFromTableDropDown
        open={deleteModalOpen}
        setOpen={setDeleteModalOpen}
        onConfirm={() => handleDelete(patient._id)}
      />
    </>
  );
};

export default GdmActions;
