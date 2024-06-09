import { ApproachesContent } from '@/contants';
import ContentWriter from '../general/content-writer';

export default function ApproachSection() {
  return (
    <section className="flex items-center p-4 lg:p-6">
      <div className="">
        <h3 className="text-3xl lg:mb-20">Approaches</h3>
        <ol className="grid grid-cols-3 place-items-center gap-20">
          {ApproachesContent.map((approach, index) => (
            <ContentWriter
              key={index}
              title={approach.title}
              description={approach.description}
              itemNumber={`0${index + 1}`}
              className="col-span-3  lg:col-span-1"
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
