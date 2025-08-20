import { Dialog, DialogContent } from "@/components/ui/dialog";

interface OfficePreviewModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export const OfficePreviewModal = ({
  imageUrl,
  isOpen,
  onClose,
}: OfficePreviewModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full p-0 overflow-hidden bg-transparent border-0">
        <img
          src={imageUrl}
          alt="Preview"
          className="h-auto object-contain max-h-[90vh] rounded-xl"
        />
      </DialogContent>
    </Dialog>
  );
};
