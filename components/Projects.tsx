export interface Project {
  title: string;
  link: string;
}
interface ProjectProps {
  items: Project[];
  class?: string;
}

export default function Projects(props: ProjectProps) {
  return (
    <div
      class={`pt-8 grid grid-cols-1 md:grid-cols-3 flex ${
        props.class ?? ""
      }`}
    >
      {props.items.filter((item) => item.link.length > 0).map((project) => (
        <div class="w-full max-w-sm mx-auto group ">
          <a href={project.link}>
            <div
              class="object-cover shadow-lg group-hover:shadow-xl group-hover:opacity-70 rounded-lg bg-red-700 flex items-center justify-center flex m-4"
              width="600"
              height="337"
              style="aspect-ratio: 16/9;"
            >
              <h1 class="text-white text-4xl">{project.title}</h1>
            </div>
            <div class="mt-4 flex items-center">
              <div class="text-lg text-gray-600 flex-1 group-hover:text-underline m-4">
                <a href={project.link}>{project.title}</a>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
