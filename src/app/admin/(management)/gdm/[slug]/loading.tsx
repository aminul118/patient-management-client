import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const GdmPatientDetailsSkeleton = () => {
  return (
    <div className="container mx-auto space-y-6 p-2">
      {/* Header Actions Skeleton */}
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="mt-2 h-4 w-64" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      {/* Main Dashboard Grid Skeleton */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Left Sidebar Skeleton */}
        <div className="space-y-6 md:col-span-4 lg:col-span-3">
          <Card className="border-none shadow-md">
            <div className="bg-muted/20 flex h-32 items-center justify-center">
              <Skeleton className="h-16 w-16 rounded-full" />
            </div>
            <CardContent className="pt-4 text-center">
              <Skeleton className="mx-auto h-6 w-3/4" />
              <Skeleton className="mx-auto mt-2 h-4 w-1/2" />
              <Separator className="my-6" />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-3 w-1/3" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Content Skeleton */}
        <div className="space-y-6 md:col-span-8 lg:col-span-9">
          {/* Vitals Summary Row Skeleton */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-4 w-4" />
                  </div>
                  <Skeleton className="mt-4 h-8 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Medical History Section Skeleton */}
          <Card className="border-none shadow-md">
            <CardHeader className="border-b px-6 py-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-6 w-48" />
              </div>
            </CardHeader>
            <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            {[1, 2].map((cardIndex) => (
              <Card key={cardIndex} className="border-none shadow-md">
                <CardHeader className="border-b px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 p-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-3 w-1/3" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GdmPatientDetailsSkeleton;
