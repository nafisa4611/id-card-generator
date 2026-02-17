import IDCardFront from "./IDCardFront";
import IDCardBack from "./IDCardBack";

export default function IdCard({ data }) {
  return (
    <div className="flex flex-col items-center gap-4 id-card group cursor-default p-4 transition-colors duration-300">
      
      <div className="transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(var(--color-primary),0.2)] rounded-2xl overflow-hidden border border-border">
        <IDCardFront data={data} />
      </div>
      

      <div className="w-16 h-1 bg-bg rounded-full group-hover:w-24 transition-all duration-500" />
      <div className="transition-all duration-500 group-hover:translate-y-2 group-hover:shadow-[0_20px_50px_rgba(var(--color-primary),0.2)] rounded-2xl overflow-hidden border border-border">
        <IDCardBack data={data} />
      </div>
    </div>
  );
}