import { marked } from "marked";

type Props = {
  content: string;
};

export default function MarkdownContent({ content }: Props) {
  const html = marked.parse(content) as string;

  return (
    <div
      className="blog-markdown"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}