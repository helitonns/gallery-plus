import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { api } from "../../../helpers/api";


export default function usePhotoAlbums(){
  const queryClient = useQueryClient();

  async function managePhotoOnAlbum(photosId:string, albumsIds: string[]) {
    try {
      await api.put(`/photos/${photosId}/albums`, {
        albumsIds
      });

      queryClient.invalidateQueries({queryKey: ["photo", photosId]});
      queryClient.invalidateQueries({queryKey: ["photos"]});
      queryClient.invalidateQueries({ queryKey: ["albums"]});

      toast.success("Álbuns atualizados");
    } catch (error) {
      toast.error("Erro ao gerenciar álbuns da foto");
      throw error;
    }
  }

  return {
    managePhotoOnAlbum
  }
}