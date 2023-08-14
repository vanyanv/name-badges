type NameBadgeProps = {
  name: string;
  greetings?: string;
};
////coments
const NameBadge = ({ name, greetings }: NameBadgeProps) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{props.greetings}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{props.name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
