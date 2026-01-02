import Container from "../components/container";
import PhotoWidgte from "../context/photos/components/photo-widget";
import type { Photo } from "../context/photos/models/photo";

export default function PageHome(){
  return(
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidgte 
          photo={{
            id: "123",
            title: "Olá mundo!",
            imageId: "portrait-tower.png",
            albums: [
              {id: "123", title: "album 1"},
              {id: "124", title: "album 2"},
              {id: "125", title: "album 3"},
            ]
          }}
        />
        <PhotoWidgte 
          photo={{
            id: "123",
            title: "Olá mundo!",
            imageId: "portrait-tower.png",
            albums: [
              {id: "123", title: "album 1"},
              {id: "124", title: "album 2"},
              {id: "125", title: "album 3"},
            ]
          }}
        />
        <PhotoWidgte 
          photo={{
            id: "123",
            title: "Olá mundo!",
            imageId: "portrait-tower.png",
            albums: [
              {id: "123", title: "album 1"},
              {id: "124", title: "album 2"},
              {id: "125", title: "album 3"},
            ]
          }}
        />
        <PhotoWidgte 
          photo={{
            id: "123",
            title: "Olá mundo!",
            imageId: "portrait-tower.png",
            albums: [
              {id: "123", title: "album 1"},
              {id: "124", title: "album 2"},
              {id: "125", title: "album 3"},
            ]
          }}
        />
        <PhotoWidgte 
          photo={{} as Photo}
          loading
        />
      </div>
    </Container>
  );
}