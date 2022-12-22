let mlp_status = 0;
export enum status {
  done,
  loading,
  error,
}
export const mlp = (window["mlp"] = {
  title: "",
  home: {} as () => void,
  /**前往 */
  go: {} as (name: string) => void,
  back: () => history.back(),
  forword: () => history.forward(),
  reflush: {} as () => void,
  current: undefined as string,
  get status() {
    return mlp_status;
  },
  set status(val: status) {
    mlp_status = val;
    window.dispatchEvent(new Event("mlp_status_change"));
  },
  onStatusChange(callback: (status) => void, immediate?: boolean) {
    window.addEventListener("mlp_status_change", () => callback(mlp_status));
    if (immediate) callback(mlp_status);
  },
});

export default mlp;
