import cx from "classnames";
import Button from "../../../components/button";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import usePhotos from "../../photos/hooks/use-photos";
import type { Album } from "../model/album";

interface AlbumsFilterProps extends React.ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export default function ALbumsFilter({albums, loading, className, ...props}: AlbumsFilterProps){
  const {filters} = usePhotos();

  return (
    <div className={cx("flex items-center gap-3.5 overflow-x-auto", className)} {...props}>
      <Text variant="heading-small">Álbuns</Text>

      {!loading ? (
        <>
          <div className="flex gap-3">
            <Button 
              variant={filters.albumId === null ? "primary" : "ghost"} 
              size="sm" 
              className="cursor-pointer"
              onClick={()=> filters.setAlbumId(null)}
            >
              Todos
            </Button>
          </div>

          {
            albums.map(album => (
              <div className="flex gap-3">
                <Button key={album.id} 
                  variant={filters.albumId === album.id ? "primary" : "ghost"}  
                  size="sm" 
                  className="cursor-pointer"
                  onClick={()=> filters.setAlbumId(album.id)}
                >
                  {album.title}
                </Button>
              </div>
            ))
          }
        </>
      ):(
        Array.from({length: 5}).map((_, index)=> <Skeleton className="w-28 h-7" key={`album-button-loading${index}`} />)
      )}
    </div>
  );
}