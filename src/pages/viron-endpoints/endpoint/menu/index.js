import { constants as actions } from '../../../../store/actions';
import '../../../../components/viron-error/index.tag';
import './qrcode/index.tag';

export default function() {
  const store = this.riotx.get();

  this.handleEditButtonTap = () => {};

  this.handleDeleteButtonTap = () => {
    Promise
      .resolve()
      .then(() => store.action(actions.ENDPOINTS_REMOVE, this.opts.endpoint.key))
      .then(() => store.action(actions.TOASTS_ADD, {
        message: 'エンドポイントを削除しました。'
      }))
      .then(() => {
        this.close();
      })
      .catch(err => store.action(actions.MODALS_ADD, 'viron-error', {
        error: err
      }));
  };

  this.handleQRCodeButtonTap = () => {
    Promise
      .resolve()
      .then(() => store.action(actions.MODALS_ADD, 'viron-endpoints-page-endpoint-menu-qrcode', {
        endpoint: this.opts.endpoint
      }))
      .then(() => {
        this.close();
      })
      .catch(err => store.action(actions.MODALS_ADD, 'viron-error', {
        error: err
      }));
  };

  this.handleSignoutButtonTap = () => {
    Promise
      .resolve()
      .then(() => store.action(actions.AUTH_REMOVE, this.opts.endpoint.key))
      .then(() => store.action(actions.TOASTS_ADD, {
        message: 'ログアウトしました。'
      }))
      .then(() => {
        this.close();
      })
      .catch(err => store.action(actions.MODALS_ADD, 'viron-error', {
        error: err
      }));
  };
}
