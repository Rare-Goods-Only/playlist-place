import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const playlist = await fetch(
    `${baseUrl}/playlist/v1/getPlaylist?id=${id}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: playlist.title,
    openGraph: {
      images: [
        "https://uploads-ssl.webflow.com/62df811957f10071665c1949/638523f9074111fce0aa57ed_open%20graph.png",
        ...previousImages,
      ],
    },
  };
}

async function getData(id: number | string) {
  const res = await fetch(`${baseUrl}/playlist/v1/getPlaylist?id=${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PlaylistPage({ params, searchParams }: Props) {
  const data = await getData(params.id);
  return (
    <div>
      <h1>Playlist Page</h1>
      <p>id: {params.id}</p>
      <p>search: {JSON.stringify(data)}</p>
    </div>
  );
}
