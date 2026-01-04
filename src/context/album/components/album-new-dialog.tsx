import SelectCheckboxIlustration from "../../../assets/images/select-checkbox.svg?react";
import Button from "../../../components/button";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import InputText from "../../../components/Input-text";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";
import usePhotos from "../../photos/hooks/use-photos";

interface AlbumNewDiologProps {
  trigger: React.ReactNode;
}

export default function AlbumNewDiolog({trigger} : AlbumNewDiologProps){
  const {photos, isLoadingPhoto} = usePhotos();

  function handleTogglePhoto(selected: boolean, photoId: string){
    console.log(selected, photoId);
  }

  return(
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar álbum</DialogHeader>
        
        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título"/>

          <div className="space-y-3">
            <Text variant="label-small" className="mb-3 block">Fotos cadastradas</Text>

            {!isLoadingPhoto && photos.length > 0 &&
              <div className="flex flex-wrap gap-3">
                {photos.map(photo=> (
                  <PhotoImageSelectable 
                    key={photo.id} 
                    src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`} 
                    title={photo.title}
                    imageClassName="w-20 h-20"
                    onSelectImage={(selected)=> handleTogglePhoto(selected, photo.id)}
                  />
                ))}
              </div>
            }

            {isLoadingPhoto && ( 
              <div className="flex flex-wrap gap-3">
                {
                  Array.from({length: 4}).map((_, index)=> (
                    <Skeleton key={`photo-loading-${index}`} className="w-20 h-20 rounded-lg"/>
                  ))
                }
              </div>
            )}

            {!isLoadingPhoto && photos.length === 0 &&
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