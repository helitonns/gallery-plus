import { useParams } from "react-router";
import Container from "../components/container";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
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
            <Text variant="heading-large">{photo?.title}</Text>
          ) : (
            <Skeleton className="w-48 h-8"/>
          )
        }

        <PhotosNavigator />
      </header>
    </Container>
  );
}