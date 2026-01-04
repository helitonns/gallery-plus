import SelectCheckboxIlustration from "../../../assets/images/select-checkbox.svg?react";
import Button from "../../../components/button";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import ImagePreview from "../../../components/image-preview";
import InputText from "../../../components/Input-text";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";

interface AlbumNewDiologProps {
  trigger: React.ReactNode;
}

export default function AlbumNewDiolog({trigger} : AlbumNewDiologProps){
  //apenas para mock
  const isLoading = false;
  const photos: Photo[] = [
        {
          id: "7",
          title: "Olá mundo!",
          imageId: "portrait-tower.png",
          albums: [
            {id: "4", title: "album 1"},
            {id: "5", title: "album 2"},
            {id: "6", title: "album 3"},
          ]
        },
        {
          id: "99",
          title: "Olá mundo!",
          imageId: "portrait-tree.png",
          albums: [
            {id: "7", title: "album 1"},
            {id: "8", title: "album 2"},
            {id: "9", title: "album 3"},
          ]
        },
      ];

  return(
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar álbum</DialogHeader>
        
        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título"/>

          <div className="space-y-3">
            <Text variant="label-small" className="mb-3 block">Fotos cadastradas</Text>

            {!isLoading && photos.length > 0 &&
              <div className="flex flex-wrap gap-3">
                {photos.map(photo=> (
                  <ImagePreview 
                    key={photo.id} 
                    src={`/images/${photo.imageId}`} 
                    title={photo.title}
                    className="w-20 h-20 rounded"
                  />
                ))}
              </div>
            }

            {isLoading && ( 
              <div className="flex flex-wrap gap-3">
                {
                  Array.from({length: 4}).map((_, index)=> (
                    <Skeleton key={`photo-loading-${index}`} className="w-20 h-20 rounded"/>
                  ))
                }
              </div>
            )}

            {!isLoading && photos.length === 0 &&
              <div className="w-full flex flex-col justify-center items-center gap-3">
                <SelectCheckboxIlustration />
                <Text variant="paragraph-medium" className="text-center">
                  Nenhuma foto disponível para a seleção
                </Text>
              </div>
            }
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}