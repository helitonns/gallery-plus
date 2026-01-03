import { useParams } from "react-router";
import Button from "../components/button";
import Container from "../components/container";
import ImagePreview from "../components/image-preview";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import AlbumsListSelectable from "../context/album/components/albums-list-selectable";
import PhotosNavigator from "../context/photos/components/photos-navigator";
import type { Photo } from "../context/photos/models/photo";

export default function PagePhotoDatails(){
  const { id } = useParams();

  //apenas para fazer o mock
  const isLoadingPhoto = false;
  const photo = {
    id: "123",
    title: "Olá mundo!",
    imageId: "portrait-tower.png",
    albums: [
      {id: "123", title: "album 1"},
      {id: "124", title: "album 2"},
      {id: "125", title: "album 3"},
    ]
  } as Photo;

  return(
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
            <Text as="h2" variant="heading-large">{photo?.title}</Text>
          ) : (
            <Skeleton className="w-48 h-8"/>
          )
        }

        <PhotosNavigator />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview src={`/images/${photo?.imageId}`} title={photo?.title} className="h-[21rem] rounded"/>
           ):(
            <Skeleton className="h-[21rem]"/>
           )
          }

          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10"/>
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">Álbuns</Text>
          <AlbumsListSelectable 
            albums={[
              {id: "123", title: "Férias"},
              {id: "124", title: "Sítio"},
              {id: "125", title: "Aniversário"},
            ]} 
            photo={photo}
            loading={isLoadingPhoto} 
          />
        </div>
      </div>
    </Container>
  );
}