import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

type DeleteAllThreadDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const DeleteAllThreadDialog = ({
  open,
  onClose,
  onConfirm,
}: DeleteAllThreadDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>警告</DialogTitle>
      <DialogContent>
        <DialogContentText>
          本当にすべてのスレッドを削除しますか？この操作は元に戻せません。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={onConfirm} color="error">
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};
