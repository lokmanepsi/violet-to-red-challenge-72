const ImageCollage = () => {
  return (
    <div className="relative w-64 h-48 md:w-80 md:h-60">
      {/* Placeholder 1 - Large */}
      <div className="absolute top-0 left-0 w-36 h-44 md:w-44 md:h-52 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform -rotate-6 shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 text-xs">
          Photo
        </div>
      </div>
      
      {/* Placeholder 2 - Medium */}
      <div className="absolute top-4 right-0 w-28 h-36 md:w-36 md:h-44 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl transform rotate-3 shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 text-xs">
          Photo
        </div>
      </div>
      
      {/* Placeholder 3 - Small */}
      <div className="absolute bottom-0 left-16 w-24 h-28 md:w-28 md:h-32 bg-gradient-to-br from-primary/15 to-accent/5 rounded-xl transform rotate-6 shadow-md">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 text-xs">
          Photo
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
