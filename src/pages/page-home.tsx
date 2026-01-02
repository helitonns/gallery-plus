import Container from "../components/container";
import PhotosList from "../context/photos/components/photos-list";

export default function PageHome(){
  return(
    <Container>
      <PhotosList photos={[
        {
          id: "123",
          title: "Olá mundo!",
          imageId: "portrait-tower.png",
          albums: [
            {id: "123", title: "album 1"},
            {id: "124", title: "album 2"},
            {id: "125", title: "album 3"},
          ]
        }
      ]}/>
    </Container>
  );
}