import Container from "../components/container";
import ALbumsFilter from "../context/album/components/albums-filter";
import useAlbums from "../context/album/hooks/use-albums";
import PhotosList from "../context/photos/components/photos-list";
import usePhotos from "../context/photos/hooks/use-photos";

export default function PageHome(){
  const {albums, isLoadingAlbums} = useAlbums();
  const {photos, isLoadingPhoto} = usePhotos();

  return(
    <Container>
      <ALbumsFilter albums={albums} loading={isLoadingAlbums} className="mb-9" />

      <PhotosList photos={photos} loading={isLoadingPhoto}/>
    </Container>
  );
}