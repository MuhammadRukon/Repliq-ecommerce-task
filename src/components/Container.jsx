const Container = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-125px)]">
      {children}
    </div>
  );
};

export default Container;
