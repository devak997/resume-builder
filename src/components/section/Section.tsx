import { Icon } from "@tabler/icons-react";

const Section: React.FC<
  React.PropsWithChildren<{ title: string; icon: Icon }>
> = ({ title, children, icon: IconR }) => {
  return (
    <div>
      <h2 className="text-lg text-sky-700 font-semibold flex items-center gap-2 mb-0.5">
        <IconR />
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
};

export default Section;
