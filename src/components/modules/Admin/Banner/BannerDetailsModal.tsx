'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { IBanner, IModal } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends IModal {
  banner: IBanner;
}

const BannerDetailsModal = ({ banner, open, setOpen }: Props) => {
  if (!banner) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl overflow-hidden p-0">
        {/* Accessible title */}
        <DialogTitle className="sr-only">{banner.title}</DialogTitle>

        {/* Banner Image */}
        <div className="relative h-64">
          <Image
            src={banner.photo}
            alt={banner.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold">{banner.title}</h2>

          <p className="text-muted-foreground">{banner.description}</p>

          {banner.url && (
            <Link
              href={banner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/90"
            >
              {banner.buttonText || 'Learn More'}
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BannerDetailsModal;
