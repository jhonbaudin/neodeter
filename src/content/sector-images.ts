import { resolveEditableMedia, siteMedia } from "@/content/site-media";
import industryLaundry from "@/assets/sectors/laundry/industrial-laundry.jpg";
import laundryIndustrialMachines from "@/assets/sectors/laundry/laundry-industrial-machines.webp";
import laundryCommercialLifestyle from "@/assets/sectors/laundry/laundry-commercial-lifestyle.jpeg";
import industrialFloorCleaning from "@/assets/sectors/maintenance/industrial-floor-cleaning.jpeg";
import industrialPlantVisit from "@/assets/sectors/maintenance/industrial-plant-visit.jpeg";
import aquamaticLimon from "@/assets/products/neodeter/aquamatic-limon.jpg";
import neoclorDxPlusUsage from "@/assets/products/neodeter/neoclor-dx-plus-usage.webp";
import neocloramFpUsage from "@/assets/products/neodeter/neocloram-fp-usage.webp";
import neograsRemoverPlusUsage from "@/assets/products/neodeter/neogras-remover-plus-usage.webp";
import neograsKitchenCleaning from "@/assets/sectors/food/neogras-kitchen-cleaning.webp";

const sectorMedia = siteMedia.sectors;

export const sectorImages = {
  industrialLaundry: resolveEditableMedia(
    sectorMedia.industrialLaundry,
    industryLaundry,
  ),
  laundryIndustrialMachines: resolveEditableMedia(
    sectorMedia.laundryIndustrialMachines,
    laundryIndustrialMachines,
  ),
  laundryCommercialLifestyle: resolveEditableMedia(
    sectorMedia.laundryCommercialLifestyle,
    laundryCommercialLifestyle,
  ),
  industrialFloorCleaning: resolveEditableMedia(
    sectorMedia.industrialFloorCleaning,
    industrialFloorCleaning,
  ),
  industrialPlantVisit: resolveEditableMedia(
    sectorMedia.industrialPlantVisit,
    industrialPlantVisit,
  ),
  aquamaticLimon: resolveEditableMedia(
    sectorMedia.aquamaticLimon,
    aquamaticLimon,
  ),
  neoclorDxPlusUsage: resolveEditableMedia(
    sectorMedia.neoclorDxPlusUsage,
    neoclorDxPlusUsage,
  ),
  neocloramFpUsage: resolveEditableMedia(
    sectorMedia.neocloramFpUsage,
    neocloramFpUsage,
  ),
  neograsRemoverPlusUsage: resolveEditableMedia(
    sectorMedia.neograsRemoverPlusUsage,
    neograsRemoverPlusUsage,
  ),
  neograsKitchenCleaning: resolveEditableMedia(
    sectorMedia.neograsKitchenCleaning,
    neograsKitchenCleaning,
  ),
} as const;
