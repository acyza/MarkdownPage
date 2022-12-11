export const mlp = window["mlp"] = {
  title: "document",
  home: {} as () => void,
  /**前往 */
  go: {} as (name: string) => void,
  back: history.back,
  forword: history.forward,
  current:undefined as string,
  onLoading: {} as (callback: (wait: Promise<void>) => void) => void
}

export default mlp