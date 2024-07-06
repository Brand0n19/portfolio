interface workComponents {
  title: string;
  year: string;
  company: string;
  description: string;
  workClass: string
}

export default function WorkCard({
  title,
  year,
  company,
  description,
  workClass
}: workComponents) {
  return (
    <div  className={`w-5/12 bg-slate-900 hover:bg-slate-500 p-5 rounded-md text-slate-200 ${workClass}`}>
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="font-light text-sm mb-4">
        <span>{company} | </span>
        {year}
      </p>
      <p>{description}</p>
    </div>
  );
}
