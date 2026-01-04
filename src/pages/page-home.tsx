import Container from "../components/container";
import ALbumsFilter from "../context/album/components/albums-filter";
import useAlbums from "../context/album/hooks/use-albums";
import PhotosList from "../context/photos/components/photos-list";

export default function PageHome(){
  const {albums, isLoadingAlbums} = useAlbums();

  return(
    <Container>
      <ALbumsFilter albums={albums} loading={isLoadingAlbums} className="mb-9" />

      <PhotosList photos={[
        {
          id: "7",
          title: "Olá mundo!",
          imageId: "portrait-tower.png",
          albums: [
            {id: "4", title: "album 1"},
            {id: "5", title: "album 2"},
            {id: "6", title: "album 3"},
          ]
        }
      ]}/>
    </Container>
  );
}