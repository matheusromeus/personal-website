type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container overflow-hidden">{children}</div>;
};

export default Container;
