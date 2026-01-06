import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { api } from '../../../helpers/api';
import usePhotoAlbums from '../../photos/hooks/use-photo-albums';
import usePhotos from '../../photos/hooks/use-photos';
import type { Album } from '../model/album';
import type { AlbumNewFormSchema } from '../schemas';


export default function useAlbum(){
  const queryClient = useQueryClient();
  const {photos} = usePhotos();
  const {managePhotoOnAlbum} = usePhotoAlbums();

  async function createAlbumSchema(payload:AlbumNewFormSchema) {
    try {
      const {data: album} = await api.post<Album>("/albums", { title: payload.title });

      if(payload.photosIds && payload.photosIds.length > 0){
        await Promise.all(payload.photosIds.map(photoId => {
          const photoAlbumsIds = photos.find(photo => photo.id === photoId)?.
            albums?.map(album => album.id) || [];
          
          const photoAlbumsIdsSet = new Set(photoAlbumsIds);
          photoAlbumsIdsSet.add(album.id);

          return managePhotoOnAlbum(photoId, [...photoAlbumsIdsSet]);
        }));
      }

      queryClient.invalidateQueries({ queryKey: ["albums"] });
      queryClient.invalidateQueries({ queryKey: ["photos"] });

      toast.success("Álbum criado com sucesso");
    } catch (error) {
      toast.error("Erro ao criar álbum");
      throw error;
    }
  }



  return {
    createAlbumSchema
  }
}