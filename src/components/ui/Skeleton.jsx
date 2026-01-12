const Skeleton = ({ 
  variant = 'text', 
  width = '100%', 
  height,
  className = '',
  count = 1,
}) => {
  const variants = {
    text: 'h-4 rounded',
    title: 'h-8 rounded',
    avatar: 'h-12 w-12 rounded-full',
    card: 'h-64 rounded-xl',
    image: 'h-48 rounded-lg',
  };

  const shimmerStyle = `
    relative overflow-hidden bg-neutral-200
    before:absolute before:inset-0
    before:translate-x-[-100%]
    before:bg-gradient-to-r
    before:from-neutral-200 before:via-neutral-100 before:to-neutral-200
    before:animate-shimmer
  `;

  const baseClasses = `${shimmerStyle} ${variants[variant]} ${className}`;

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={baseClasses} style={style} />
        ))}
      </div>
    );
  }

  return <div className={baseClasses} style={style} />;
};

export const CardSkeleton = () => (
  <div className="bg-white rounded-xl p-6 border border-neutral-200">
    <Skeleton variant="image" className="mb-4" />
    <Skeleton variant="title" width="70%" className="mb-2" />
    <Skeleton variant="text" count={3} />
  </div>
);

export const BlogCardSkeleton = () => (
  <div className="bg-white rounded-xl overflow-hidden border border-neutral-200">
    <Skeleton variant="image" height={200} />
    <div className="p-6">
      <Skeleton variant="text" width="40%" className="mb-2" />
      <Skeleton variant="title" width="90%" className="mb-3" />
      <Skeleton variant="text" count={2} />
    </div>
  </div>
);

export default Skeleton;