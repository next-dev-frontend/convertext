const LastTenDays = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="select-none container mx-auto py-4 px-8 w-full max-w-5xl">
      <div className="flex flex-nowrap items-center justify-end">
        <p className="text-sm text-colorBlue md:text-md">last update: {formattedDate}</p>
      </div>
    </div>
  );
};

export default LastTenDays;