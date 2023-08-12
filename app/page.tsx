import { Searchbar, Sidebar, SongCard, TopPlay } from "../components";
import Discover from "../pages/Discover";
import TopArtists from "../pages/TopArtists";
import ArtistDetails from "../pages/ArtistDetails";
import SongDetails from "../pages/SongDetails";
import Search from "../pages/Search";
import TopCharts from "../pages/TopCharts";
import AroundYou from "../pages/AroundYou";
import Link from "next/link";

export default function Home() {
  // const { activeSong } = useSelector((state) => state.player);

  return (
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
          <Searchbar />

          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              {/* Use Link components for navigation */}
              <Link href="/">
                <Discover />
              </Link>
              <Link href="/top-artists">
                <TopArtists />
              </Link>
              <Link href="/top-charts">
                <TopCharts />
              </Link>
              <Link href="/around-you">
                <AroundYou />
              </Link>
              {/* For dynamic routes */}
              <Link href="/artists/[id]" as="/artists/artistId">
                <ArtistDetails />
              </Link>
              <Link href="/songs/[songid]" as="/songs/songId">
                <SongDetails />
              </Link>
              <Link href="/search/[searchTerm]" as="/search/yourSearchTerm">
                <Search />
              </Link>
            </div>
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay />
            </div>
          </div>
        </div>

        {/* {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )} */}
      </div>

  );
}
// function useSelector(arg0: (state: any) => any): { activeSong: any; } {
//   throw new Error('Function not implemented.');
// }
